function getContent(elementId, filename) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for older browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML =
                this.responseText;
        }
    };
    xmlhttp.open("GET", filename, true);
    xmlhttp.send();

}
setTimeout(function(){
    getContent("content","content.html")
}, 3000);
