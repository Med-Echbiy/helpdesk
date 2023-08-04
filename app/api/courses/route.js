import { NextResponse } from 'next/server';
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig= {
  apiKey: "AIzaSyDqKjYZcr7rbgI0jJF-5jS77o5Z8nmJ7iM",
  authDomain: "avatar-37593.firebaseapp.com",
  projectId: "avatar-37593",
  storageBucket: "avatar-37593.appspot.com",
  messagingSenderId: "751644224984",
  appId: "1:751644224984:web:89c24a5d19ba3888d196ad",
  measurementId: "G-8461ZF6KB6"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

import { getFirestore, doc, getDoc,getDocs,collection, query, where } from "firebase/firestore";
const db = getFirestore(firebase_app)

import designFile from './data.json';

export async function GET(request) {
  return NextResponse.json(designFile);
} 

// export async function POST(request) {
//   const {data} = await request.json();
//   designFile.push(data);
//   return NextResponse.json(designFile);
// }


export async function POST(request) {
  const { url } = await request.json();
  
  console.log('{url}', url); 
  
  const q = query(collection(db, "webDesign"), where("domain", "==", url));
  let workspaceData = null;
  let error = null;
  

  try {
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {

      
      const documentsData = querySnapshot.docs.map(doc => doc.data());
      console.log(' matching documents.');
      return NextResponse.json(documentsData);
    }
  } catch(e) {
    console.log('No matching documents.');
    return NextResponse.json({ "error": "No matching documents" });
  }


  console.log('workspaceData, error ' ,workspaceData, error);

  return { workspaceData, error };


}