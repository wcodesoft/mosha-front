import {isDev} from "@/lib/utils";

interface Endpoints {
    quoteAPI: string,
    authorAPI: string,
}

const PROD_ENDPOINTS: Endpoints = {
    quoteAPI: "https://mosha.wcode.space/api/v1/quote",
    authorAPI: "https://mosha.wcode.space/api/v1/author",
}

const DEV_ENDPOINTS: Endpoints = {
    quoteAPI: "http://localhost/api/v1/quote",
    authorAPI: "http://localhost/api/v1/author",
}

export const getEndpoints = (): Endpoints => {
    if(isDev()){
        console.log("Using development endpoints")
        return DEV_ENDPOINTS
    }
    return PROD_ENDPOINTS
}



