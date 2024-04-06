document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navigation a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset as needed
                behavior: "smooth"
            });
        });
    });
});




