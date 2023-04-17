import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDq8qRk4ZJGlKrNNQSmTpVlZF9EssaSeMc",
    authDomain: "binar-platinum-chapter-9.firebaseapp.com",
    projectId: "binar-platinum-chapter-9",
    storageBucket: "binar-platinum-chapter-9.appspot.com",
    messagingSenderId: "529729182379",
    appId: "1:529729182379:web:ab44ce02981288185ef5ee",
    measurementId: "G-JBL81QH3KX",
    databaseURL: "https://binar-platinum-chapter-9-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app