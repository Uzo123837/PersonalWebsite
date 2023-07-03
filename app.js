const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 2000);
})

/* For opening and closing files */ 

function openPopup(contentId) {
    // Get the popup element
    var popup = document.getElementById("popup");

    // Hide all popup content divs
    var popupContents = document.getElementsByClassName("popup-content");
    for (var i = 0; i < popupContents.length; i++) {
        popupContents[i].style.display = "none";
    }

    // Show the selected popup content div
    var selectedPopupContent = document.getElementById(contentId);
    selectedPopupContent.style.display = "block";

    // Add the "open-popup" class to show the popup
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup")
}

document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById("myHeading");
    heading.style.visibility = "visible";
});