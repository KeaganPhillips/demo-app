import { Options, type Option } from 'components';
import { IconHalfMoon, IconSun } from 'components/icons/*';



export default () => {

    const lightDarkOptions: Option[]  = [
        { 
            id: 'opt_light_mode',  
            icon: <IconSun/>,       
            text: 'Light Mode',             
            xClick: "selectedOption='opt_light_mode'; window.setDarkMode(false);"
        },
        { 
            id: 'opt_dark_mode', 
            icon: <IconHalfMoon/>,  
            text: 'Dark Mode',              
            xClick: "selectedOption='opt_dark_mode'; window.setDarkMode(true);"
        },
    ];

    return (
        <div class='flex flex-col space-y-3' x-data="{ selectedOption: localStorage.getItem('dark-mode') === 'true' ? 'opt_dark_mode' : 'opt_light_mode'  }" >
            <Options options={lightDarkOptions}/>
        </div>
    )
    
}