// Select all tab links and tab contents
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    // Remove active class from all tabs and contents
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    // Add active class to clicked tab and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
    
    

}






