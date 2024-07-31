import type { ComponentChildren, VNode } from "preact";
import { Avatar } from "components";
import { IconDashboard, IconLogout, IconProfile, IconReport, IconUserManagement } from "components/icons/*"; 
import type { SideNavLink } from "./app-container";

const baseStyle = "m-1 px-1 py-1 rounded-md transition-colors duration-75";
const styleSelected = `${baseStyle} bg-zinc-900 text-zinc-300 dark:bg-zinc-300 dark:text-zinc-900 `;
const styleUnselected = `${baseStyle} hover:bg-zinc-300  cursor-pointer dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100`;

type MenuTitleProps = {
    title?: string
}
const MenuTitle = ({title}: MenuTitleProps) => 
    <div class="mt-5 pl-4 text-xs font-bold text-[11px] uppercase">{title}</div>;

type MenuItemProps = {    
    icon: JSX.Element,
    title?: string,
    path?: string,
    navKey: string,
    onClick?: string;
}
const MenuItem = ({icon, title, path, navKey, onClick}: MenuItemProps ) =>    
    <a 
        
        x-bind:class={`selectedNavKey === '${navKey}' ? '${styleSelected}' : '${styleUnselected}' `}
        x-on:click={`$event.preventDefault(); if('${path}' != ''){selectedNavKey = '${navKey}';window.navigateTo('${path}')}; ${onClick ?? ''} `} 
    >
        <div class="w-full flex items-center group select-none ">
            <div class="w-1 rounded-xl h-8 bg-transparent relative overflow-hidden">
                <div x-bind:class={`selectedNavKey === '${navKey}' ? 'side-nav-ind-selected' : 'side-nav-ind-unselected' `}></div>                
            </div>
            <div>
                <div class="flex flex-row " >
                    <span class="h-5 w-5 mr-1">{icon}</span>
                    <span class="">{title}</span>
                </div>
            </div>
        </div>
    </a>;

type SideNavProps = {
    selectedKey: string ,
    sideNavLinks: SideNavLink[]
};

export default ({selectedKey, sideNavLinks}:SideNavProps) => {

    sideNavLinks = [
        { title: 'Dashboard', path: '/dashboard', navKey: 'dashboard', icon: <IconDashboard/> },
        { title: 'Reports', path: '/reports', navKey: 'reports', icon: <IconReport/> },
        { title: 'User Management', path: '/user-management', navKey: 'user-management', icon: <IconUserManagement/> }
    ];

    return(
            <div class="flex flex-col h-screen fixed w-48 border-r border-zinc-300  dark:bg-zinc-950   dark:border-zinc-800" >
                <aside class={`items-center pt-5 pb-2 space-y-7 
                               dark:text-zinc-400
                            hidden lg:flex lg:flex-col
                            `}
                >
                    <div class="w-full  flex flex-col text-sm" 
                        x-data={`{ selectedNavKey: "${selectedKey}" }`} 
                    >
                        <div class='border-b border-zinc-300 dark:border-zinc-700 mx-2 pb-2' >
                            <Avatar fullName="John Doe" url="/images/avatar/89b565f4-762f-4f5c-a7c4-ef38477a9fa2.jpeg" />
                        </div>
                        <MenuTitle title='Menu' />
                        {
                            sideNavLinks.map(link => <MenuItem navKey={link.navKey} title={link.title} path={link.path} icon={link.icon} />)
                        }
                        <MenuTitle title='My Account'  />
                        <MenuItem navKey="profile" title='My Profile' icon={<IconProfile/>} path='/my-profile' />
                        <MenuItem navKey="logout" title='Logout' path='' onClick="logoutModalOpen=true;" icon={<IconLogout/>} />
                    </div>
                </aside> 
                <div class='flex grow justify-center items-end text-sm py-2 '  >
                    Version 0.0.1
                </div>

            </div>
        
    );
};

