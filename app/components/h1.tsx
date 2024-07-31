import { cn } from "infra/utils";
import type { ComponentChildren, ComponentProps } from "preact";


const baseStyle = "text-2xl font-bold text-zinc-900 dark:text-stone-200";

type H1Type = {
    children: ComponentChildren
};

export const H1 = (props: H1Type & ComponentProps<"h1">) => {
    const { children } = props;
    return <h1 class={cn(baseStyle, props.class )} >{children}</h1>;
}
