import firebase from "firebase";
import {
    DB_API_KEY,
    DB_AUTH_DOMAIN,
    DB_PROJECT_ID,
    DB_STORAGE_BUCKET,
    DB_MESSAGING_SENDER_ID,
    DB_APP_ID,
    DB_MEASUREMENT_ID,
} from "../../helpers/environments";

var config = {
    apiKey: DB_API_KEY,
    authDomain: DB_AUTH_DOMAIN,
    projectId: DB_PROJECT_ID,
    storageBucket: DB_STORAGE_BUCKET,
    messagingSenderId: DB_MESSAGING_SENDER_ID,
    appId: DB_APP_ID,
    measurementId: DB_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export default firebase.firestore();
