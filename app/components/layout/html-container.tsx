import type { ComponentChildren } from "preact";

type HtmlContainerProps = {
    children: ComponentChildren
}

export const HtmlContainer = ({children}: HtmlContainerProps) => 
    <html lang="en" id='htmlContainer' class="" >
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="/css/styles.css" rel="stylesheet"/>            
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
            <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>                        
            <script defer src="/js/web-components.js"></script>
            <script defer src="/js/main.js"></script>

            <title>Prop App POC</title>
        </head>
        <body   class="h-screen w-screen
                        bg-zinc-100        text-zinc-600
                        dark:bg-zinc-950   dark:text-zinc-300" 
                id="app-body" 
                x-cloak
                x-data="{ isLoading: false }"
        >
            {children}
        </body>
    </html>