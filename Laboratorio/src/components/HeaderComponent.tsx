
import { HelloWorldComponent } from './HelloWorld.component';
import logo from '../assets/img/logo.png';

export const HeaderComponent = () => {    
    return (
        <header>
            <img src={logo} alt="logo" />
            <HelloWorldComponent/>
            <span>App Name: {process.env.APP_NAME}</span>
        </header>
    )

}