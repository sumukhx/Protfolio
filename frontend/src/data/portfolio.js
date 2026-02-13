export const personalInfo = {
  name: "Sumukh Chhabra",
  title: "AI Solutions Engineer",
  tagline: "Building intelligent systems for real-world applications",
  email: "sumukhchhabra10@gmail.com",
  phone: "+91-9870229945",
  github: "https://github.com/sumukhx",
  linkedin: "https://www.linkedin.com/in/sumukh-chhabra-23829428a/",
  profileImage: "https://customer-assets.emergentagent.com/job_52bac923-9173-4545-928b-0b454b9e3e5f/artifacts/xqm666iy_IMG_4367.JPG",
  resumeUrl: "/resume.pdf"
};

export const summary = {
  title: "Overview",
  content: "I'm a builder first—AI, software, and systems are just the tools. I've worked on real-world ML and AI systems through internships in research-driven and production-oriented environments, where I built and debugged end-to-end pipelines rather than isolated models. My experience spans computer vision, data-driven automation, geospatial systems, and applied AI, with hands-on work in object detection, drone and video analytics, GPS-denied navigation, anomaly detection, and intelligent decision systems. I've delivered projects ranging from autonomous navigation and ISR-style analysis to crowd monitoring, satellite imagery workflows, and AI-powered assistants, often under constraints like noisy data, limited compute, and strict performance requirements. I'm comfortable moving from raw data to deployable prototypes, and I focus on understanding why systems fail, not just when they succeed. I value clarity, robustness, and execution over hype. I learn fast, question assumptions early, and build systems meant to survive real use—not demos. If you're building something real and need someone who can think deeply and execute cleanly, let's talk."
};

export const capabilities = [
  {
    category: "AI/ML Development",
    skills: [
      "Object Detection (YOLOv5, ResNet-50, VGG-16)",
      "Computer Vision & Sonar Imaging",
      "Multimodal Sensor Fusion",
      "NLP & Speech-to-Text (Whisper)",
      "LLM Integration & Automation"
    ]
  },
  {
    category: "Defense Systems",
    skills: [
      "GPS-Denied Navigation",
      "Underwater Mine Detection",
      "ISR & Intelligence Prediction",
      "AIS Analytics & Drone Detection",
      "Combat Management Systems"
    ]
  },
  {
    category: "Development Stack",
    skills: [
      "Python (Primary)",
      "TensorFlow / PyTorch",
      "GIS & Spatial Analysis",
      "Real-time Data Pipelines",
      "Field-ready Deployment"
    ]
  }
];

export const experiences = [
  {
    id: "netweb-tech",
    organization: "Netweb Technologies India Ltd",
    location: "Gurugram, India",
    role: "AI Solutions Intern (OEM Nvidia)",
    ministry: "Technology",
    dates: "Jan 2026 – Present",
    status: "active",
    context: "Working with NVIDIA OEM solutions to develop and implement AI-powered systems for enterprise applications.",
    responsibilities: [
      "Developing AI solutions leveraging NVIDIA's technology stack",
      "Implementing machine learning models for real-world business applications",
      "Collaborating with cross-functional teams on AI integration projects",
      "Optimizing AI workflows for production deployment"
    ],
    constraints: [
      "Enterprise-grade reliability requirements",
      "Scalability and performance optimization",
      "Integration with existing systems",
      "Production deployment constraints"
    ],
    technologies: [
      "NVIDIA AI Stack",
      "Python",
      "Machine Learning",
      "Deep Learning"
    ],
    impact: "Contributing to enterprise AI solutions deployment and optimization using NVIDIA's cutting-edge technology."
  },
  {
    id: "drdo-cair",
    organization: "DRDO CAIR",
    fullName: "Centre for Artificial Intelligence & Robotics, Defence Research and Development Organisation",
    location: "Bengaluru, India",
    role: "AI Development Intern",
    ministry: "Ministry of Defence",
    dates: "Jun 2025 – Aug 2025",
    status: "completed",
    context: "Developed autonomous systems for GPS-denied operational environments where traditional navigation fails.",
    responsibilities: [
      "Developed AI-based navigation and surveillance modules for GPS-denied environments",
      "Designed ML pipelines for object detection, data fusion, and defence workflows",
      "Integrated multi-sensor autonomous systems for reliable field performance"
    ],
    constraints: [
      "GPS-denied operation",
      "Multi-sensor fusion complexity",
      "Field reliability requirements",
      "Real-time processing demands"
    ],
    technologies: [
      "YOLOv5",
      "Multimodal Fusion",
      "GIS Systems",
      "Python ML Pipelines"
    ],
    impact: "Built navigation system capable of autonomous operation in contested environments without satellite positioning."
  },
  {
    id: "indian-navy",
    organization: "Indian Navy",
    location: "New Delhi, India",
    role: "Machine Learning Intern",
    ministry: "Ministry of Defence",
    dates: "Dec 2024 – Jan 2025",
    status: "completed",
    context: "Focused on underwater threat detection and combat management system enhancements using deep learning.",
    responsibilities: [
      "Built object detection models using ResNet-50 and VGG-16 for sonar image datasets",
      "Developed Whisper-based speech-to-text tools for automated defence tasks",
      "Built an AI-powered Minutes-of-Meeting generator using LLMs",
      "Explored AR applications for Beyond Visual Range (BVR) vessel identification",
      "Contributed to H.A.W.K module development for Combat Management System"
    ],
    constraints: [
      "Sonar noise and image quality",
      "Real-time detection requirements",
      "Defence terminology accuracy",
      "Integration with CMS architecture"
    ],
    technologies: [
      "ResNet-50",
      "VGG-16",
      "Whisper STT",
      "LLM APIs",
      "AR Frameworks"
    ],
    impact: "Achieved high-accuracy mine detection from noisy sonar datasets. Automated meeting workflows for operational efficiency."
  },
  {
    id: "wesee",
    organization: "WESEE",
    fullName: "Weapons and Electronics Systems Engineering Establishment",
    location: "New Delhi, India",
    role: "Data Science Intern",
    ministry: "Ministry of Defence",
    dates: "May 2024 – Jul 2024",
    status: "completed",
    context: "First defense internship focused on facial recognition, maritime analytics, and early warning systems.",
    responsibilities: [
      "Developed a facial detection system for a Defence Office",
      "Conducted research on AIS analytics and drone detection systems",
      "Demonstrated Early Warning Fire Detection System (EWFS) to Naval Delegation"
    ],
    constraints: [
      "Real-time processing requirements",
      "Varying environmental conditions",
      "High accuracy demands for security applications"
    ],
    technologies: [
      "YOLOv5",
      "FaceNet",
      "AIS Data Processing",
      "Computer Vision"
    ],
    impact: "Successfully deployed facial detection system. Presented EWFS to senior naval officers demonstrating practical application."
  }
];

export const projects = [
  {
    id: "gps-denied-nav",
    title: "AI-Based Navigation & Surveillance in GPS-Denied Environments",
    category: "Autonomous Systems",
    status: "Production",
    objective: "Design an AI system for surveillance and navigation without GPS availability.",
    description: "Implemented YOLOv5-based object detection integrated with contextual and sensor inputs. Applied multi-modal data fusion to maintain situational awareness under signal loss.",
    pipeline: {
      inputs: ["Camera Feed", "Sensor Inputs", "Contextual Data", "Map Data"],
      model: "YOLOv5 + Multimodal Fusion",
      outputs: ["Object Detection", "Navigation Path", "GIS Maps"]
    },
    engineeringChoices: [
      "Multimodal data fusion to maintain situational awareness under signal loss",
      "YOLOv5 for real-time detection on edge hardware",
      "GIS-based spatial intelligence maps for monitoring detected entities",
      "Focused on robustness, fault tolerance, and deployment feasibility"
    ],
    technologies: ["YOLOv5", "Multimodal Fusion", "GIS", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "terror-prediction",
    title: "AI-Powered ISR & Terror Activity Prediction Platform",
    category: "Intelligence & Surveillance",
    status: "Research",
    objective: "Build an Intelligence, Surveillance, and Reconnaissance (ISR) platform for threat analysis.",
    description: "Integrated the Global Terrorism Database (GTD) with spatial and analytical layers. Combined historical data, open-source inputs, and GIS mapping for risk-zone forecasting.",
    pipeline: {
      inputs: ["Global Terrorism Database", "Historical Data", "Open-Source Inputs", "GIS Mapping"],
      model: "Hotspot Detection + Risk Forecasting",
      outputs: ["Threat Analysis", "Risk Zones", "Decision Support Dashboard"]
    },
    engineeringChoices: [
      "Integrated GTD with spatial and analytical layers",
      "Implemented hotspot detection and risk-zone forecasting dashboards",
      "Designed as a decision-support system, not a black-box predictor",
      "Combined multiple data sources for comprehensive analysis"
    ],
    technologies: ["GTD", "GIS", "Data Fusion", "ML Forecasting"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "rail-kavach",
    title: "Rail Kavach — AI-Based Train Collision Prevention System",
    category: "Safety Systems",
    status: "Prototype",
    objective: "Develop an AI-driven collision prevention system for railway safety.",
    description: "Integrated YOLO, VGG16, and ResNet for object detection and classification. Used LIDAR-based validation to confirm threats with auto-stop mechanism.",
    pipeline: {
      inputs: ["Camera Feed", "LIDAR Data", "Track Sensors", "Speed Data"],
      model: "YOLO + VGG16 + ResNet Ensemble",
      outputs: ["Threat Detection", "Distance Estimation", "Auto-Stop Trigger"]
    },
    engineeringChoices: [
      "Integrated YOLO, VGG16, and ResNet for multi-level detection",
      "LIDAR-based validation to confirm threats",
      "Implemented auto-stop mechanism triggered by verified detections",
      "Focused on reducing false negatives through multimodal confirmation logic"
    ],
    technologies: ["YOLO", "VGG16", "ResNet", "LIDAR", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "underwater-mine",
    title: "Underwater Mine Detection Using Sonar Images",
    category: "Defense Systems",
    status: "Production",
    objective: "Build CNN-based classification systems for underwater mine detection from sonar imagery.",
    description: "Implemented and evaluated ResNet-50 and VGG-16 on sonar datasets. Handled noisy, low-contrast sonar imagery with real-world artefacts.",
    pipeline: {
      inputs: ["Sonar Images", "Annotated Dataset", "Environmental Data"],
      model: "ResNet-50 / VGG-16",
      outputs: ["Mine Classification", "Confidence Scores", "Location Data"]
    },
    engineeringChoices: [
      "CNN-based approach for handling defense-grade, non-optical imaging data",
      "Handled noisy, low-contrast sonar imagery with real-world artefacts",
      "Prioritized detection reliability over benchmark accuracy",
      "Evaluated multiple architectures (ResNet-50, VGG-16) for optimal performance"
    ],
    technologies: ["ResNet-50", "VGG-16", "Sonar Processing", "Deep Learning"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "hawk-module",
    title: "H.A.W.K Module — Combat Management System (CMS) Support",
    category: "Defense Systems",
    status: "Production",
    objective: "Support intelligence workflows within a Combat Management System (CMS).",
    description: "Integrated Whisper-based speech-to-text for defence communications. Implemented NLP-based defence-term intent matching and classification.",
    pipeline: {
      inputs: ["Audio Communications", "Defence Terminology Database"],
      model: "Whisper STT + NLP Intent Matcher",
      outputs: ["Transcriptions", "Intent Classification", "CMS Integration"]
    },
    engineeringChoices: [
      "Whisper-based speech-to-text for defense communications",
      "NLP-based defence-term intent matching and classification",
      "Focused on explainability and controlled outputs for operational use",
      "Real-time processing with minimal latency"
    ],
    technologies: ["Whisper", "NLP", "Python", "CMS Integration"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "meet-flash",
    title: "MEET.FLASH — Minutes in Minutes",
    category: "Automation",
    status: "Production",
    objective: "Build a real-time transcription system for automated meeting documentation.",
    description: "Built real-time transcription using Whisper. Designed LLM-based summarization workflows for structured meeting outputs.",
    pipeline: {
      inputs: ["Live Audio", "Speaker Metadata"],
      model: "Whisper + LLM Summarization",
      outputs: ["Transcripts", "Structured Summaries", "Action Items"]
    },
    engineeringChoices: [
      "Real-time transcription system using Whisper",
      "LLM-based summarization workflows for structured outputs",
      "Automated documentation for professional workflows",
      "Focused on low latency and clarity of generated summaries"
    ],
    technologies: ["Whisper", "LLM", "Real-time Processing"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition System — YOLOv5 + FaceNet",
    category: "Computer Vision",
    status: "Production",
    objective: "Develop a full facial recognition pipeline combining detection and embedding models.",
    description: "Implemented identity matching using similarity thresholds. Built a simple UI frontend for visualization and interaction.",
    pipeline: {
      inputs: ["Camera Feed", "Known Face Database"],
      model: "YOLOv5 + FaceNet",
      outputs: ["Identity Match", "Confidence Score", "Access Decision"]
    },
    engineeringChoices: [
      "YOLOv5 for fast face detection preprocessing",
      "FaceNet embeddings for robust identification",
      "Implemented identity matching using similarity thresholds",
      "Built UI frontend for visualization and strengthened understanding of feature embeddings"
    ],
    technologies: ["YOLOv5", "FaceNet", "HTML/CSS", "Python"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "dhandrishti",
    title: "DhanDrishti Wallet — Assistive AI System",
    category: "Accessibility",
    status: "Prototype",
    objective: "Enable visually impaired users to identify currency denominations independently.",
    description: "Built OCR + computer vision system for banknote identification. Designed for visually impaired users with audio and haptic feedback.",
    pipeline: {
      inputs: ["Camera Feed", "Banknote Images"],
      model: "OCR + Computer Vision",
      outputs: ["Denomination ID", "Audio Feedback", "Haptic Response"]
    },
    engineeringChoices: [
      "OCR + computer vision for banknote identification",
      "Designed for visually impaired users with audio and haptic feedback",
      "Focused on usability, accessibility, and reliability",
      "Introduced human-centric design constraints into AI development"
    ],
    technologies: ["OCR", "Computer Vision", "Audio Feedback", "Mobile Dev"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  },
  {
    id: "facial-detection",
    title: "Facial Detection System — Foundational Project",
    category: "Computer Vision",
    status: "Completed",
    objective: "Develop facial detection system for office environments and security automation.",
    description: "Learned core computer vision pipelines and output processing. Observed direct real-world application in security and automation.",
    pipeline: {
      inputs: ["Camera Feed", "Office Environment"],
      model: "Facial Detection CNN",
      outputs: ["Face Detection", "Tracking", "Security Alerts"]
    },
    engineeringChoices: [
      "Developed initial facial detection system for office environments",
      "Learned core computer vision pipelines and output processing",
      "Observed direct real-world application in security and automation",
      "Sparked interest in applied AI systems"
    ],
    technologies: ["Computer Vision", "Python", "Deep Learning"],
    links: {
      repo: null,
      demo: null,
      writeup: null
    }
  }
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Bennett University",
  duration: "2023 – 2027",
  focus: "AI/ML Systems with Real-world Applications"
};

export const leadership = [
  {
    id: "burs-vp",
    title: "Vice President",
    organization: "Bennett Undergraduate Research Society (BURS)",
    dates: "2024 – Present",
    responsibilities: [
      "Led initiatives to strengthen the undergraduate research ecosystem at Bennett University",
      "Played a key leadership role in organizing ResCon 4.0, the flagship research conclave of BURS",
      "Oversaw planning and execution of research competitions, workshops, and speaker sessions",
      "Coordinated with faculty mentors, external speakers, and student research teams",
      "Ensured academic quality, structured evaluation, and smooth event operations",
      "Mentored junior members in research documentation, presentations, and project structuring"
    ]
  },
  {
    id: "cabinet-gs",
    title: "General Secretary",
    organization: "Student Cabinet",
    dates: "2024 – Present",
    responsibilities: [
      "Represented the student body in academic and administrative coordination",
      "Assisted in organizing university-level academic, technical, and cultural initiatives",
      "Coordinated with multiple student societies for inter-club collaboration",
      "Managed communication, scheduling, and operational logistics for student-led programs",
      "Contributed to policy-level discussions and student representation forums"
    ]
  }
];

export const commandPaletteCommands = [
  { id: "experience", label: "Go to Experience", action: "navigate", target: "experience" },
  { id: "projects", label: "Go to Projects", action: "navigate", target: "projects" },
  { id: "capabilities", label: "View Tech Stack", action: "navigate", target: "capabilities" },
  { id: "resume", label: "Open Resume", action: "download", target: personalInfo.resumeUrl },
  { id: "email", label: "Copy Email", action: "copy", target: personalInfo.email },
  { id: "phone", label: "Copy Phone", action: "copy", target: personalInfo.phone },
  { id: "console", label: "Toggle Console Mode", action: "toggle", target: "console" }
];
