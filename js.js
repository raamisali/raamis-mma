function pick1() { // functions pick1-pick4 enables CSS visibility and positioning once HTML input type button is clicked on
    document.getElementById("mmapage3").style.visibility = 'visible'; style.position ="absolute";
}
function pick2() {
    document.getElementById("mmapage4").style.visibility = 'visible'; style.position ="absolute";
}
function pick3() {
    document.getElementById("mmapage5").style.visibility = 'visible'; style.position ="absolute";
}
function pick4() {
    document.getElementById("mmapage6").style.visibility = 'visible'; style.position ="absolute";
}

function validateName(value) // function validateName evaluates parameter value through conditional statement
{                            // allows error name to be displayed if value length 2 or lower

    if(value && value.length >= 2 && value.trim()) {
        document.getElementsByClassName("errorName")[0].style="display:none;"; 
    } else {
        document.getElementsByClassName("errorName")[0].style="display:inline-block;"; 
    }

    }

function validateEmail(value) { // function validateEmail evalutes parameter value through conditional statement
    if (value.includes("@")) {  // value must contain "@" symbol or otherwise error text is enabled
        document.getElementsByClassName("errorEmail")[0].style="display:none;";
    } else {
        document.getElementsByClassName("errorEmail")[0].style="display:inline-block";
    }
}