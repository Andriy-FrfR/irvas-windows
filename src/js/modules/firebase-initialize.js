const firebaseConfig = {
  apiKey: 'AIzaSyCTSmQAI6NO6CvuN4G6MsQ15C1B2wMZ81E',
  authDomain: 'irvas-windows-aecef.firebaseapp.com',
  projectId: 'irvas-windows-aecef',
  storageBucket: 'irvas-windows-aecef.appspot.com',
  messagingSenderId: '1079092102995',
  appId: '1:1079092102995:web:3b332d7c05b2f88c5583a6'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
