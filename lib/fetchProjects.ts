import type { Project } from '../types/project';

// Portfolio projects data
const portfolioProjects: Project[] = [
  {
    id: "1",
    title: "HTML Basics - Angela Recipe",
    description: "A responsive recipe website built with semantic HTML, demonstrating proper HTML structure and accessibility best practices.",
    image: "/images/Angela-recipe-HTML.png",
    url: "https://github.com/DrDevEli/HTML_Basics"
  },
  {
    id: "2", 
    title: "CSS Basics - Web Design Project",
    description: "A modern web design project showcasing advanced CSS techniques, animations, and responsive design principles.",
    image: "/images/dev_com_design_project.png",
    url: "https://github.com/DrDevEli/CSS_Basics"
  },
  {
    id: "3",
    title: "JavaScript DOM Challenge - Drum Kit",
    description: "An interactive drum kit application built with vanilla JavaScript, focusing on DOM manipulation and event handling.",
    image: "/images/Drum-kit-DOM.png", 
    url: "https://github.com/DrDevEli/JavaScript-DOM_CHALLENGE-"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, TypeScript, and responsive design to showcase my development skills.",
    image: "/images/dev_com_design_project.png",
    url: "https://github.com/DrDevEli/portfolio"
  }
];

// Function to fetch all projects
export async function fetchProjects(): Promise<Project[]> {
  // In a real application, this might fetch from an API or CMS
  return portfolioProjects;
}

// Function to fetch a single project by ID
export async function fetchProjectById(id: string): Promise<Project | undefined> {
  return portfolioProjects.find(project => project.id === id);
}

// Function to fetch projects by category (if needed in the future)
export async function fetchProjectsByCategory(category: string): Promise<Project[]> {
  // This could be expanded to filter by technology or project type
  return portfolioProjects;
}

// Function to get the current work projects (featured projects)
export async function fetchCurrentWorkProjects(): Promise<Project[]> {
  // Return the most recent or featured projects
  return portfolioProjects.slice(0, 2);
} 