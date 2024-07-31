import { Elysia } from "elysia";
import { HtmlContainer, AppContainer } from 'components/layout';

const UserManagementComponent = () => <h1>User Management</h1>;


export default new Elysia()
    .get('/user-management', () =>     
        <HtmlContainer>
            <AppContainer selectedNavKey="user-management" sideNavLinks={ [] } >
                <UserManagementComponent/>
            </AppContainer>                
        </HtmlContainer>        
    )
    .get('/hx/user-management', () =>        
        <UserManagementComponent/>
    );
