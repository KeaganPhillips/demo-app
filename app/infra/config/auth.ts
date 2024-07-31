
type AuthProps = {
    CookieDomain: string,
    CookieMaxAge: number,
    Secret: string,    
};

export default {
    Secret: import.meta.env.AUTH_SECRET,
    CookieDomain: import.meta.env.AUTH_COOKIE_DOMAIN,
    CookieMaxAge: parseInt(import.meta.env.AUTH_COOKIE_MAX_AGE ?? '0'),

} as AuthProps;