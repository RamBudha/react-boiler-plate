const isDev = process.env.NODE_ENV === 'developemnt';

export const REDIRECT_URI = "dd";
export const CLIENT_ID = isDev ?
    'a281614d7f34dc30b665dfcaa3ed7505'
    : 'a281614d7f34dc30b665dfcaa3ed7505';
export const TEMP_CLIENT_ID = 'f9e1e2232182a46705c880554a1011af';
export const OAUTH_TOKEN = 'accesstokenhere';
