import { Elysia } from "elysia";
import { HtmlContainer, AppContainer } from 'components/layout';
import MyProfileHome from "./my-profile-home";
import { getClaims } from "infra/token-service";


export default new Elysia()
    .get('/my-profile', ({cookie}) => {
        const claims = getClaims(cookie);  
        return <HtmlContainer>
            <AppContainer selectedNavKey="profile" sideNavLinks={ [] } >
                <MyProfileHome claims={claims}/>
            </AppContainer>                
        </HtmlContainer>        
    })
    .get('/hx/my-profile', ({cookie}) => {
        const claims = getClaims(cookie);  
        return  <MyProfileHome claims={claims}/>;
    });
