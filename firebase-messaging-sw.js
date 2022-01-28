////importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
////importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyAvy3mKilnCvK4Eq4HoORmjjtgcGZFekyY",
    authDomain: "attendanceapp-96453.firebaseapp.com",
    projectId: "attendanceapp-96453",
    storageBucket: "attendanceapp-96453.appspot.com",
    messagingSenderId: "742454421899",
    appId: "1:742454421899:web:3ea83cf38023555fb5278e",
    measurementId: "G-E0GKCKY7XY"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});