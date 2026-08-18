import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "h-12 w-full min-w-0 rounded-none border-0 border-b border-border bg-transparent px-0 py-3 font-sans text-sm text-foreground shadow-none outline-none transition-colors placeholder:text-subtle focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
                "focus-visible:ring-0",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
