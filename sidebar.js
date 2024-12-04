document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    // Opcional: Contracción automática después de cierto tiempo
    sidebar.addEventListener("mouseleave", () => {
        setTimeout(() => {
            sidebar.classList.remove("expanded");
        }, 1000);
    });
});