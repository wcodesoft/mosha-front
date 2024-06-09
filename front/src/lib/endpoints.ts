import {isDev} from "@/lib/utils";

interface Endpoints {
    quoteAPI: string,
    authorAPI: string,
}

/**
 * Production endpoints
 */
const PROD_ENDPOINTS: Endpoints = {
    quoteAPI: "https://mosha.wcode.space/api/v1/quote",
    authorAPI: "https://mosha.wcode.space/api/v1/author",
}

/**
 * Development endpoints
 */
const DEV_ENDPOINTS: Endpoints = {
    quoteAPI: "http://localhost/api/v1/quote",
    authorAPI: "http://localhost/api/v1/author",
}

/**
 * Returns the endpoints to use based on the current environment
 */
export const getEndpoints = (): Endpoints => {
    if(isDev()){
        console.log("Using development endpoints")
        return DEV_ENDPOINTS
    }
    console.log("Using production endpoints")
    return PROD_ENDPOINTS
}



