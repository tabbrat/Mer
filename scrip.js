// Sélectionne la checkbox et le menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Fonction pour cacher le menu après un délai
function retractMenu() {
    // Si le menu est ouvert (case cochée)
    if (menuToggle.checked) {
        setTimeout(() => {
            // Décoche la case pour fermer le menu après 5 secondes
            menuToggle.checked = false;
        }, 5000); // 5000 ms = 5 secondes
    }
}

// Écouteur d'événement sur la checkbox pour vérifier si le menu est ouvert
menuToggle.addEventListener('change', retractMenu);