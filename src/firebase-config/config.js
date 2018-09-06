import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDO6kwpYCZ9jmFgqIlLUzK6_yp-8pdJqYE",
    authDomain: "playlist-comunitaria.firebaseapp.com",
    databaseURL: "https://playlist-comunitaria.firebaseio.com",
    projectId: "playlist-comunitaria",
    storageBucket: "playlist-comunitaria.appspot.com",
    messagingSenderId: "632269749833"
  };

export default firebase.initializeApp(firebaseConfig);