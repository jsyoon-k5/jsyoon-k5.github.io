/*
 * Edit this file for homepage content.
 * - Set a publication link's show value to false to hide it.
 * - Leave github.url empty with show: true to display the "GitHub project TBA" placeholder.
 * - Put visual-only changes in ../config/design.css instead.
 */
window.HOMEPAGE_CONTENT = {
    profile: {
        name: "June-Seop Yoon",
        headline: "",
        portrait: "assets/images/juneseopy.png",
        portraitAlt: "Portrait of June-Seop Yoon",
        affiliation: {
            label: "High-Performance HCI Lab (formally Esports Lab) in Yonsei University",
            url: "https://esports.yonsei.ac.kr/"
        },
        summary: [
            "I am a Ph.D. candidate at High-Performance HCI Lab (formally Esports Lab) in Yonsei University, advised by Prof. Byungjoo Lee. I am expected to receive my Ph.D. in August 2026, and I received my B.Sc. in Computer Science from Yonsei University.",
            "My research develops computational models of esports players' behavior and applies them to behavior analysis, performance evaluation, and personalized training in gaming and esports. I focus mainly on first-person shooter (FPS) games, shaped by twenty years of experience as an FPS player and by the opportunity to bring more rigorous computational methods to player behavior analysis. I am currently exploring model-based player training, where computational behavior models guide personalized training protocols and feedback for players."
        ],
        cv: {
            label: "Open CV",
            url: "assets/pdfs/CV.pdf",
            lastUpdatedLabel: "CV last updated",
            lastUpdated: "22 June 2026",
            useServedLastModified: true,
            locale: "en-GB",
            timeZone: "Asia/Seoul"
        },
        links: [
            {
                label: "GitHub",
                url: "https://github.com/jsyoon-k5",
                style: "secondary"
            }
        ]
    },

    navigation: [
        { label: "About", target: "#about" },
        { label: "Publications", target: "#publications" },
        { label: "Skills", target: "#skills" },
        { label: "Miscellaneous", target: "#miscellaneous" }
    ],

    publications: {
        intro: "",
        groups: [
            {
                title: "First Author Papers",
                items: [
                    {
                        title: "Modeling visually-guided aim-and-shoot behavior in first-person shooters",
                        status: "Published",
                        venue: "International Journal of Human-Computer Studies, 199, Article 103503, 2025",
                        thumbnail: "assets/images/thumbnail_ans.png",
                        thumbnailAlt: "Thumbnail placeholder for IJHCS paper",
                        authors: [
                            { name: "June-Seop Yoon", highlight: true },
                            { name: "Hee-Seung Moon" },
                            { name: "Ben Boudaoud" },
                            { name: "Josef Spjut" },
                            { name: "Iuri Frosio" },
                            { name: "Byungjoo Lee" },
                            { name: "Joohwan Kim" }
                        ],
                        note: "Collaborative work with NVIDIA",
                        links: {
                            doi: {
                                show: true,
                                label: "DOI",
                                url: "https://doi.org/10.1016/j.ijhcs.2025.103503"
                            },
                            github: {
                                show: true,
                                label: "GitHub",
                                url: "https://github.com/jsyoon-k5/Aim-and-Shoot"
                            },
                            nvidia: {
                                show: true,
                                label: "NVIDIA Research",
                                url: "https://research.nvidia.com/publication/2025-04_modeling-visually-guided-aim-and-shoot-behavior-first-person-shoters"
                            }
                        }
                    },
                    {
                        title: "How AI-Based Training Affected the Performance of Professional Go Players",
                        status: "Published",
                        venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI), 2022",
                        thumbnail: "assets/images/tb_chi22.png",
                        thumbnailAlt: "Thumbnail for CHI 2022 paper",
                        authors: [
                            { name: "Jimoon Kang" },
                            { name: "June-Seop Yoon", highlight: true, note: "first co-author" },
                            { name: "Byungjoo Lee" }
                        ],
                        links: {
                            doi: {
                                show: true,
                                label: "DOI",
                                url: "https://doi.org/10.1145/3491102.3517540"
                            },
                            github: { show: false, label: "GitHub", url: "" }
                        }
                    },
                    {
                        title: "Hierarchical Amortized Inference for Simulation Models in HCI",
                        status: "Manuscript under review",
                        venue: "Manuscript under review",
                        thumbnail: "assets/images/thumbnail_hai.png",
                        thumbnailAlt: "Thumbnail placeholder for manuscript under review",
                        authors: [
                            { name: "June-Seop Yoon", highlight: true, note: "first co-author" },
                            { name: "Soomin Kim", note: "first co-author" },
                            { name: "Hanbyeol Lee" },
                            { name: "Michael Xuelin Huang" },
                            { name: "David Lindlbauer" },
                            { name: "Shumin Zhai" },
                            { name: "Hee-Seung Moon" },
                            { name: "Byungjoo Lee" }
                        ],
                        links: {
                            doi: { show: false, label: "DOI", url: "" },
                            github: { show: true, label: "GitHub", url: "", placeholder: "GitHub project TBU" }
                        }
                    }
                ]
            },
            {
                title: "Co-Author Papers",
                items: [
                    {
                        title: "Modeling User Performance in Multi-Lane Moving-Target Acquisition",
                        status: "Published",
                        venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI), 2025",
                        authors: [
                            { name: "Jonghyun Kim" },
                            { name: "Joongseok Kim" },
                            { name: "June-Seop Yoon", highlight: true },
                            { name: "Hee-Seung Moon" },
                            { name: "Sunjun Kim" },
                            { name: "Byungjoo Lee" }
                        ],
                        links: {
                            doi: {
                                show: true,
                                label: "DOI",
                                url: "https://doi.org/10.1145/3706598.3713411"
                            },
                            github: { show: false, label: "GitHub", url: "" }
                        }
                    },
                    {
                        title: "Quantifying Wrist-Aiming Habits with A Dual-Sensor Mouse: Implications for Player Performance and Workload",
                        status: "Published",
                        venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI), 2024",
                        authors: [
                            { name: "Donghyeon Kang" },
                            { name: "Namsub Kim" },
                            { name: "Daekaun Kang" },
                            { name: "June-Seop Yoon", highlight: true },
                            { name: "Sunjun Kim" },
                            { name: "Byungjoo Lee" }
                        ],
                        links: {
                            doi: {
                                show: true,
                                label: "DOI",
                                url: "https://doi.org/10.1145/3613904.3642797"
                            },
                            github: { show: false, label: "GitHub", url: "" }
                        }
                    },
                    {
                        title: "Walking Outside the Box: Estimation of Detection Thresholds for Non-Forward Steps",
                        status: "Published",
                        venue: "IEEE Virtual Reality and 3D User Interfaces (VR), 2021",
                        authors: [
                            { name: "Yong-Hun Cho" },
                            { name: "Dae-Hong Min" },
                            { name: "Jin-Suk Huh" },
                            { name: "Se-Hee Lee" },
                            { name: "June-Seop Yoon", highlight: true },
                            { name: "In-Kwon Lee" }
                        ],
                        links: {
                            doi: {
                                show: true,
                                label: "DOI",
                                url: "https://doi.org/10.1109/VR50410.2021.00068"
                            },
                            github: { show: false, label: "GitHub", url: "" }
                        }
                    }
                ]
            }
        ]
    },

    skills: {
        groups: [
            {
                title: "Programming & Research",
                items: [
                    "Python: NumPy, pandas, SciPy, Matplotlib, PyTorch, Stable-Baselines3, Panda3D",
                    "C++, MATLAB, Godot Engine",
                    { text: "Computational Behavior Modeling", emphasize: true },
                    { text: "Reinforcement Learning", emphasize: true },
                    "Deep Learning",
                    "Computational Interaction Design",
                    "User Experiment Design"
                ]
            },
            {
                title: "Tools",
                items: [
                    "Adobe Photoshop, Adobe Illustrator",
                    "Eye-tracking device: Gazepoint GP3"
                ],
                note: "I designed the logo for the High-Performance HCI Lab (formally Esports Lab) in Yonsei University.",
                image: {
                    src: "assets/images/yeslab_logo.png",
                    alt: "High-Performance HCI Lab logo"
                }
            },
            {
                title: "Languages",
                items: [
                    "Korean: native",
                    "English: fluent",
                    "Japanese: intermediate"
                ]
            }
        ]
    },

    miscellaneous: {
        intro: "",
        items: [
            {
                title: "Gaming Experience",
                type: "gaming",
                body: [
                    "I have played FPS games for over twenty years. In 2011, I mainly played Team Fortress 2, and I moved to Overwatch in 2016.",
                    "In 2019, I was a varsity player for Yonsei University and defeated Korea University in the rivalry match at the Cyber Yonsei-Korea Games. My highest rating was 4200+ during the 2019 seasons."
                ],
                media: {
                    type: "image",
                    url: "assets/images/cyber_yonsei_korea_2019.png",
                    alt: "Cyber Yonsei-Korea Games 2019"
                }
            },
            {
                title: "Amateur Card Magician",
                type: "magic",
                body: [
                    "I practice and perform close-up card magic as an amateur magician."
                ],
                media: {
                    type: "youtube",
                    url: "https://www.youtube.com/embed/HKUQg7vp54Y",
                    title: "Card magic trick video"
                }
            }
        ]
    }
};
