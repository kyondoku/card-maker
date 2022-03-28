import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: "business-card-maker-47eb8.appspot.com",
  //   messagingSenderId: "130049173935",
  //   appId: "1:130049173935:web:a2773eaae8d67f40e9275a",
  //   measurementId: "G-NZKE3925XR"
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// API invalid 어쩌구 에러가 떠서 콘솔 찍었는데 undefined떠서 개멘붕왔는데, 서버 재시작하니까 되넹^^?;

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
