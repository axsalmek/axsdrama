importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({

apiKey: "AIzaSyCTIs1WCZ8AaMLi_2lD119ANMv4wpPIv6o",

authDomain: "notif-axsdrama.firebaseapp.com",

projectId: "notif-axsdrama",

storageBucket: "notif-axsdrama.firebasestorage.app",

messagingSenderId: "764708904518",

appId: "1:764708904518:web:a36e119cbe8a4c88437447"

});

const messaging = firebase.messaging();
