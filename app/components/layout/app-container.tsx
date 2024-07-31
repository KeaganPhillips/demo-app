import { type ComponentChildren, type VNode } from "preact";
import SideNavDesktop from "./side-nav-desktop";
//import SideNavTablet from "./side-nav-tablet";

//import SideNavMobile from "./side-nav-mobile";
import LogoutModal from "../logout-modal";

export type SideNavLink = {
    title: string,
    path?: string,
    navKey: string,
    icon: JSX.Element
}


type AppContainerProps = {
    children: ComponentChildren,
    selectedNavKey: 'dashboard' | 'reports' | 'user-management' | 'profile',
    sideNavLinks: SideNavLink[]
}

export const AppContainer = (props:AppContainerProps) => {

    const { children, selectedNavKey, sideNavLinks } = props;

    return (
        <div class="flex flex-row h-screen" x-data="{logoutModalOpen: false}" >
            <SideNavDesktop selectedKey={selectedNavKey} sideNavLinks={sideNavLinks} />
            {/* <SideNavTablet selectedKey={selectedNavKey} /> */}
            {/* <SideNavMobile selectedKey={selectedNavKey} /> */}
                <main id="data-main-app-content" 
                    class="flex flex-col w-screen p-5
                        ml-0
                        sm:ml-20
                        lg:ml-48" 
                >   
                    {children}
                </main>            
            <LogoutModal />
        </div>
    );
}