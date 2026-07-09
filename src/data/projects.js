const projects = [
    {
        slug: "pos-now-pro",
        title: "POS NOW PRO",
        category: "Freelance Project",
        image: "/projects/demo.gif",
        description: "Developed and deployed a complete commercial Point of Sale system tailored for a restaurant client.",
        technologies: [
            "Flutter",
            "GetX",
            "Laravel",
            "Filament",
            "Nginx",
            "REST APIs"
        ],
        github: "https://github.com/Peiling0509/pos_now_pro_demo",
        demo: "",
        details: {
            video: "/projects/pos/demo-video.mp4",
            overview:
                "POS NOW PRO is a fully functional, commercial-grade Point of Sale system designed to streamline restaurant operations. It features a tablet-optimized frontend application for staff and a comprehensive administrative backend for management. The system handles everything from multi-lingual menu ordering and hardware integration (thermal printers) to real-time revenue tracking.",
            architecture: [
                "Flutter Mobile Application",
                "Laravel Backend API",
                "Filament Admin Dashboard",
                "Nginx Production Server"
            ],
            contribution: [
                "Designed mobile application UI",
                "Implemented business logic using GetX",
                "Developed backend API integration",
                "Configured production deployment"
            ],
            challenges: [
                {
                    problem: "Client's restaurant lacked internet connectivity for cloud hosting.",
                    solution: "Deployed the system locally using a Raspberry Pi 5 to serve as a reliable, on-premise localhost server."
                },
                {
                    problem: "Client's restaurant inability to install physical network cables for the printing infrastructure.",
                    solution: "Bypassed structural limitations by configuring a reliable wireless printing solution via Bluetooth and localized Wi-Fi extenders."
                },
                {
                    problem: "Frequent and unexpected changes to system requirements from the client.",
                    solution: "Implemented an agile scope-management strategy, accommodating up to 3 minor requirement shifts while protecting the core delivery timeline."
                }
            ],
            gallery: [
                "/projects/pos/login.jpg",
                "/projects/pos/dashboard.jpg",
                "/projects/pos/order.jpg",
                "/projects/pos/pay.jpg",
                "/projects/pos/setting.jpg",
                "/projects/pos/backend_dashboard.jpg",
                "/projects/pos/backend_menuItem.jpg",
                "/projects/pos/backend_account.jpg"
            ]
        }
    },
    {
        slug: "prims",
        title: "Public Road Intelligence Management System (PRIMS)",
        category: "Part-Time / Final Year Project",
        image: "/projects/demo.gif",
        description: "Transformed traditional paper-based workflows into an interactive mobile application for public road asset data collection with an offline-first form management module. The project was shortlisted among the Top 15 Final Year Projects at UNIMAS.",
        technologies: [
            "Flutter",
            "Dart",
            "GetX",
            "REST APIs",
            "SQLite",
            "Offline-First Design"
        ],
        github: "",
        demo: "",
        details: {
            video: "/projects/prims/demo-video.mp4",
            overview: "An interactive mobile application designed for public road asset data collection, transforming traditional paper-based forms into responsive digital workflows for field operations. The project features an offline-first form management module that enables reliable data collection in low- or no-connectivity environments. This project was shortlisted among the Top 15 Final Year Projects at UNIMAS, recognizing its technical implementation and practical impact.",
            architecture: [
                "Flutter Mobile Application",
                "GetX State Management",
                "SQLite Local Database",
                "RESTful API Integration"
            ],
            contribution: [
                "Developed the cross-platform mobile application using Flutter and Dart",
                "Engineered an offline-first capability restricted specifically to the form management module",
                "Designed user interfaces utilizing Neumorphic design aesthetics to enhance field usability",
                "Optimized application performance, quality, and responsiveness for data entry"
            ],
            challenges: [
                {
                    problem: "Guaranteeing reliable field data capture in zero-connectivity environments.",
                    solution: "Engineered a specialized offline-first form management module utilizing SQLite for local data persistence."
                },
                {
                    problem: "Syncing local offline form data with the main database upon network reconnection.",
                    solution: "Designed a seamless background synchronization protocol to securely push local data to backend REST APIs."
                },
                {
                    problem: "Translating complex paper-based forms into intuitive mobile UI flows.",
                    solution: "Utilized Neumorphic design aesthetics and Flutter DevTools to build and profile responsive, user-friendly layouts."
                }
            ],
            gallery: [
                "/projects/prims/dashboard.jpeg",
                "/projects/prims/location_data.jpeg",
                "/projects/prims/Photographs.jpeg",
                "/projects/prims/draft_saved.jpeg",
                "/projects/prims/draftOutbox.jpeg",
                "/projects/prims/syncSuccess.jpeg",
            ]
        }
    },
    {
        slug: "event2go",
        title: "Event Management Application (event2go)",
        category: "Part-Time Project",
        image: "/projects/demo.gif",
        description: "Engineered a centralized mobile application to digitize and streamline event management operations across the UNIMAS campus.",
        technologies: [
            "Flutter",
            "Bloc",
            "Firebase",
            "REST APIs"
        ],
        github: "",
        demo: "",
        details: {
            video: "",
            overview: "A centralized mobile application built to digitize, streamline, and manage comprehensive event operations and activities across the UNIMAS campus.",
            architecture: [
                "Flutter Mobile Application",
                "Bloc State Management",
                "Firebase Authentication/Services",
                "REST API Backend"
            ],
            contribution: [
                "Engineered the mobile frontend flows using Flutter and Bloc state management",
                "Collaborated closely with target users to elicit and refine application requirements",
                "Integrated backend REST APIs to facilitate seamless data exchanges",
                "Implemented modern UI principles for an engaging student experience"
            ],
            challenges: [
                {
                    problem: "Digitizing diverse and complex traditional campus event workflows.",
                    solution: "Collaborated closely with target users to map requirements and transform them into interactive digital flows."
                },
                {
                    problem: "Managing state efficiently across multiple application modules.",
                    solution: "Implemented Bloc state management to separate business logic from the UI, ensuring predictable data streams."
                },
                {
                    problem: "Ensuring reliable frontend and backend API data synchronization.",
                    solution: "Integrated robust REST API calls and handled asynchronous network responses to maintain application data integrity."
                }
            ],
            gallery: [
                "/projects/event2go/login.jpeg",
                "/projects/event2go/event.jpeg",
                "/projects/event2go/calender.jpeg",
                "/projects/event2go/ranking.jpeg",
            ]
        }
    }
];

export default projects;