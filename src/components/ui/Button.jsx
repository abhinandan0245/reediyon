import { forwardRef } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-primary text-white border border-primary hover:text-white shadow-[0_6px_0_0_rgb(0,145,60)]",
  secondary:
    "bg-[#171717] text-white border border-white/10 hover:border-primary shadow-[0_6px_0_0_rgb(0,145,60)]",
  outline:
    "bg-transparent border-2 border-current text-primary hover:bg-primary hover:text-white hover:border-primary shadow-[0_6px_0_0_rgb(0,145,60)]",
  "outline-light":
    "bg-transparent border-2 border-white/70 text-white hover:bg-white hover:text-primary hover:border-white shadow-[0_6px_0_0_rgba(255,255,255,0.25)]",
  ghost: "bg-transparent text-white hover:bg-white/5",
  danger:
    "bg-red-500 border border-red-500 text-white hover:bg-red-600 shadow-[0_6px_0_0_rgb(153,27,27)]",
  blue: "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 shadow-[0_6px_0_0_rgb(29,78,216)]",
  purple:
    "bg-purple-500 border border-purple-500 text-white hover:bg-purple-600 shadow-[0_6px_0_0_rgb(107,33,168)]",
  pink: "bg-pink-500 border border-pink-500 text-white hover:bg-pink-600 shadow-[0_6px_0_0_rgb(157,23,77)]",
  orange:
    "bg-orange-500 border border-orange-500 text-white hover:bg-orange-600 shadow-[0_6px_0_0_rgb(154,52,18)]",
  teal: "bg-teal-500 border border-teal-500 text-white hover:bg-teal-600 shadow-[0_6px_0_0_rgb(15,118,110)]",
  indigo:
    "bg-indigo-500 border border-indigo-500 text-white hover:bg-indigo-600 shadow-[0_6px_0_0_rgb(67,56,202)]",
  cyan: "bg-cyan-500 border border-cyan-500 text-white hover:bg-cyan-600 shadow-[0_6px_0_0_rgb(14,116,144)]",
  rose: "bg-rose-500 border border-rose-500 text-white hover:bg-rose-600 shadow-[0_6px_0_0_rgb(159,18,57)]",
  yellow:
    "bg-yellow-500 border border-yellow-500 text-black hover:bg-yellow-600 shadow-[0_6px_0_0_rgb(161,98,7)]",
  emerald:
    "bg-emerald-500 border border-emerald-500 text-white hover:bg-emerald-600 shadow-[0_6px_0_0_rgb(4,120,87)]",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-14 px-10 text-lg",
};

const shapes = {
  pill: "rounded-full",
  rounded: "rounded-3xl",
  soft: "rounded-2xl",
  square: "rounded-xl",
  rectangle: "rounded-md",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      shape = "pill",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      onClick,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={loading || disabled}
        className={clsx(
          "group relative isolate overflow-hidden inline-flex items-center justify-center cursor-pointer",
          "font-semibold tracking-wide",
          "transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)]",
          "translate-y-0",
          "hover:translate-y-[6px]",
          "hover:shadow-none",
          "active:translate-y-[6px]",
          "active:shadow-none",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          "disabled:pointer-events-none disabled:opacity-60",
          variants[variant],
          sizes[size],
          shapes[shape],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {/* Hover expanding circle effect */}
        <span
          className="
            absolute left-1/2 top-1/2 h-0 w-0 rounded-full bg-white/15 
            -translate-x-1/2 -translate-y-1/2 transition-all duration-700 
            ease-out group-hover:h-[320px] group-hover:w-[320px] pointer-events-none
          "
        />

        {/* Inner border glow effect */}
        <span className="absolute inset-0 rounded-inherit border border-white/10 transition-colors duration-500 group-hover:border-white/20 pointer-events-none" />

        {/* Light sweep effect */}
        <span
          className="
            absolute left-[-140%] top-0 h-full w-20 -skew-x-12 bg-white/20 
            blur-md transition-all duration-1000 group-hover:left-[140%] pointer-events-none
          "
        />

        {/* Content wrapper */}
        <span className="relative z-10 flex items-center gap-2 pointer-events-none">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : leftIcon}
          {children}
          {!loading && rightIcon}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
