import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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


@customElement('x-button')
export class XButton extends LitElement {
    @property({type: String}) text = '';
    @property({type: String}) variant = 'primary' as keyof typeof variantStyles;
    @property({type: String}) type = 'button';
    @property({type: String}) form = '';
    //@property({type: String}) xOnClick = '';
    @property({type: () => {}}) onClick = () => {};

//x-on:click="${this.xOnClick}"
    render() {
        return html`
            <link rel="stylesheet" href="/css/styles.css">            
            <button         
                class="${baseStyle} ${variantStyles[this.variant]}"
                type="${this.type}"
                ${ this.form ? `form="${this.form}"` : ''}
                onClick="alert('test')"  
            >
                ${this.text}                
            </button>
        `;
    }
};

export interface XButtonProps {
    text: string,
    type?: string,
    xOnClick?: string,
    onClick?: () => void,
}