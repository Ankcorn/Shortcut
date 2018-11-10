const firebase = require("firebase")

window.onload = function() {
  let qrHelper = new QRCodeHelper();
  qrHelper.displayCode("http://www.google.com");
  tickSecond();
  setInterval(tickSecond, 2000);

  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  }).catch(function(err) {
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

function ScreenHelper() {

    this.navigateToChoicePage = function(userData) {
        document.location.href = "./choices.html";
    }
}