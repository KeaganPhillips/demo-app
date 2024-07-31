import { AvatarGenerator } from 'random-avatar-generator';


type AvatarProps = {
    url: string,
    fullName: string,
    fullNamePostfix?: string,
    fullNamePrefix?: string,
    role?: string, 
}

export const Avatar = (props: AvatarProps) => 
{    
    const { url, fullName, role, fullNamePostfix, fullNamePrefix } = props;
    const generator = new AvatarGenerator();
    const dummyUrl = generator.generateRandomAvatar();
    

    return (<div >
                <div class={`rounded-full m-auto border-2 border-zinc-900 dark:border-zinc-100 overflow-hidden 
                    sm:w-8   sm:h-8 
                    md:w-8   md:h-8 
                    lg:w-20  lg:h-20 
                    xl:w-20  xl:h-20
                    2xl:w-20 2xl:h-20

                `}> 
                    <img class="object-cover" src={dummyUrl} alt="User Avatar"/>
                </div>
                <div class="mt-1 text-center text-xs font-semibold  
                    sm:text-[9px]
                    md:text-[9px]
                    lg:text-[13px]
                    xl:text-[13px]
                    2xl:text-[13px]
                    "
                >    
                    {
                        fullNamePrefix &&
                            <span class='text-center text-xs font-semibold mr-2 bg-zinc-950 p-1 rounded-lg text-zinc-50 ' >
                                {fullNamePrefix}
                            </span>
                    }                   
                    {fullName}
                    {
                        fullNamePostfix &&
                            <span class='text-center text-xs font-semibold ml-2 bg-zinc-950 p-1 rounded-lg text-zinc-50 ' >
                                {fullNamePostfix}
                            </span>
                    }
                </div>
                {
                    role && (
                        <div class="mt-0.5 text-center text-xs 
                            sm:text-[8px]
                            md:text-[8px]
                            lg:text-[10px]
                            xl:text-[10px]
                            2xl:text-[10px]"
                        >
                            {role}
                        </div>
                    )
               }

            </div>);
}