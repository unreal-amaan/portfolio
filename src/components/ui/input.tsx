import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-12 rounded-md border border-white/10 focus:border-primary font-light bg-background px-4 py-5 text-base placeholder:text-white/60 outline-none  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ",
                className
            )}
            {...props}
        />
    );
}

export { Input };
