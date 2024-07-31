import type { ComponentProps } from "preact";
import { cn } from 'infra/utils';

const baseStyle = `py-2 px-3 rounded-md w-full border
    hover:shadow-md hover:transition-all hover:duration-100 
    active:transition-all active:duration-100
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-1 focus:border-transparent focus:shadow-md
`;

const variantStyles = {
    primary: `bg-zinc-900 text-zinc-300 dark:bg-zinc-100 dark:text-zinc-600 focus:ring-zinc-50
        hover:bg-zinc-700 hover:text-zinc-100 dark:hover:bg-zinc-50 dark:hover:text-zinc-800 
        active:bg-zinc-950 active:border-zinc-800 dark:active:bg-zinc-200 dark:active:border-zinc-200 
        disabled:hover:bg-zinc-900 disabled:border-zinc-100 disabled:text-zinc-300
        dark:disabled:hover:bg-zinc-50 dark:disabled:border-zinc-100 dark:disabled:text-zinc-600`,
    ghost: `bg-zinc-200 text-zinc-800 border-zinc-400 focus:ring-zinc-950   dark:bg-zinc-950 dark:text-zinc-200 dark:focus:ring-zinc-200
            hover:bg-zinc-300 hover:text-zinc-900           dark:hover:bg-zinc-800 dark:hover:text-zinc-200 
            active:bg-zinc-400 active:border-zinc-400       dark:active:bg-zinc-950 dark:active:border-zinc-200 
        disabled:hover:bg-zinc-900 disabled:border-zinc-100 disabled:text-zinc-300
        dark:disabled:hover:bg-zinc-50 dark:disabled:border-zinc-100 dark:disabled:text-zinc-600`,
    secondary: 'bg-blue-900 text-gray-200 hover:bg-blue-800 hover:text-white active:bg-blue-950 active:border-blue-950 disabled:hover:bg-zinc-800 disabled:border-zinc-700 disabled:text-zinc-600 ',
    danger: 'bg-red-900 text-gray-200 hover:bg-red-800 hover:text-white active:bg-red-950 active:border-red-950 disabled:hover:bg-zinc-800 disabled:border-zinc-700 disabled:text-zinc-600 ',

};


type ButtonProps = {
    text?: string,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset',
    form?: string,
    iconRight?: string,
    variant?: 'primary' | 'ghost' | 'secondary' | 'danger',
}


export const Button = ({ children, text, type, form, variant = 'primary', ...props } : ButtonProps  & ComponentProps<"button"> ) => 
    <button                 
        type={type || 'button'}
        form={form}
        {...props}
        class={cn(baseStyle, `${variantStyles[variant]} ${props.class}`)}
    >
        {text && text}
        {children && children}
    </button>;


export const ButtonCTA = ({ text, type, form, iconRight } : ButtonProps) => 
    <button class="button-cta w-full "
        type={type || 'button'}
        form={form}
    >
        <div class="flex flex-row justify-center" >
            {text}
            {
                iconRight && 
                    <img class="ml-3 w-6 h-6 " src={`${iconRight}`} />
            }
        </div>
    </button>;

export const ButtonCtaBig = ({ text, type, form } : ButtonProps) => 
    <button class="button-cta text-2xl  w-lg px-10 py-10"
        type={type || 'button'}
        form={form}
    >
        {text}
    </button>;
