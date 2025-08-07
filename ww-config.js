export default {
    editor: {
        label: {
            en: 'Shadcn UI Sidebar',
            fr: 'Sidebar Shadcn UI'
        },
        icon: 'menu',
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
        
        // Zone Header de la sidebar - HEADER SHADCN
        sidebarHeader: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "sidebar-header",
                    content: {
                        showLogo: true,
                        logoType: "icon",
                        logoIcon: "command",
                        logoImage: "",
                        logoAlt: { en: "Logo", fr: "Logo" },
                        logoFallback: "S",
                        showTitle: true,
                        title: { en: "Shadcn UI", fr: "Shadcn UI" },
                        showSubtitle: true,
                        subtitle: { en: "Demo App", fr: "App Démo" }
                    }
                }
            ]
        },

        // Zone Navigation de la sidebar - HIÉRARCHIE SHADCN
        sidebarNav: {
            defaultValue: [
                // Groupe Principal
                {
                    isWwObject: true,
                    type: "sidebar-group",
                    content: {
                        label: { en: "Platform", fr: "Plateforme" },
                        showLabel: true,
                        collapsible: false,
                        collapsed: false,
                        showPadding: true,
                        groupItems: [
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Home", fr: "Accueil" },
                                    active: true,
                                    showIcon: true,
                                    icon: "home",
                                    badge: "",
                                    hasSubmenu: false,
                                    backgroundColor: "var(--sidebar-primary)",
                                    textColor: "var(--sidebar-primary-foreground)"
                                }
                            },
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Inbox", fr: "Boîte de réception" },
                                    active: false,
                                    showIcon: true,
                                    icon: "inbox",
                                    badge: "3",
                                    hasSubmenu: false
                                }
                            },
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Calendar", fr: "Calendrier" },
                                    active: false,
                                    showIcon: true,
                                    icon: "calendar",
                                    badge: "",
                                    hasSubmenu: false
                                }
                            },
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Search", fr: "Recherche" },
                                    active: false,
                                    showIcon: true,
                                    icon: "search",
                                    badge: "",
                                    hasSubmenu: false
                                }
                            }
                        ]
                    }
                },
                // Groupe Settings avec sous-menu
                {
                    isWwObject: true,
                    type: "sidebar-group",
                    content: {
                        label: { en: "Management", fr: "Gestion" },
                        showLabel: true,
                        collapsible: true,
                        collapsed: false,
                        showPadding: true,
                        groupItems: [
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Settings", fr: "Paramètres" },
                                    active: false,
                                    showIcon: true,
                                    icon: "settings",
                                    badge: "",
                                    hasSubmenu: true
                                }
                            },
                            {
                                isWwObject: true,
                                type: "sidebar-button",
                                content: {
                                    text: { en: "Users", fr: "Utilisateurs" },
                                    active: false,
                                    showIcon: true,
                                    icon: "users",
                                    badge: "",
                                    hasSubmenu: false
                                }
                            }
                        ]
                    }
                }
            ]
        },

        // Zone Footer de la sidebar - PROFIL UTILISATEUR
        sidebarFooter: {
            defaultValue: [
                {
                    isWwObject: true,
                    type: "sidebar-group",
                    content: {
                        label: { en: "Account", fr: "Compte" },
                        showLabel: false,
                        collapsible: false,
                        collapsed: false,
                        showPadding: false,
                        groupItems: [
                            {
                                isWwObject: true,
                                type: "ww-flexbox",
                                content: {
                                    wwObjects: [
                                        {
                                            isWwObject: true,
                                            type: "ww-image",
                                            content: {
                                                url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                                            },
                                            style: {
                                                default: {
                                                    width: "32px",
                                                    height: "32px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    flexShrink: "0"
                                                }
                                            }
                                        },
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
                                                                color: "var(--sidebar-foreground)",
                                                                lineHeight: "1.25",
                                                                margin: "0"
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
                                                                opacity: "0.6",
                                                                lineHeight: "1.25",
                                                                margin: "0"
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            style: {
                                                default: {
                                                    flexDirection: "column",
                                                    gap: "2px",
                                                    alignItems: "flex-start",
                                                    flex: "1",
                                                    minWidth: "0"
                                                }
                                            }
                                        }
                                    ]
                                },
                                style: {
                                    default: {
                                        flexDirection: "row",
                                        gap: "12px",
                                        alignItems: "center",
                                        padding: "12px",
                                        borderRadius: "6px",
                                        cursor: "pointer"
                                    },
                                    hover: {
                                        backgroundColor: "var(--sidebar-accent)"
                                    }
                                }
                            }
                        ]
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