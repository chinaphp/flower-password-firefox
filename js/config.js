function getconf(){
  browser.storage.local.get("scr").then(sa=>{document.getElementById("scramble").value=sa.scr});
}
function setconf(){
  browser.storage.local.set({
    scr: document.getElementById("scramble").value
  });
}
getconf();