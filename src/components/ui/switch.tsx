"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = ({ checked = false, onCheckedChange }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full border transition-colors",
        isChecked
          ? "border-yellow-300/40 bg-brand-ink"
          : "border-brand-blue/10 bg-slate-200",
      )}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
    >
      <motion.span
        className={cn(
          "relative inline-block h-5 w-5 rounded-full",
          isChecked ? "bg-yellow-300" : "bg-brand-blue",
        )}
        animate={{
          x: isChecked ? 20 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          bounce: 0,
        }}
      >
        {isChecked ? (
          <motion.div
            className="absolute h-full w-full rounded-full bg-yellow-500 blur-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.02 }}
          />
        ) : null}
      </motion.span>
    </motion.button>
  );
};

export default Switch;
