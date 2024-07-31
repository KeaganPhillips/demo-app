import { Elysia } from "elysia";
import { HtmlContainer, AppContainer } from 'components/layout';

const ReportsComponent = () => <h1>Reports</h1>;


export default new Elysia()
    .get('/reports', () =>     
        <HtmlContainer>
            <AppContainer selectedNavKey="reports" sideNavLinks={ [] } >
                <ReportsComponent/>
            </AppContainer>                
        </HtmlContainer>        
    )
    .get('/hx/reports', () =>        
        <ReportsComponent/>
    );
