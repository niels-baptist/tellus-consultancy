window.addEventListener("load", function(){
    var x = document.getElementById("moreinfoIntro");
    x.style.display = "none";
});

function ShowHideMoreInfoDiv() {
    var x = document.getElementById("moreinfoIntro");
    if (x.style.display === "none") {
      x.style.display = "block";
      var y = document.getElementById("BtnIntro");
      y.innerHTML = "Lees minder";
    } else {
      x.style.display = "none";
      var y = document.getElementById("BtnIntro");
      y.innerHTML = "Lees meer";
    }
  }