document.getElementById("password").addEventListener("change", function(){change();});
document.getElementById("key").addEventListener("change", function(){change();});
document.getElementById("scramble").addEventListener("change", function(){change();setconf();});
document.getElementById("button").addEventListener("click", function(){insertPassword();});
document.getElementById("button2").addEventListener("click", function(){copyToClipboard();});
document.addEventListener("keydown", keydown);
function keydown(event){
    if(event.keyCode==13){
            change();
            insertPassword();
    }
}