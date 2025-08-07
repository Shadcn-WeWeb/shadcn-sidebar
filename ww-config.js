export default {
    editor: {
        label: {
            en: 'Shadcn UI Sidebar',
            fr: 'Sidebar Shadcn UI'
        },
        icon: 'menu',
        // Section excludes pour laisser place aux zones de dropzone
        excludedSections: ["spacing", "positioning"],
        customSettingsPropertiesOrder: [
            'showHeader',
            'showFooter',
            'showTrigger',
            'hideContent',
            'side',
            'defaultOpen',
            'keyboardShortcut',
            'headerPadding',
            'navPadding',
            'footerPadding',
            'contentPadding'
        ],
        customStylePropertiesOrder: [
            'sidebarWidth',
            'sidebarBg',
            'sidebarForeground',
            'sidebarBorder',
            'sidebarPrimary',
            'sidebarPrimaryForeground',
            'sidebarAccent',
            'sidebarAccentForeground',
            'triggerBackground'
        ]
    },
    triggerEvents: [
        { 
            name: 'toggle', 
            label: { 
                en: 'On Toggle',
                fr: 'Lors du basculement' 
            }, 
            event: { 
                open: true, 
                openMobile: false, 
                state: 'expanded', 
                isMobile: false
            }, 
            default: true 
        }
    ],
    options: {
        forceHydration: true,
    },
    properties: {
        /* === ZONES DE DROPZONE WEWEB === */
        
        // Zone Header de la sidebar
        sidebarHeader: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-flexbox",
                    content: {
                        wwObjects: [
                            {
                                isWwObject: true,
                                type: "ww-text",
                                content: {
                                    text: { en: "Shadcn UI", fr: "Shadcn UI" }
                                },
                                style: {
                                    default: {
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        color: "var(--sidebar-primary)"
                                    }
                                }
                            }
                        ]
                    },
                    style: {
                        default: {
                            flexDirection: "column",
                            gap: "8px",
                            alignItems: "flex-start"
                        }
                    }
                }
            ]
        },

        // Zone Navigation de la sidebar
        sidebarNav: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-flexbox",
                    content: {
                        wwObjects: [
                            {
                                isWwObject: true,
                                type: "ww-button",
                                content: {
                                    text: { en: "Home", fr: "Accueil" }
                                },
                                style: {
                                    default: {
                                        width: "100%",
                                        justifyContent: "flex-start",
                                        backgroundColor: "var(--sidebar-primary)",
                                        color: "var(--sidebar-primary-foreground)",
                                        borderRadius: "6px",
                                        padding: "8px 12px",
                                        marginBottom: "4px"
                                    },
                                    hover: {
                                        backgroundColor: "var(--sidebar-accent)"
                                    }
                                }
                            },
                            {
                                isWwObject: true,
                                type: "ww-button",
                                content: {
                                    text: { en: "Dashboard", fr: "Tableau de bord" }
                                },
                                style: {
                                    default: {
                                        width: "100%",
                                        justifyContent: "flex-start",
                                        backgroundColor: "transparent",
                                        color: "var(--sidebar-foreground)",
                                        borderRadius: "6px",
                                        padding: "8px 12px",
                                        marginBottom: "4px"
                                    },
                                    hover: {
                                        backgroundColor: "var(--sidebar-accent)"
                                    }
                                }
                            },
                            {
                                isWwObject: true,
                                type: "ww-button",
                                content: {
                                    text: { en: "Settings", fr: "Paramètres" }
                                },
                                style: {
                                    default: {
                                        width: "100%",
                                        justifyContent: "flex-start",
                                        backgroundColor: "transparent",
                                        color: "var(--sidebar-foreground)",
                                        borderRadius: "6px",
                                        padding: "8px 12px",
                                        marginBottom: "4px"
                                    },
                                    hover: {
                                        backgroundColor: "var(--sidebar-accent)"
                                    }
                                }
                            }
                        ]
                    },
                    style: {
                        default: {
                            flexDirection: "column",
                            gap: "4px",
                            alignItems: "stretch"
                        }
                    }
                }
            ]
        },

        // Zone Footer de la sidebar
        sidebarFooter: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-flexbox",
                    content: {
                        wwObjects: [
                            {
                                isWwObject: true,
                                type: "ww-text",
                                content: {
                                    text: { en: "John Doe", fr: "John Doe" }
                                },
                                style: {
                                    default: {
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "var(--sidebar-foreground)"
                                    }
                                }
                            },
                            {
                                isWwObject: true,
                                type: "ww-text",
                                content: {
                                    text: { en: "john@example.com", fr: "john@example.com" }
                                },
                                style: {
                                    default: {
                                        fontSize: "12px",
                                        color: "var(--sidebar-foreground)",
                                        opacity: "0.6"
                                    }
                                }
                            }
                        ]
                    },
                    style: {
                        default: {
                            flexDirection: "column",
                            gap: "2px",
                            alignItems: "flex-start"
                        }
                    }
                }
            ]
        },

        // Zone Header du contenu principal
        mainHeader: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-text",
                    content: {
                        text: { en: "Dashboard", fr: "Tableau de bord" }
                    },
                    style: {
                        default: {
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "#1f2937"
                        }
                    }
                }
            ]
        },

        // Zone contenu principal
        mainContent: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "ww-text",
                    content: {
                        text: { 
                            en: "Welcome to your Shadcn UI sidebar! Drop elements here to build your content.", 
                            fr: "Bienvenue dans votre sidebar Shadcn UI ! Déposez des éléments ici pour construire votre contenu." 
                        }
                    },
                    style: {
                        default: {
                            fontSize: "16px",
                            color: "#6b7280",
                            textAlign: "center",
                            padding: "40px 20px"
                        }
                    }
                }
            ]
        },

        /* === CONFIGURATION SIDEBAR === */
        
        showHeader: {
            label: { en: "Show header zone", fr: "Afficher zone d'en-tête" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        showFooter: {
            label: { en: "Show footer zone", fr: "Afficher zone de pied" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        showTrigger: {
            label: { en: "Show header trigger", fr: "Afficher bouton dans l'en-tête" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        hideContent: {
            label: { en: "Hide main content area", fr: "Masquer la zone de contenu principal" },
            type: "OnOff",
            section: "settings",
            defaultValue: false,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        side: {
            label: { en: "Side", fr: "Côté" },
            type: "TextSelect",
            options: {
                options: [
                    { label: { en: "Left", fr: "Gauche" }, value: "left" },
                    { label: { en: "Right", fr: "Droite" }, value: "right" }
                ]
            },
            defaultValue: "left",
            section: "settings",
            responsive: true,
            states: true,
            classes: true
        },

        defaultOpen: {
            label: { en: "Default open", fr: "Ouvert par défaut" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        keyboardShortcut: {
            label: { en: "Keyboard shortcut (Cmd+B)", fr: "Raccourci clavier (Cmd+B)" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === ESPACEMENT DES ZONES === */

        headerPadding: {
            label: { en: "Header padding", fr: "Espacement en-tête" },
            type: "Length",
            section: "settings",
            defaultValue: "1rem",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        navPadding: {
            label: { en: "Navigation padding", fr: "Espacement navigation" },
            type: "Length",
            section: "settings",
            defaultValue: "1rem",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        footerPadding: {
            label: { en: "Footer padding", fr: "Espacement pied" },
            type: "Length",
            section: "settings",
            defaultValue: "1rem",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        contentPadding: {
            label: { en: "Content padding", fr: "Espacement contenu" },
            type: "Length",
            section: "settings",
            defaultValue: "1rem",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === STYLE SIDEBAR === */

        sidebarWidth: {
            label: { en: "Sidebar width", fr: "Largeur sidebar" },
            type: "Length",
            section: "style",
            defaultValue: "16rem",
            bindable: true,
            responsive: true,
            states: true,
            classes: true,
            bindingValidation: {
                markdown: "width",
                type: "string",
                cssSupports: "width",
            }
        },

        sidebarBg: {
            label: { en: "Sidebar background (HSL)", fr: "Arrière-plan sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "0 0% 98%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarForeground: {
            label: { en: "Sidebar foreground (HSL)", fr: "Texte sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.3% 26.1%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarBorder: {
            label: { en: "Sidebar border (HSL)", fr: "Bordure sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "220 13% 91%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarPrimary: {
            label: { en: "Sidebar primary (HSL)", fr: "Couleur principale sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.9% 10%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarPrimaryForeground: {
            label: { en: "Sidebar primary foreground (HSL)", fr: "Texte principal sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "0 0% 98%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarAccent: {
            label: { en: "Sidebar accent (HSL)", fr: "Accent sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 4.8% 95.9%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        sidebarAccentForeground: {
            label: { en: "Sidebar accent foreground (HSL)", fr: "Texte accent sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.9% 10%",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        triggerBackground: {
            label: { en: "Trigger background", fr: "Arrière-plan bouton" },
            type: "Color",
            section: "style",
            defaultValue: "white",
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        }
    }
};