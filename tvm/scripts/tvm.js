window.onload = function() {
  let qrHelper = new QRCodeHelper();
  qrHelper.displayCode("http://www.google.com");
  tickSecond();
  setInterval(tickSecond, 2000);
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