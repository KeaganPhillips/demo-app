import type {  ComponentProps, JSX } from "preact";
import { cn } from "infra/utils";


const baseStyle = `dark:text-red-400 text-red-500 text-sm mt-1`;

export default (props: ComponentProps<"span">) => {

    const { children } = props;
    
    return  <span 
                {...props} 
                class={cn(baseStyle, props.class)} 
            >
                {children}
            </span>;
}
