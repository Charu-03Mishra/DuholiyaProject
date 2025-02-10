import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBFeIrpq-koJfngLPhHIlG1zqPNLZ3QyZQ",
	authDomain: "fir-98ce2.firebaseapp.com",
	projectId: "fir-98ce2",
	storageBucket: "fir-98ce2.firebasestorage.app",
	messagingSenderId: "392907561257",
	appId: "1:392907561257:web:090f780786a840d6683f38",
    dataBaseUrl:"https://fir-98ce2-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
