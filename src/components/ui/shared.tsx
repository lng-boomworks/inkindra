import React from "react";

import { Info, CheckCircle2 } from "lucide-react";

// Buttons
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline-white" | "white";
  href?: string;
  external?: boolean;
}

export function Button({ variant = "primary", href, external, className = "", children, ...props }: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-teal-deep text-white hover:bg-[#0a4537] hover:-translate-y-px shadow-sm hover:shadow",
    ghost: "border-[1.5px] border-teal-mid text-teal-deep hover:bg-teal-pale",
    "outline-white": "border-[1.5px] border-white text-white hover:bg-white/10",
    white: "bg-white text-teal-deep hover:bg-white/90 hover:-translate-y-px shadow-sm",
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Trust Pill
export function TrustPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-medium text-text-muted whitespace-nowrap">
      <div className="w-1.5 h-1.5 rounded-full bg-teal-deep" />
      {text}
    </div>
  );
}

// Phase 1 Scope Notice
export function ScopeNotice({ title = "Phase 1 Scope Notice", children }: { title?: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 md:p-6 bg-ivory border-l-[3px] border-teal-mid rounded-lg my-8">
      <Info className="w-6 h-6 text-teal-mid shrink-0 mt-0.5" />
      <div>
        <h4 className="font-serif font-semibold text-lg text-teal-deep mb-2">{title}</h4>
        <div className="text-text-body text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// Check Item
export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-1" />
      <span className="text-text-body">{children}</span>
    </li>
  );
}
