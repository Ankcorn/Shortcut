const ENV = {
    dev: {
        API_KEY: "AIzaSyAO4yZ_Ey_ipzUB8grZLvA9tYhq1blBTEs",
        AUTH_DOMAIN: "chuuchuu-758d6.firebaseapp.com",
        DATABASE_URL: "https://chuuchuu-758d6.firebaseio.com",
        PROJECT_ID: "chuuchuu-758d6",
        STORAGE_BUCKET: "chuuchuu-758d6.appspot.com",
        MESSAGING_SENDER_ID: "42915556411"
    }
};

function getEnvVars() {
    return ENV.dev
}

export default getEnvVars()