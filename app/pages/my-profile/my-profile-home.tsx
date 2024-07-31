import { Card, H1, Label } from 'components';
import LightDarkOptions from './light-dark-options';
import type { Claims } from 'infra/token-service';


type MyProfileHomeProps = {
    claims: Claims;
};

export default (props: MyProfileHomeProps) => {

    const { claims : {firstName, lastName, email, mobile } } = props;

    return (<div class='flex flex-col' >
        <H1>My Profile Settings</H1>        
        <Card title='General' class='mt-5 w-1/2 ' description='General user details'  >
            <div class='flex flex-col space-y-3' >
                <Label title='First Name:' value={firstName} />
                <Label title='Last Name:' value={lastName} />
                <Label title='Email:' value={email || '-- none --' } />
                <Label title='Mobile Number:' value={mobile || '-- none --' } />
            </div>
        </Card>
        
        <Card title='Preferences' class='mt-5 w-1/2 ' description='User specific preferences'  >
            <LightDarkOptions/>
        </Card>
    </div>);
};