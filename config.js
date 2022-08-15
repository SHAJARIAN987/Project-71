import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAc3Iz6HDhdJX03Ltu66F4V5Gdw0z_YXtg",
    authDomain: "bycicle-b80f6.firebaseapp.com",
    projectId: "bycicle-b80f6",
    storageBucket: "bycicle-b80f6.appspot.com",
    messagingSenderId: "369685775524",
    appId: "1:369685775524:web:638e5deeb61f26d3909231"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
