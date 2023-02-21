
const proBaseURL = 'http://1.117.152.40:8001/'
const devBaseURL = 'http://1.117.152.40:8001/'
// const proBaseURL = 'http://localhost:3000/'
// const devBaseURL = 'http://localhost:3000/'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
