import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbCxSsRBMGqhhyZ-VciMAvb-a0v4wNCZs',
  authDomain: 'library-419a6.firebaseapp.com',
  databaseURL: 'https://library-419a6.firebaseio.com',
  projectId: 'library-419a6',
  storageBucket: 'library-419a6.appspot.com',
  messagingSenderId: '875093632558',
  appId: '1:875093632558:web:4b4e2247266ea78afe61bf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
