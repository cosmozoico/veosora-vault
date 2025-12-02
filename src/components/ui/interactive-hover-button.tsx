import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full p-2 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 text-white opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[10%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-white transition-all duration-500 ease-out group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-[#1afb65] group-hover:to-[#0dd0c6]"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
