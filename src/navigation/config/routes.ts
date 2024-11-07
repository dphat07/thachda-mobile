import { Auth, Common } from '@features'
import { createEnum } from './type'

export const notLoggedInScreens = {
    Splash: Auth.Splash,
    Login: Auth.Login,
}

export const loggedInScreens = {
    Home: Common.Home,
}

export const ROUTES = createEnum({
    //Auth Rotues
    Login: 'Login',
    Splash: 'Splash', 

    //Common Routes
    Home: 'Home',
})
