function curlTheUrl() {
    // make a GET request from https://tdsb.elearningontario.ca/d2l/home/3600649 and return the result into the paragraph with id "result"

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://tdsb.elearningontario.ca/d2l/home/3600649", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // innerText does not let the attacker inject HTML elements.
            document.getElementById("result").innerText = xhr.responseText;
        }
    }
}