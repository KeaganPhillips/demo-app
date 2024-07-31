import { Button, Card, TextInput } from "components";
import { XButton } from "components/web-components/x-button";


const onClickLogin = `
    
    $event.preventDefault();
    forceShowInvalidFields=true; 
    if(!window.checkValidity(['email', 'password']))    
        return;    

    isLoading = true;        
    const payload = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };    
    window.htmx.ajax('POST', '/auth/login',
    { 
        values: payload,
    });
    
    document.body.addEventListener("htmx:responseError", (e) => {
        if(e.detail.xhr.status === 401)
        {
            document.getElementById('login-result').innerHTML = e.detail.xhr.response;            
        }
        isLoading = false;
    });
`;

const Footer = () => {
    return (
        <div class="flex flex-col justify-center mt-5 " >
            <Button 
                type="submit"
                variant="primary"                   
                x-on:click={onClickLogin}
            >
                Login
            </Button>
            {/* <x-button text='Login 2' xOnClick={onClickLogin} onClick={ () => alert('test')} /> */}
            <div id="login-result"></div>
        </div>
    );
}





const LoginContainer = () => {
    return (
        <div  x-data="{ forceShowInvalidFields: false }"  >
            <Card title='Login' description='Log into your account' footer={<Footer/>} >    
                <form id='formLogin'>
                    <TextInput       
                        id='email'                      
                        label="Email Address"
                        name="email"
                        placeholder="Email Address" 
                        type="email" 
                        requiredMessage="* Email is required"
                        invalidMessage="* Please enter a valid email address"
                        autoComplete="email"
                        required={true}                        
                        //requiredMessage="* Email is required"
                        //regexPattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" //^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$
                        //regexMessage="* Please enter a valid email address"
                    />
                    <TextInput 
                        id='password'
                        label="Password"
                        name="password"  
                        placeholder="Password" 
                        type="password"  
                        autoComplete="current-password"                            
                        required={true}
                        requiredMessage="* Password is required" />                     
                </form>
            </Card>  
        </div>        
    );
};





export default () => {
    return (
        <div class='h-screen md:grid md:grid-cols-2' >
            <div class="border-r flex justify-center items-center
                bg-black  border-zinc-600 
                dark:bg-white  dark:border-zinc-700 "
            >
                
                    <img src="/images/your-logo-here-white.jpg" class="object-contain w-4/5 h-4/5 dark:block hidden " />
                    <img src="/images/your-logo-here-black3.jpg" class="object-contain w-4/5 h-4/5 dark:hidden " />
                
            </div>
            <div class="flex justify-center items-center" >
                <LoginContainer/>
            </div>            
        </div>
    )
}