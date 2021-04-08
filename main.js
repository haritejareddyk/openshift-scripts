//// Manifest.js

const differentServers = process.env.DIFFERENT_SERVERS ? process.env.DIFFERENT_SERVERS : false;

let cors = true;
if (differentServers) {
    cors = {
        origin: ['*'], // an array of origins or 'ignore'
        headers: ['Access-Control-Allow-Origin', 'Authorization', 'sid', 'xhr', 'withCredentials'], // an array of strings - 'Access-Control-Allow-Headers'
        exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
        additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
        maxAge: 60,
        credentials: true // boolean - 'Access-Control-Allow-Credentials'
    };
}


/// Env.js
export const DIFFERENT_SERVERS = process.env.DIFFERENT_SERVERS ? process.env.DIFFERENT_SERVERS : false;

//server/.env

REDIS_HOST=admin.pibot.ai
REDIS_PORT=6379
REDIS_PREFIX=pibot
# NODE_ENV='production'
AUTH_ENABLED=true
DUCKLING_URL=http://admin.pibot.ai:8000
ES_HOST=http://admin.pibot.ai:9200
SESSION_SECRET=123456789session_secret123456789123456789
# ENABLE_TUNNEL=false
AUTH_USER=admin
AUTH_PASSWORD=admin@123
RASA_URLs=http://admin.pibot.ai:5000/
DEBUG_ROUTES=true
PERF=true
DIFFERENT_SERVERS=true


