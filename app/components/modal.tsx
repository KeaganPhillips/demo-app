import type { ComponentChildren } from "preact"


type ModalProps = {
    id: string,
    title?: string,
    description?: string,
    children?: ComponentChildren,    
    footer?: ComponentChildren,
    showModalVariableName: string
}


export const Modal = ({id, title, description, children, footer, showModalVariableName}: ModalProps) => 
    <div id={id} class="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true"
            x-data="{ open: false }"    
            
    >
    <div 
        class="fixed inset-0 bg-zinc-200 bg-opacity-75 transition-opacity "
        x-show={showModalVariableName}
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
    />
    

    <div class=" fixed inset-0 z-10 w-screen overflow-y-auto" x-show={showModalVariableName}>
        <div class="flex min-h-full items-end justify-center py-10 text-center sm:items-center sm:p-0">
            <div class="absolute top-10 transform overflow-hidden rounded-lg text-left shadow-sm transition-all sm:my-3 mx-2 sm:w-full sm:max-w-lg
                        bg-zinc-50 border border-zinc-300
                        dark:bg-zinc-950 dark:text-zinc-100"
                        x-show={showModalVariableName}
                        x-transition:enter="transition ease-out duration-300"
                        x-transition:enter-start="opacity-0 scale-90"
                        x-transition:enter-end="opacity-100 scale-100"
                        x-transition:leave="transition ease-in duration-300"
                        x-transition:leave-start="opacity-100 scale-100"
                        x-transition:leave-end="opacity-0 scale-90"
                    >
                <div class=" px-4 pb-4 pt-1 sm:p-6 sm:pb-4">
                    {
                        title && 
                            (<div class="border-b border-zinc-300 dark:border-zinc-800  pb-2 mb-2 " >
                                <h2>{title}</h2>   
                                {
                                    description && <span class="text-xs text-zinc-500 " >{description}</span>
                                }             
                            </div>)
                    }
                    <div class="py-2" >
                        {children}
                    </div>
                </div>
                <>
                    {footer}
                </>
            </div>
        </div>
    </div>
</div>
