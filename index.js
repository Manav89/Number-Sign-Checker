function sgn() {
    let i = parseInt(document.getElementById('sign').value);

    if (i == 0) {
        document.getElementById('chk').innerHTML = "The number " + i + " is zero";
    }
    else if (i > 0) {
        document.getElementById('chk').innerHTML = "The number " + i + " is positive";
    }
    else {
        document.getElementById('chk').innerHTML = "The number " + i + " is nagative";
    }
}