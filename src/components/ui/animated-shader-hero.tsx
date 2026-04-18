import React, { useEffect, useRef } from "react";
import { ArrowRight, Mail, Microscope, Stethoscope } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { brandAssets } from "@/lib/data";

interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

type UniformProgram = WebGLProgram & {
  resolution?: WebGLUniformLocation | null;
  time?: WebGLUniformLocation | null;
  move?: WebGLUniformLocation | null;
  touch?: WebGLUniformLocation | null;
  pointerCount?: WebGLUniformLocation | null;
  pointers?: WebGLUniformLocation | null;
};

const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.35,-st.y));
  uv*=1.-.24*(sin(T*.18)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.085*cos(i*vec2(.1+.01*i,.8)+i*i+T*.4+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.0013/d*(cos(sin(i)*vec3(1.0,2.3,3.1))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    vec3 mixColor=vec3(0.08,0.12,0.36) + vec3(0.54,0.08,0.12) * bg;
    col=mix(col,mixColor,d);
  }
  col.r += 0.14;
  col.b += 0.22;
  O=vec4(col,1);
}`;

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const pointersRef = useRef<PointerHandler | null>(null);

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: UniformProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;
    private shaderSource: string;
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = [0, 0];
    private nbrOfPointers = 0;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      const context = canvas.getContext("webgl2");
      if (!context) {
        throw new Error("WebGL2 is not supported in this browser.");
      }
      this.canvas = canvas;
      this.scale = scale;
      this.gl = context;
      this.shaderSource = defaultShaderSource;
      this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
    }

    updateShader(source: string) {
      this.reset();
      this.shaderSource = source;
      this.setup();
      this.init();
    }

    updateMove(deltas: number[]) {
      this.mouseMove = deltas;
    }

    updateMouse(coords: number[]) {
      this.mouseCoords = coords;
    }

    updatePointerCoords(coords: number[]) {
      this.pointerCoords = coords;
    }

    updatePointerCount(nbr: number) {
      this.nbrOfPointers = nbr;
    }

    updateScale(scale: number) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
    }

    test(source: string) {
      const gl = this.gl;
      const shader = gl.createShader(gl.FRAGMENT_SHADER);
      if (!shader) return "Fragment shader unavailable";
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const result = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        ? null
        : gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      return result;
    }

    reset() {
      const gl = this.gl;
      if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
        if (this.vs) {
          gl.detachShader(this.program, this.vs);
          gl.deleteShader(this.vs);
        }
        if (this.fs) {
          gl.detachShader(this.program, this.fs);
          gl.deleteShader(this.fs);
        }
        gl.deleteProgram(this.program);
      }
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER);
      this.fs = gl.createShader(gl.FRAGMENT_SHADER);
      if (!this.vs || !this.fs) return;
      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.shaderSource);
      this.program = gl.createProgram() as UniformProgram | null;
      if (!this.program) return;
      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);
    }

    init() {
      if (!this.program) return;
      const gl = this.gl;
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(this.program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      this.program.resolution = gl.getUniformLocation(this.program, "resolution");
      this.program.time = gl.getUniformLocation(this.program, "time");
      this.program.move = gl.getUniformLocation(this.program, "move");
      this.program.touch = gl.getUniformLocation(this.program, "touch");
      this.program.pointerCount = gl.getUniformLocation(this.program, "pointerCount");
      this.program.pointers = gl.getUniformLocation(this.program, "pointers");
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;
      if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

      gl.uniform2f(program.resolution ?? null, this.canvas.width, this.canvas.height);
      gl.uniform1f(program.time ?? null, now * 1e-3);
      gl.uniform2f(program.move ?? null, this.mouseMove[0], this.mouseMove[1]);
      gl.uniform2f(program.touch ?? null, this.mouseCoords[0], this.mouseCoords[1]);
      gl.uniform1i(program.pointerCount ?? null, this.nbrOfPointers);
      gl.uniform2fv(program.pointers ?? null, this.pointerCoords);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  class PointerHandler {
    private scale: number;
    private active = false;
    private pointers = new Map<number, number[]>();
    private lastCoords = [0, 0];
    private moves = [0, 0];

    constructor(element: HTMLCanvasElement, scale: number) {
      this.scale = scale;
      const map = (x: number, y: number) => [x * this.scale, element.height - y * this.scale];

      element.addEventListener("pointerdown", (event) => {
        this.active = true;
        this.pointers.set(event.pointerId, map(event.clientX, event.clientY));
      });

      const leave = (event: PointerEvent) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(event.pointerId);
        this.active = this.pointers.size > 0;
      };

      element.addEventListener("pointerup", leave);
      element.addEventListener("pointerleave", leave);

      element.addEventListener("pointermove", (event) => {
        if (!this.active) return;
        this.lastCoords = [event.clientX, event.clientY];
        this.pointers.set(event.pointerId, map(event.clientX, event.clientY));
        this.moves = [this.moves[0] + event.movementX, this.moves[1] + event.movementY];
      });
    }

    updateScale(scale: number) {
      this.scale = scale;
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0];
    }

    get first() {
      return this.pointers.values().next().value ?? this.lastCoords;
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const resize = () => {
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      rendererRef.current?.updateScale(dpr);
      pointersRef.current?.updateScale(dpr);
    };

    const loop = (now: number) => {
      if (!rendererRef.current || !pointersRef.current) return;
      rendererRef.current.updateMouse(pointersRef.current.first);
      rendererRef.current.updatePointerCount(pointersRef.current.count);
      rendererRef.current.updatePointerCoords(pointersRef.current.coords);
      rendererRef.current.updateMove(pointersRef.current.move);
      rendererRef.current.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    try {
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      rendererRef.current = new WebGLRenderer(canvas, dpr);
      pointersRef.current = new PointerHandler(canvas, dpr);
      rendererRef.current.setup();
      rendererRef.current.init();
      resize();

      if (rendererRef.current.test(defaultShaderSource) === null) {
        rendererRef.current.updateShader(defaultShaderSource);
      }
      loop(0);
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        rendererRef.current?.reset();
      };
    } catch {
      return undefined;
    }
  }, []);

  return canvasRef;
};

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
}) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative overflow-hidden rounded-[36px] ${className}`}>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none object-cover"
        style={{ background: "#040812" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,99,112,0.18),transparent_22%),linear-gradient(135deg,rgba(8,16,45,0.55),rgba(9,16,55,0.72)_42%,rgba(197,26,36,0.34)_100%)]" />

      <div className="relative z-10 grid min-h-[760px] gap-8 px-5 py-8 text-white lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
        <div className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 backdrop-blur-md md:p-8">
          <div>
            {trustBadge ? (
              <div className="animate-fade-in-down mb-8">
                <div className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur-md">
              {trustBadge.icons?.length ? (
                <div className="flex gap-1 text-brand-red">{trustBadge.icons.join(" ")}</div>
              ) : null}
              <span className="text-white/90">{trustBadge.text}</span>
                </div>
              </div>
            ) : null}

            <div className="space-y-2">
              <h1 className="animate-fade-in-up animation-delay-200 max-w-[9ch] bg-gradient-to-r from-white via-[#d7defe] to-[#f5f7ff] bg-clip-text font-display text-5xl font-semibold tracking-[-0.06em] text-transparent md:text-7xl lg:text-[5.9rem]">
                {headline.line1}
              </h1>
              <h1 className="animate-fade-in-up animation-delay-400 max-w-[10ch] bg-gradient-to-r from-[#ffd6d9] via-[#ff9ca3] to-[#fff1f2] bg-clip-text font-display text-5xl font-semibold tracking-[-0.06em] text-transparent md:text-7xl lg:text-[5.9rem]">
                {headline.line2}
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-600 mt-6 max-w-2xl">
              <p className="text-lg leading-8 text-white/82 md:text-2xl md:leading-10">
                {subtitle}
              </p>
            </div>

            {buttons ? (
              <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-col gap-4 sm:flex-row">
                {buttons.primary ? (
                  <LiquidButton
                    onClick={buttons.primary.onClick}
                    size="xxl"
                    className="text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      {buttons.primary.text}
                      <ArrowRight size={18} />
                    </span>
                  </LiquidButton>
                ) : null}
                {buttons.secondary ? (
                  <LiquidButton
                    onClick={buttons.secondary.onClick}
                    variant="outline"
                    size="xxl"
                    className="border-white/45 bg-white text-brand-ink shadow-[0_18px_40px_rgba(255,255,255,0.14)] hover:bg-[#eef4ff]"
                  >
                    <span className="inline-flex items-center gap-2">
                      {buttons.secondary.text}
                      <Mail size={18} />
                    </span>
                  </LiquidButton>
                ) : null}
              </div>
            ) : null}

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                  What Matchify Covers
                </p>
                <div className="flex items-start gap-3">
                  <Microscope className="mt-1 text-[#ffd1d4]" size={18} />
                  <p className="max-w-xl text-base leading-7 text-white/85">
                    Research, abstracts, publications, clinical rotations, visas,
                    ERAS, interviews, and the post-interview process.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                  Founder Credibility
                </p>
                <div className="flex items-start gap-3">
                  <Stethoscope className="mt-1 text-[#cfd9ff]" size={18} />
                  <p className="text-base leading-7 text-white/85">
                    110+ publications and abstracts across Matchify&apos;s founding team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-[24px] border border-white/10 bg-black/15 px-4 py-3 text-sm text-white/75 backdrop-blur-md">
            <img
              src="/assets/matchify-logo.png"
              alt="Matchify mark"
              className="h-12 w-12 rounded-full bg-white/90 p-2 object-contain"
            />
            <div>
              <p className="font-display text-2xl text-white">Built to Get You Matched.</p>
              <p className="text-white/65">Physician-led advisory for a more complete residency profile.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(240,243,255,0.78))] p-5 text-brand-ink shadow-2xl shadow-[#040812]/30">
            <div className="overflow-hidden rounded-[20px]">
              <video
                src="/assets/matchify-launch.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[240px] w-full rounded-[20px] object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red">
                  Matchify Identity
                </p>
                <p className="mt-1 font-display text-2xl text-brand-ink">
                  A premium one-stop residency brand.
                </p>
              </div>
              <LiquidButton
                size="lg"
                onClick={buttons?.secondary?.onClick}
              >
                See Services
              </LiquidButton>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffd4d7]">
                Matchify Focus
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">A complete residency roadmap</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Matchify combines exam planning, research strategy, ERAS positioning, and interview coaching inside one coordinated advisory flow.
              </p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-[18px] border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/82">
                  Physician-led strategy and profile review
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/82">
                  Publication and abstract mentorship for stronger academic positioning
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-5 backdrop-blur-md">
              <div className="flex flex-col gap-4 rounded-[22px] bg-[linear-gradient(150deg,#15205b_0%,#26357f_52%,#c51a24_100%)] p-5">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">
                    Research Batch
                  </p>
                  <img
                    src={brandAssets.acgLogo}
                    alt="American College of Gastroenterology"
                    className="mt-3 h-16 w-16 rounded-[14px] bg-white p-2 object-contain"
                  />
                </div>
                <p className="text-sm leading-7 text-white/80">
                  Inaugural abstract-support cohort shaped for applicants preparing research work for the American College of Gastroenterology.
                </p>
              </div>
              <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffd4d7]">
                Intentional research positioning
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">Built for applicants who want academic work to count</h3>
              <p className="mt-2 text-sm leading-7 text-white/76">
                Structured topic refinement, abstract readiness, authorship discipline, and conference storytelling for applicants building a more credible research profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
