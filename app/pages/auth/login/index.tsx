import Elysia, { t } from "elysia";
import { HtmlContainer } from "components/layout";
import { render } from "preact-render-to-string";
import LoginPage from "./login-page";
import { loginAttemptHandler, type LoginAttemptCommand } from "./loginAttemptService";
import LoginUnSuccessful  from "./login-unsuccessful";
import { createToken } from "infra/token-service";

export default new Elysia()
    .get('/auth/login', () =>
        <HtmlContainer>
            <LoginPage/>
        </HtmlContainer>
    )
    .post('/auth/login', async ({ body, cookie, set }: any) => {        
        const user = await loginAttemptHandler(body as LoginAttemptCommand);
        if (user == null) {            
            return new Response(<LoginUnSuccessful/> as any, { status: 401 });
        }
        
        const token = await createToken(user);
        cookie.__secure_my_app.value = token;
        set.headers['HX-Redirect'] = '/dashboard';
        return new Response('', { status: 200 });                
    }, {
        body: t.Object({
            email: t.String(),
            password: t.String()
        }),
        cookie: t.Cookie({})
    })
    .post('/logout', async ({ set, cookie }) => {
        cookie.__secure_my_app.value = '';
        set.headers['HX-Redirect'] = '/login';
    });
