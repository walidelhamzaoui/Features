let dropdown = document.getElementById("dropdown");
let dropdown1 = document.getElementById("dropdown1");
let dropdown2 = document.getElementById("dropdown2");


function button() {
 
    var para = document.getElementById("para");

    // Change the color of element with id "oki1" to red
    // oki1.style.color = "red";

    // Toggle the display of element with id "sat"
    if (para.style.display === "none") {
        para.style.display = "block";
        dropdown.style.border=" 2px solid #2d7bf9b6";
        dropdown.style.boxShadow="1px 1px 3px 4px #2d7bf91d"
    } else {
        para.style.display = "none";
        dropdown.style.border=" none";
        dropdown.style.boxShadow=" none"
    }
}
function button1() {
 
    var para = document.getElementById("para1");

    // Change the color of element with id "oki1" to red
    // oki1.style.color = "red";

    // Toggle the display of element with id "sat"
    if (para.style.display === "none") {
        para.style.display = "block";
        dropdown1.style.border=" 2px solid #2d7bf9b6";
        dropdown1.style.boxShadow="1px 1px 3px 4px #2d7bf91d"
    } else {
        para.style.display = "none";
        dropdown1.style.border=" none";
        dropdown1.style.boxShadow=" none"
    }
}
function button2() {
   
    var para = document.getElementById("para2");

    // Change the color of element with id "oki1" to red
    // oki1.style.color = "red";

    // Toggle the display of element with id "sat"
    if (para.style.display === "none") {
        para.style.display = "block";
        dropdown2.style.border=" 2px solid #2d7bf9b6";
         dropdown2.style.boxShadow="1px 1px 3px 4px #2d7bf91d"
        
    } else {
        para.style.display = "none";
        dropdown2.style.border=" none";
        dropdown2.style.boxShadow=" none"
    }
}