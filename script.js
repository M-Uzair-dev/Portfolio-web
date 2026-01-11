document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("mousemove", (e) => {
    const skillWrapper = skill.parentElement;
    const follower = skillWrapper.querySelector(".follower");

    // Get the position of the skillWrapper element
    const rect = skillWrapper.getBoundingClientRect();

    // Calculate mouse position relative to skillWrapper
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust the position of the follower element to match the mouse cursor
    follower.style.position = "absolute";
    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
  });
  skill.addEventListener("mouseleave", (e) => {
    const skillWrapper = skill.parentElement;
    const follower = skillWrapper.querySelector(".follower");
    follower.style.position = "absolute";
    follower.style.left = `50%`;
    follower.style.top = `50%`;
  });
});

const copyEmail = () => {
  navigator.clipboard.writeText("uzairmanandev@gmail.com");
  alert("Email copied to clipboard.");
};

// Smooth scroll implementation
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have hash (#) in them
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Project data for modal
const projectData = {
  coinquest: {
    title: "CoinQuest",
    year: "2026",
    url: "https://coinquest-codiest.vercel.app/",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Authentication"],
    description: "CoinQuest is an educational platform designed to teach children financial literacy through engaging interactive lessons, games, and a comprehensive rewards system. Parents can sign up their children for structured learning paths that make understanding money management fun and accessible.",
    features: [
      "Integrated Stripe payment gateway for secure subscription management",
      "Interactive learning modules delivered via video tutorials and carousel-based lessons",
      "Built-in educational games to reinforce financial concepts",
      "Comprehensive admin dashboard for managing learning modules and creating new lessons",
      "Gamification system with XP points and in-app currency (coins) to motivate learning",
      "Achievement system to track student progress and milestones",
      "User feedback forms for continuous improvement",
      "Parent and child account management with progress tracking",
      "Responsive design optimized for tablets and computers used by children"
    ]
  },
  corlee: {
    title: "Corlee & Co",
    year: "2024",
    url: "https://corleeandco.com",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST API"],
    description: "Corlee is a comprehensive B2B e-commerce platform designed specifically for a wholesale fabric business. This full-stack application connects fabric suppliers with businesses worldwide, providing a seamless browsing and ordering experience for wholesale buyers.",
    features: [
      "Dynamic product catalog with advanced filtering and search capabilities",
      "Secure user authentication system with JWT tokens and session management",
      "Role-based access control for customers and administrators",
      "Shopping cart functionality with real-time inventory tracking",
      "Responsive design optimized for desktop and mobile devices",
      "Admin dashboard for product management and order tracking",
      "RESTful API architecture ensuring scalability and maintainability",
      "MongoDB database with optimized queries for fast data retrieval"
    ]
  },
  trendsjoy: {
    title: "TrendsJoy",
    year: "2025",
    url: "https://trendsjoy.vercel.app/",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "AI/ML APIs", "i18next"],
    description: "TrendsJoy is a dynamic trend discovery platform where users can submit, explore, and engage with current trends across various categories. Featuring a sophisticated feed algorithm and AI-powered assistance, it creates a personalized experience for trend enthusiasts worldwide. Note: The AI assistant is currently inactive as the client has abandoned the project and the API key has expired.",
    features: [
      "Custom feed algorithm that ranks posts based on upload time and user engagement metrics",
      "User authentication system with account creation and profile management",
      "Full social interaction features: like, dislike, and comment on posts",
      "Post creation and submission system for users to share their trend discoveries",
      "Built-in AI assistant for trend insights (currently inactive due to expired API key)",
      "Save posts functionality for bookmarking favorite trends",
      "Real-time language toggle supporting multiple languages across the entire platform",
      "Dynamic content feeds with personalized recommendations",
      "Responsive design for seamless mobile and desktop experiences",
      "Internationalization (i18n) implementation for global accessibility"
    ]
  },
  webhoster: {
    title: "WebHoster",
    year: "2026",
    url: "https://webhoster-codiest.vercel.app/",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Lighthouse API", "Nodemailer"],
    description: "WebHoster is a comprehensive website performance analysis platform that helps businesses and developers understand their website's health. Users simply enter their website URL and email to receive detailed performance metrics and actionable insights delivered directly to their inbox.",
    features: [
      "Automated website performance analysis using Google Lighthouse API",
      "Comprehensive metrics tracking: LCP, FCP, CLS, TTI, and Speed Index",
      "SEO analysis with actionable recommendations for search optimization",
      "Accessibility audit ensuring WCAG compliance standards",
      "Best practices evaluation for modern web development standards",
      "Beautiful, intuitive UI for visualizing performance metrics",
      "Automated email reporting with detailed PDF reports via Nodemailer",
      "Historical performance tracking for monitoring improvements over time",
      "Mobile and desktop performance analysis",
      "Real-time processing with progress indicators"
    ]
  },
  thoughtsarea: {
    title: "Thoughts Area",
    year: "2025",
    url: "https://thoughts-area.vercel.app",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "OAuth 2.0", "JWT", "Passport.js"],
    description: "Thoughts Area is a feature-rich social media platform inspired by Reddit's community-driven approach. This personal project demonstrates advanced full-stack development skills, implementing complex social features including user interactions, content management, and multiple authentication strategies.",
    features: [
      "Reddit-inspired post and comment system with nested threading",
      "Upvote/downvote mechanism with real-time score updates",
      "User profiles with customizable information and activity tracking",
      "Follower/following system for building user connections",
      "OAuth 2.0 integration supporting multiple providers (Google, Facebook, GitHub)",
      "Content feed with algorithmic sorting based on popularity and recency",
      "Rich text editor for creating formatted posts",
      "Search functionality across posts, comments, and users",
      "Notification system for interactions and follower updates",
      "Responsive design with smooth animations and transitions"
    ]
  },
  yona: {
    title: "YONA",
    year: "2024",
    url: "https://yona-pi.vercel.app/",
    figmaUrl: "https://www.figma.com/design/r4yPVFCoja4cLdL3DvtTC0/Luxury-Website---UI-UX?node-id=0-1&p=f&t=q31pS9MCXD7CNOO9-0",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    description: "YONA is an elegant, luxury website created for a premium Iraqi brand. This project showcases pixel-perfect implementation from Figma designs, emphasizing sophistication, clean aesthetics, and premium user experience. The focus was on achieving design excellence and creating a stunning visual presence that reflects the brand's luxury positioning.",
    features: [
      "Pixel-perfect implementation matching the original Figma design specifications",
      "Elegant and premium UI/UX with sophisticated typography and spacing",
      "Smooth, subtle animations using Framer Motion for enhanced user experience",
      "Fully responsive design maintaining elegance across all device sizes",
      "Optimized performance with Next.js for fast page loads",
      "Clean, minimalist aesthetic that emphasizes luxury and sophistication",
      "Attention to detail in every element, from spacing to color transitions",
      "Custom components built with Tailwind CSS for maintainability",
      "SEO-optimized structure for better search engine visibility",
      "Cross-browser compatibility ensuring consistent experience"
    ]
  }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const modalTitle = modal.querySelector('.modal-title');
const modalTechStack = modal.querySelector('.modal-tech-stack');
const modalDescription = modal.querySelector('.modal-description');
const modalFeatures = modal.querySelector('.modal-features');
const modalVisitBtn = modal.querySelector('.modal-visit-btn');

// Open modal
function openModal(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  // Populate modal content
  modalTitle.textContent = `${project.title} (${project.year})`;

  // Tech stack
  modalTechStack.innerHTML = project.techStack
    .map(tech => `<span>${tech}</span>`)
    .join('');

  // Description
  modalDescription.textContent = project.description;

  // Features
  modalFeatures.innerHTML = `
    <h3>Key Features & Technologies</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;

  // Visit button
  modalVisitBtn.href = project.url;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners for project cards
document.querySelectorAll('.projectinfo').forEach(card => {
  card.addEventListener('click', function() {
    const projectKey = this.getAttribute('data-project');
    openModal(projectKey);
  });
});

// Close modal on overlay click
modalOverlay.addEventListener('click', closeModal);

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
