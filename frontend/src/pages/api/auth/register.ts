import type { APIRoute } from "astro"
import  { getRegisterUrl } from "../../../lib/auth0";

export  const GET : APIRoute = async ({redirect}) => {
    const signupUrl = getRegisterUrl();
    return redirect(signupUrl);
}