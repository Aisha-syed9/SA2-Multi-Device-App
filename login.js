// Navigation functionality for buttons
function navigateTo(page) {
    if (page === 'signin') {
        window.location.href = 'C:\Users\Dell\OneDrive\Documents\SA2-Multi-Device-App\Frontend\SignUp.html'; // Replace with your sign-in page URL
    } else if (page === 'login') {
        window.location.href = 'C:\Users\Dell\OneDrive\Documents\SA2-Multi-Device-App\Frontend\login.html'; // Replace with your login page URL
    }
}

// Function to toggle mobile menu
function toggleMenu() {
    var menu = document.getElementById('mobile-nav');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
 
 