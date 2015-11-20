var CCOUNT;
$(document).ready(function () {
    $('#btnct').click(function () {
        CCOUNT = $('#seconds').val();
        cdreset();
    });
});
var t, count;

function cddisplay() {
    document.getElementById('timespan').innerHTML = count;
}

function countdown() {
    // starts countdown
    cddisplay();
    if (count === 0) {
        // time is up
    } else {
        count--;
        t = setTimeout(countdown, 1000);
    }
}

function cdpause() {
    // pauses countdown
    clearTimeout(t);
}

function cdreset() {
    // resets countdown
    cdpause();
    count = CCOUNT;
    cddisplay();
}