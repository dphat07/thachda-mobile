export function createEnum<T extends Record<string, string>>(o: T): T {
    return o;
  }
  export type RootParamList = {
    Splash: undefined;
    Login: undefined;
    Home: undefined;
  };
  
  export type loginForm = {
    email: string;
    password: string;
  };