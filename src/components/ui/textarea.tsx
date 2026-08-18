import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "min-h-40 w-full resize-y rounded-none border-0 border-b border-border bg-transparent px-0 pt-0 pb-3 font-sans text-sm text-foreground shadow-none outline-none transition-colors placeholder:text-subtle focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
                "focus-visible:ring-0",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
