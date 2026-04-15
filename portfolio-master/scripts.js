document.addEventListener('DOMContentLoaded', () => {

    // Sample Projects - Edit these easily
    const projects = [
        {
            title: "Online Voting System",
            description: "Developed a secure and user-friendly online voting platform using PHP and MySQL for handling voter authentication and vote recording.",
            tags: ["PHP", "MySQL"]
        },
        {
            title: "Online Job Portal",
            description: "Developed a web application for job seekers and employers using ASP.NET Core MVC with Entity Framework Core for database management.",
            tags: ["C#", "DotNet", "SQL Server"]
        },
        {
            title: "Parkinson's Disease Detection System",
            description: "Implemented a machine learning model using Python and scikit-learn to analyze voice recordings for early detection of Parkinson's disease, achieving an accuracy of 85%.",
            tags: ["Python", "Machine Learning", "scikit-learn"]
        }
    ];

    // Render Projects
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // Sample Experience
    const experienceHTML = `
        <div class="timeline-item">
            <div class="timeline-date">2024 – Present</div>
            <div class="timeline-content">
                <h3>Python Developer</h3>
                <h4>Citizen Infotech Nepal Pvt. Ltd. • Kathmandu</h4>
            </div>
        </div>
    `;
    document.getElementById('experience-timeline').innerHTML = experienceHTML;

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been received. (This is a static demo)');
        contactForm.reset();
    });

    // Fake CV Download
    window.downloadCV = function() {
        alert('CV download started... ');
    };

    console.log('%cPortfolio loaded successfully. Edit the placeholders to make it yours.', 'color: #2563eb; font-weight: 500;');
});