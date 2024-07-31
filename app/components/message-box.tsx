import { cn } from "infra/utils";
import type { ComponentProps } from "preact";


type MessageBoxProps = {    
    variant: 'error' | 'info' | 'success' | 'warning'
}

const baseStyles = "flex flex-row h-full justify-center items-center p-4 rounded-md text-sm my-2 ";
const variantStyles = {
    error: 'border rounded-md dark:text-red-700 dark:border-red-700 text-red-600 border-red-600 ',
    info: "bg-blue-700",
    success: "bg-green-700",
    warning: "bg-yellow-700"
};

export const MessageBox = ({class: className, children, variant }: MessageBoxProps & ComponentProps<"div"> ) => {    
    
    return (
        <div class={cn(baseStyles, variantStyles[variant], className)}  >         
            {children}
        </div>
    );
}