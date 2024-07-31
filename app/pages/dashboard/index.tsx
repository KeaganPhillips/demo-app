import { Elysia } from "elysia";
import { HtmlContainer, AppContainer } from 'components/layout';
import { render } from "preact-render-to-string";

const Dashboard = () => <h1>Dashboard</h1>;


export default new Elysia()
    .get('/dashboard', () =>     
        <HtmlContainer>
            <AppContainer selectedNavKey="dashboard" sideNavLinks={ [] } >
                <Dashboard/>
            </AppContainer>                
        </HtmlContainer>        
    )
    .get('/hx/dashboard', () =>        
        <Dashboard/>
    );
