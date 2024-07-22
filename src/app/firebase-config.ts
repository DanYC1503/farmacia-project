import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtWj-VDzr3IjRvKuykaUk1BvC1okwMq8w',
  authDomain: 'farmacia-project-6a1c8.firebaseapp.com',
  projectId: 'farmacia-project-6a1c8',
  storageBucket: 'farmacia-project-6a1c8.appspot.com',
  messagingSenderId: '1078841456729',
  appId: '1:1078841456729:web:d13097ee70ad079dd95948',
  measurementId: 'G-HCNDJ7H4BT'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
