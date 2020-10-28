import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDfEEMymdobYZeMZkSPp1PX19oYLTHJs74",
    authDomain: "retailz-657bd.firebaseapp.com",
    databaseURL: "https://retailz-657bd.firebaseio.com",
    projectId: "retailz-657bd",
    storageBucket: "retailz-657bd.appspot.com",
    messagingSenderId: "830971081961",
    appId: "1:830971081961:web:c174591df25c87c003ac78",
    measurementId: "G-9X8LFZLWRQ"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;