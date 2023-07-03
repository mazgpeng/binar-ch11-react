import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAIriMYivyprUKBuH8cznD-KhjOu0tsZJg',
  authDomain: 'react-projectdev.firebaseapp.com',
  projectId: 'react-projectdev',
  storageBucket: 'react-projectdev.appspot.com',
  messagingSenderId: '9665166090',
  appId: '1:9665166090:web:bbcac6b0adf906f4a498f3',
  measurementId: 'G-N24K6Y80YF'
};

const app = initializeApp(firebaseConfig);

export default app;
