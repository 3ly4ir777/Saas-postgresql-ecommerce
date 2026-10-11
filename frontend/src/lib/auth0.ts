import { AuthenticationClient } from 'auth0';

const domainRaw = import.meta.env.AUTH0_ISSUER_BASE_URL || '';
const domainClean = domainRaw.replace('https://', '');
const clientId = import.meta.env.AUTH0_CLIENT_ID;
const clientSecret = import.meta.env.AUTH0_CLIENT_SECRET;
const audience = import.meta.env.AUTH0_AUDIENCE;
const baseUrl = import.meta.env.AUTH0_BASE_URL;

export const AuthClient = new AuthenticationClient({
    domain: domainClean,
    clientId: clientId,
    clientSecret: clientSecret,
});

export const getLoginUrl = () => {
    const redirectUri = `${baseUrl}/api/auth/callback`;

    // const domain = import.meta.env.AUTH0_ISSUER_BASE_URL;
    // const clientId = import.meta.env.AUTH0_CLIENT_ID;
    // const audience = import.meta.env.AUTH0_AUDIENCE;
    const scope = 'openid profile email';

    return `${domainRaw}/authorize?` +
        `response_type=code&` +
        `client_id=${encodeURIComponent(clientId)}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scope)}&` +
        `audience=${encodeURIComponent(audience)}`;
}

export const getRegisterUrl = () => {
    const redirectUri = `${baseUrl}/api/auth/callback`;
    // const domain = import.meta.env.AUTH0_ISSUER_BASE_URL;
    // const clientId = import.meta.env.AUTH0_CLIENT_ID;
    // const audience = import.meta.env.AUTH0_AUDIENCE;
    const scope = 'openid profile email';

    return `${domainRaw}/authorize?` +
        `response_type=code&` +
        `client_id=${encodeURIComponent(clientId)}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scope)}&` +
        `audience=${encodeURIComponent(audience)}`;
}