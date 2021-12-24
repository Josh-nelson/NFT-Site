const menuButton = document.getElementById('menuTab-button');

const menuFunction = () => {
    const menuLinks = document.getElementById('myLinks')
    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}