import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxa7fDdLznZKJXsAcGwdzd_5vt_aZlwf8',
  authDomain: 'chatgpt-clone-b4253.firebaseapp.com',
  projectId: 'chatgpt-clone-b4253',
  storageBucket: 'chatgpt-clone-b4253.appspot.com',
  messagingSenderId: '407144089733',
  appId: '1:407144089733:web:2eacbff781fbd2471241ec',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
