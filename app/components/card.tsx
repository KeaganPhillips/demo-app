import { cn } from "infra/utils";
import type { ComponentChildren } from "preact";

const baseStyles = `lex flex-col w-80 p-5 m-2
            border rounded-lg 
            border-zinc-300 bg-zinc-100 
            dark:border-stone-700 dark:bg-stone-950`;

type CardProps = {
    title?: string,
    titleIcon?: string,
    description?: string,
    children?: ComponentChildren,
    footer?: ComponentChildren,
    class?: string
};

export const Card = (props: CardProps) => {
    const { title, titleIcon, description, children, footer } = props;
    
    return (
        <div class={cn(baseStyles, props.class || "")}
        >
            {
                title && 
                    (<div class="flex flex-row items-center " >
                        {
                            titleIcon &&
                                <img src={`/images/${titleIcon}`} class="w-6 h-6 mr-2 " />
                        }
                        <div class="text-xl font-bold" >            
                            {title}
                            {description && <div class="text-sm font-light " >{description}</div>}    
                        </div>
                    </div>)
            }
            <div class="" >
                {children}
            </div>
            {
                footer && 
                    (<div class="mt-3 pt-3  " >
                        {footer}
                    </div>)
            }
        </div>);
}

export default Card;
