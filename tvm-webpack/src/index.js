import firebase from "firebase";
import init from './firebase';

window.onload = function() {
    const messaging = firebase.messaging()
    // Add the public key generated from the console here.
    messaging.usePublicVapidKey("BPeySgkBCNTnAD0FIrigyd_P0ECoBM-U9HwSZbb2zhWAjsH67zl0xW-xpcoxAUDuWpZFy2FuvID0BH8Ofobrlsg");
    firebase.messaging().requestPermission()
        .then(function() {
            console.log('Notification permission granted.');
            return messaging.getTokens()
        })
        .then(function(token) {
            console.log(token)
        })
        .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
        });
};

function QRCodeHelper() {

    this.QRCode = {};

    this.displayCode = function(link) {
        let qrCodeContainer = document.querySelector("#qrcode");
        new QRCode(qrCodeContainer, {
            text: link,
            width: 255,
            height: 255,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}