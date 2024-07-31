import { cn } from "infra/utils";
import type { VNode } from "preact";

const containerBaseStyle = `flex flex-col items-center p-3 rounded-md bg-zinc-100 dark:bg-zinc-950 `;
const labelStyle = `text-sm mt-1 font-light text-zinc-700 dark:text-stone-400`;

const containerSelectedStyle =   cn(containerBaseStyle, `border-2 border-zinc-950 dark:border-zinc-100 `);
const containerUnselectedStyle = cn(containerBaseStyle, `border-2 border-zinc-300 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer`);

export type Option = {
    id: string;
    icon: JSX.Element;
    text: string;
    selected?: boolean;
    hxPost?: string;    
    xClick?: string;
}

type OptionsProps = {
    options: Option[];
};

export const Options = ({options}: OptionsProps) => {    

  return (
    <div class='flex flex-row space-x-5 ' >
        {options.map((option, index) => (
            <div //key={index} 
                //class={option.selected ? containerSelectedStyle : containerUnselectedStyle } 
                hx-post={option.hxPost}
                id={option.id}
                x-bind:class={`selectedOption === '${option.id}' ? '${containerSelectedStyle}' : '${containerUnselectedStyle}'`} 
                x-on:click={option.xClick}
            >
                <div class="w-8 h-8" >{option.icon}</div>
                <div class={labelStyle} >{option.text}</div>
            </div>            
        ))}      
    </div>
  );
}