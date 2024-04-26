// JavaScript code for any interactivity (optional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your contact form submission logic here
    alert('Your message has been sent!');
});



// Sample project data (replace with your actual project data)
const projects = [
    { name: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "https://onlineclassedu.netlify.app/" },
    { name: "Project 2", description: "Praesent euismod eros id vehicula suscipit.", link: "#" },
    { name: "Project 3", description: "Nullam rutrum massa nec lacus dignissim, at ultrices mauris placerat.", link: "#" },
    { name: "Project 4", description: "Nullam rutrum massa nec lacus dignissim, at ultrices mauris placerat.", link: "#" }
];

// Function to create project cards dynamically
function createProjectCards() {
    const projectsGrid = document.getElementById("projects-grid");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Call the function to create project cards when the page loads
window.addEventListener("load", createProjectCards);
