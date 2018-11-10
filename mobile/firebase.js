import firebase from "firebase";
import env from './Env'
const config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(config);

export default firebase.database().ref();