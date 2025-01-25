document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.getElementById("loader-wrapper");

    // Simuler un chargement avant de retirer le loader
    setTimeout(() => {
        loaderWrapper.style.display = "none"; // Masquer le loader
        animateSections(); // Animer les sections
    }, 3000); // Afficher le loader pendant 3 secondes

    // Fonction pour animer les sections au défilement
    function animateSections() {
        const sections = document.querySelectorAll(".section");

        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY + window.innerHeight;

            sections.forEach((section) => {
                if (scrollPosition > section.offsetTop + 100) {
                    section.classList.add("visible");
                }
            });
        });

        // Déclencher l'animation immédiatement si l'utilisateur est déjà à la bonne position
        animateSectionsOnLoad();
    }

    // Déclencher l'animation pour les sections déjà visibles
    function animateSectionsOnLoad() {
        const sections = document.querySelectorAll(".section");
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach((section) => {
            if (scrollPosition > section.offsetTop + 100) {
                section.classList.add("visible");
            }
        });
    }
});
