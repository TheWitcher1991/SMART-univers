let GLOBAL = {
    
    REQUEST_URL: 'https://api.github.com/users/rsp',
    
    PORT: process.env.PORT || 8080,
    
    API_BASE_URL: `http://localhost:${process.env.PORT || 8080}/`,
    
    ROUTES: {
        index: {
            url: '/',
            path: 'index'
        },
        map: {
            url: '/map',
            path: 'map'
        }
    },
    
    STYLE_PATH: '/assets/styles/main.css',
    STYLE_ICONS: '/assets/vendor/fontawesome/css/all.css',
    
    TOKEN: 'token',
    
    SESSION_COOKIE_OPTION: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    },
    
    LOGOUT_COOKIE_OPTION: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(0)
    },
    
}

export { GLOBAL }