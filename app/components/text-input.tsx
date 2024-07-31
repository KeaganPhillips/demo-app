import type {  ComponentProps } from "preact";
import { cn } from 'infra/utils'
import FieldError from './field-error';



const baseStyle = `peer w-full rounded border  p-2 `;

const variants = {
    'read-only': 'bg-zinc-950 text-zinc-200 focus:outline-none focus:ring-0',
    'disabled': `border-zinc-800 bg-zinc-800 dark:text-zinc-600
            active:border-zinc-100
        `,
    'default': `dark:text-zinc-100 dark:bg-zinc-950 dark:border-zinc-500 dark:placeholder-zinc-700
                text-zinc-900 bg-zinc-100 border-zinc-300 placeholder-zinc-400
                focus:outline-none focus:ring-1 dark:focus:ring-zinc-300 focus:ring-zinc-700 focus:border-transparent`
};



type TextInputProps = {    
    requiredMessage?: string,
    invalidMessage?: string,
    label?: string,
    variant?: 'read-only' | 'disabled' | 'default',
    typeErrorEmailMessage?: string
};


export const TextInput = (props: TextInputProps & ComponentProps<"input"> ) => 
{
    const {name, type='text', placeholder='', requiredMessage='This field is required', 
        label, invalidMessage = 'Please enter a valid value', variant = 'default',
        typeErrorEmailMessage = '* Invalid email address' } = props;

    

    return (<div class="flex flex-col mt-5" x-data="{ userInteracted: false, focusedOut: false }"  >
                {
                    label && <label class="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pb-2 " for={name}>{label}</label>
                }                
                <input        
                    //id={name}
                    //type={type} 
                    //name={name}          
                    {...props}
                    x-bind:readonly={`isLoading ? true : false`}
                    //placeholder={placeholder}
                    class={cn(baseStyle, props.class, variants[variant])}
                    x-on:focusout={`setTimeout( () => { 
                            userInteracted=true;
                            focusedOut=true; 
                        }, 100)`}
                    x-on:keyDown={`setTimeout( () => userInteracted=true, 150)`
                    }
                />
                <FieldError name={name}                             
                            x-bind:class={` userInteracted || forceShowInvalidFields 
                                ? 'peer-[&(:placeholder-shown):required]:block hidden' 
                                : 'hidden'`
                            }
                >
                    {requiredMessage}
                </FieldError>         
                {/* <p x-text='focusedOut' ></p> */}
                
                {/* <FieldError name={name} class={`peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden`}>{invalidMessage}</FieldError> */}
                
                {/* {regexPattern && (<FieldError name={name} postFix="Regex" >{regexMessage}</FieldError>)} */}
                {type === 'email' && typeErrorEmailMessage && (
                    <FieldError name={name} x-bind:class={
                            `(userInteracted && focusedOut)  || forceShowInvalidFields 
                                ? 'peer-[&:not(:placeholder-shown):invalid]:block hidden' 
                                : 'hidden'`
                        }
                    >
                        {typeErrorEmailMessage}
                    </FieldError>
                )}
                
              
            </div>);
}
