/**
 * Jigar Vachhani Portfolio Configuration
 * All contact details, social links, stats, and text are easily editable in this single file.
 */

export const personalInfo = {
  name: "JIGAR VACHHANI",
  roleTitle: "Creative Designer",
  subTitles: ["AI Content Creator", "Video Editor", "UI/UX Designer", "Design Educator"],
  tagline: "I TURN IDEAS INTO EXTRAORDINARY DIGITAL EXPERIENCES.",
  shortBio:
    "A multidisciplinary creative technologist operating at the intersection of avant-garde visual design, AI-augmented storytelling, and high-impact digital experiences.",
  detailedBio:
    "With a passion for shaping futuristic brands and engaging narratives, I combine cutting-edge creative tools, generative AI pipelines, and meticulous attention to typography and motion. Whether directing creative campaigns, crafting intuitive user interfaces, or producing high-octane video content, my mission is to deliver work that captivates and resonates.",
  philosophy:
    "I believe true creative excellence lives in the harmony between human intuition and algorithmic precision. Technology is my canvas, motion is my language, and emotion is my North Star.",
  availability: {
    status: "Available for Select Projects & Collaborations",
    badge: "OPEN FOR WORK • Q4 2026",
    isAvailable: true,
  },
  contact: {
    email: "jigar.vachhani.creative@example.com", // Editable placeholder
    whatsapp: "+91 98765 43210", // Editable placeholder
    location: "Mumbai / Remote Worldwide",
    calendly: "https://calendly.com",
  },
  socials: [
    {
      name: "Behance",
      url: "https://behance.net",
      handle: "@jigarvachhani",
      color: "#0057ff",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      handle: "@jigarvachhani.design",
      color: "#e1306c",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in",
      handle: "/in/jigar-vachhani",
      color: "#0077b5",
    },
    {
      name: "YouTube / Reels",
      url: "https://youtube.com",
      handle: "@jigarcreates",
      color: "#ff0000",
    },
  ],
  stats: [
    { label: "Design & AI Projects", value: "1000+", suffix: "" },
    { label: "Creative Workflows Explored", value: "240+", suffix: "" },
    { label: "Client Satisfaction Score", value: "99%", suffix: "" },
  ]
};

export const skillsData = {
  categories: [
    {
      title: "Design & Art Direction",
      skills: ["Graphic Design", "UI/UX Design", "Brand Identity", "Design Systems", "Editorial Layouts", "Creative Direction"]
    },
    {
      title: "Video & Motion",
      skills: ["Motion Graphics", "Video Editing", "Short-Form Social Content", "Kinetic Typography", "Sound Synchronization", "Visual Effects"]
    },
    {
      title: "AI & Emerging Tech",
      skills: ["Generative AI Pipelines", "AI Video Creation", "Prompt Engineering", "Custom Model Fine-tuning", "Neural Visual Synthesis", "Creative Automation"]
    },
    {
      title: "Core Software Stack",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe Premiere Pro", "After Effects", "Midjourney", "Runway Gen-3", "ComfyUI"]
    }
  ],
  marqueeKeywords: [
    "CREATIVE DIRECTION", "GENERATIVE AI", "BRAND IDENTITY", "MOTION GRAPHICS",
    "UI/UX DESIGN", "VIDEO EDITING", "FIGMA MASTERY", "AI STORYTELLING",
    "CINEMATIC GRADING", "PHOTOGRAPHY", "VIDEOGAPHY", "Social Media Handles"
  ]
};

export const projectsData = [
  {
    id: "skill-kit",
    title: "Skill Kit",
    subtitle: "Creative Education & Design Institute Ecosystem",
    category: "Brand Identity · UI/UX · Education",
    year: "2026",
    summary:
      "A complete visual identity and digital platform concept designed for modern creative aspirants, blending interactive learning modules with high-energy typography.",
    challenge:
      "Design institutes frequently struggle to inspire Gen-Z creatives with stale, academic design languages. The objective was to craft a bold, provocative identity that feels like a streetwear label meets an elite design lab.",
    solution:
      "Developed a dark, high-contrast visual system with electric chartreuse accents, modular curriculum dashboards, and dynamic kinetic typography badges.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    deliverables: ["Visual Identity System", "Web Platform Architecture", "Interactive Course Syllabus", "Social Launch Media"],
    accentColor: "#ccff00",
    coverImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    mockupImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "brands-live",
    title: "brands.live",
    subtitle: "AI-Powered Marketing & Digital Content Engine",
    category: "AI Content Creation · Motion Design",
    year: "2026",
    summary:
      "Creative concept and video marketing assets integrating generative AI workflows to churn out responsive, context-aware brand collateral at scale.",
    challenge:
      "Businesses require continuous promotional creatives across festivals, regional events, and sales cycles without sacrificing artistic quality.",
    solution:
      "Devised an automated prompt-to-render asset pipeline combining diffusion models and Premiere/AE templates to produce multi-aspect ratio video spots within minutes.",
    tools: ["Generative AI", "Premiere Pro", "After Effects", "Photoshop"],
    deliverables: ["AI Content Direction", "Motion Graphic Templates", "Viral Social Reels", "Brand Asset Library"],
    accentColor: "#00f2fe",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    mockupImages: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "harbaniya",
    title: "Harbaniya",
    subtitle: "Premium Botanical Haircare & Holistic Aesthetics",
    category: "Product Marketing · Packaging · Social Direction",
    year: "2025",
    summary:
      "Art direction, packaging visualization, and digital storytelling for an organic luxury haircare brand emphasizing natural botanical alchemy.",
    challenge:
      "Elevate a clean beauty product line above the crowded minimalist aesthetic into an earthy, editorial luxury experience that communicates efficacy.",
    solution:
      "Engineered rich, moody lighting set pieces, macro botanical photography concepts, and sleek packaging renders with gold foil and tinted amber textures.",
    tools: ["Photoshop", "Cinema 4D Concept", "Lightroom", "Figma"],
    deliverables: ["Product Packaging Concepts", "E-commerce Hero Visuals", "Social Editorial Campaign", "Unboxing Experience"],
    accentColor: "#f39c12",
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    mockupImages: [
      "https://images.unsplash.com/photo-1608248597359-2e185c7d0d0f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "grand-masala-diaries",
    title: "The Grand Masala Diaries",
    subtitle: "Epicurean Heritage & Hospitality Media Experience",
    category: "Video Editing · Content Strategy · Photography",
    year: "2025",
    summary:
      "A cinematic short-form documentary series capturing regional spice traditions, royal culinary secrets, and modern fine-dining ambiance.",
    challenge:
      "Transform traditional food imagery into a sensory journey filled with rhythm, sizzle, and regional heritage without relying on conventional restaurant tropes.",
    solution:
      "Crafted high-tempo cuts synchronized to ethnic percussion, color-graded with warm saffron hues, macro ingredient close-ups, and atmospheric steam motion.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Illustrator"],
    deliverables: ["Cinematic Video Series", "Menu Typography System", "Instagram Reels Campaign", "Signature Table-Talk Book"],
    accentColor: "#ff4d4d",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    mockupImages: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

export const playgroundExperiments = [
  {
    id: "exp-1",
    title: "Neural Dreams: Cybernetic Flora",
    type: "AI Synthesis",
    tech: "Midjourney v6 + ComfyUI",
    description: "Algorithmic explorations blending biomechanical structures with translucent biological petals.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tag: "Generative Art"
  },
  {
    id: "exp-2",
    title: "Fluid Dynamics in Glassmorphism",
    type: "Interactive 3D",
    tech: "Three.js / WebGL",
    description: "Real-time refractive fluid simulations that react to pointer velocities.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    tag: "Creative Coding"
  },
  {
    id: "exp-3",
    title: "Kinetic Brutalism Typography",
    type: "Motion Design",
    tech: "After Effects + Expressions",
    description: "Typographic physics where letters stretch, compress, and refract based on bass audio frequencies.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    tag: "Kinetic Type"
  },
  {
    id: "exp-4",
    title: "Dark Matter Interface System",
    type: "Experimental UI",
    tech: "Figma + Framer",
    description: "An uncompromising ultra-minimalist navigation concept optimized for gesture-driven holographic surfaces.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tag: "UI Experiment"
  }
];

export const servicesData = [
  {
    number: "01",
    title: "Creative Design & Art Direction",
    description:
      "Crafting unmistakable visual languages, bespoke brand books, digital product identity, and high-impact art direction that separates industry leaders from imitators.",
    tags: ["Brand Systems", "Visual Identity", "Typography", "Art Direction"]
  },
  {
    number: "02",
    title: "UI/UX & Interactive Digital Experiences",
    description:
      "Designing conversion-focused, intuitive user experiences with bespoke micro-interactions, responsive architecture, and dark-mode aesthetics.",
    tags: ["Design Systems", "Prototyping", "Web & App Design", "Micro-interactions"]
  },
  {
    number: "03",
    title: "AI-Powered Video & Content Production",
    description:
      "Harnessing state-of-the-art generative video models, synthetic voiceovers, and intelligent pipelines to build jaw-dropping promotional reels in record time.",
    tags: ["Runway Gen-3", "Prompt Engineering", "Hybrid Visuals", "Content Pipelines"]
  },
  {
    number: "04",
    title: "Motion Graphics & Cinematic Video Editing",
    description:
      "Precision video editing, audio-reactive motion graphics, and Hollywood-grade color grading engineered specifically for retention across social and digital platforms.",
    tags: ["Premiere Pro", "After Effects", "Reels & Shorts", "Color Grading"]
  },
  {
    number: "05",
    title: "Creative Mentorship & Workshops",
    description:
      "Sharing hands-on creative frameworks, prompt mechanics, and workflow masterclasses for aspiring designers and corporate creative teams.",
    tags: ["Design Education", "AI Workshops", "Creative Workflows", "Mentorship"]
  }
];

