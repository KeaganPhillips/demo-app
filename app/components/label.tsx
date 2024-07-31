
type LabelProps = {
    title: string,
    value: string
};

export const Label = (props:LabelProps) => {

    const { title, value } = props;

    return (
        <div class='flex flex-row w-fit items-center ' >
            <div class="w-32 mr-2 text-right text-sm font-semibold dark:font-normal text-zinc-900 dark:text-stone-200" >{title}</div>
            <div class="w-80 border p-2 rounded-md border-zinc-300 text-sm font-light text-zinc-700 dark:border-zinc-800 dark:text-zinc-400" >
                {value}
            </div>
        </div>
    );
};
