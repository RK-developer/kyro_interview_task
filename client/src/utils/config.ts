
export const BASE_API_URL = () => {
    return process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL : process.env.REACT_APP_API_BASE_URL_PROD || ""
}