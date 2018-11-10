function tickSecond() {
    document.querySelector('.left').innerText = moment().format('DD/MM/YY HH:mm');
    setTimeout(hideCaret, 1000);
}

function hideCaret() {
    document.querySelector('.left').innerText = moment().format('DD/MM/YY HH mm');
}