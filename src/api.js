import { initializeApp } from "firebase/app"
import { 
    getFirestore, 
    doc, 
    setDoc,
    collection, 
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"
import { Collection } from "miragejs";
const firebaseConfig = {
  apiKey: "AIzaSyBql4zbO11ksPZtBpYsbbSdtm07mbBjNFM",
  authDomain: "van-life-9e441.firebaseapp.com",
  projectId: "van-life-9e441",
  storageBucket: "van-life-9e441.firebasestorage.app",
  messagingSenderId: "946877477263",
  appId: "1:946877477263:web:2c271f2dec9a867fd75bfa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef =  collection(db,"vans");

export async function getVans(id) {
    if(id){
        const docRef =  doc(db, "vans", id);
        const vanSnapshot = await getDoc(docRef);

        return{
            ...vanSnapshot.data(),
            id:vanSnapshot.id
        }
    }
    else{
        const querySnapshot = await getDocs(vansCollectionRef);
        const dataArr = querySnapshot.docs.map(doc => ({
         ...doc.data(),
         id: doc.id
        }))
        // console.log(dataArr);
        return dataArr;

    }
}
export async function getHostVans(id) {
    if(!id){

        const q = query(vansCollectionRef, where("hostId", "==", "123"))
        const querySnapshot = await getDocs(q);
        const dataArr = querySnapshot.docs.map(doc => ({
         ...doc.data(),
         id: doc.id
        }))
        // console.log(dataArr);
        return dataArr;

    }
    else return getVans(id);
}

   
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}