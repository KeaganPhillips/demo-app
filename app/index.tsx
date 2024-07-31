import { Elysia } from 'elysia'
import { html, isHtml } from '@elysiajs/html' 
import { staticPlugin } from '@elysiajs/static'
import staticConfig from 'middleware/static-config';
import registerWebComponents from 'components/web-components/_register-web-components';
import { authenticateRequest, anonymousRoutes }  from 'middleware/authentication';
import dashboardRoutes from 'pages/dashboard';
import loginPageRoutes from 'pages/auth/login';
import reportsRoutes from 'pages/reports';
import userManagementRoutes from 'pages/user-management';
import myProfileRoutes from 'pages/my-profile';


const port = process.env.PORT || 3000;


new Elysia()    
    .use(html())
    .use(staticPlugin(staticConfig))
    .derive(({ cookie }) => authenticateRequest(cookie))
    .onBeforeHandle(({ isAuthenticated, path, set  }) => {
        if (anonymousRoutes.find(r => path.startsWith(r)))  
            return;        

        if (!isAuthenticated) {
            if(path.startsWith('/api'))
            {
                set.status = 401;
                return 'Unauthorized';
            }
            else
            {                
                set.status = 302;
                set.headers['HX-Redirect'] = '/auth/login'
                set.headers['Location'] = '/auth/login';
                return '';
            }
        }
    })   
    .use(loginPageRoutes)
    .use(reportsRoutes)
    .use(dashboardRoutes)
    .use(userManagementRoutes)
    .use(myProfileRoutes)
    .listen(port);


console.log(`Server running at http://localhost:${port}`);
registerWebComponents();


