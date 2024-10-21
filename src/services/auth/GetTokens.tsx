import { fetchAuthSession } from 'aws-amplify/auth';

export const getAccessToken = async (): Promise<string> => {
    const session = await fetchAuthSession();
    if (session.tokens && session.tokens.accessToken) {
        const accessToken = session.tokens.accessToken;
        const tokenString = accessToken.toString();
        return tokenString;
    } else {
        throw new Error('Access token is not available.');
    }
};
