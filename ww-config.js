export default {
    editor: {
        label: 'Shadcn UI Sidebar',
        icon: 'menu',
        customStylePropertiesOrder: [
            'variant',
            'sidebarWidth', 
            'sidebarBg',
            'sidebarForeground',
            'sidebarPrimary',
            'sidebarPrimaryForeground',
            'sidebarAccent',
            'sidebarAccentForeground',
            'sidebarBorder',
            'sidebarRing'
        ],
        customSettingsPropertiesOrder: [
            'showHeader',
            'title',
            'subtitle', 
            'mainTitle',
            'collapsible',
            'variant',
            'side',
            'defaultOpen',
            'keyboardShortcut',
            'showTrigger',
            'hideContent',
            'menuItems',
            'groupLabel',
            'secondaryItems',
            'secondaryGroupLabel',
            'showFooter',
            'userName',
            'userEmail',
            'userAvatar',
            'userInitials'
        ]
    },
    triggerEvents: [
        { 
            name: 'toggle', 
            label: 'On Toggle', 
            event: { 
                open: true, 
                openMobile: false, 
                state: 'expanded', 
                isMobile: false, 
                collapsible: 'offcanvas' 
            }, 
            default: true 
        },
        { 
            name: 'item-click', 
            label: 'On Menu Item Click', 
            event: { 
                item: {}, 
                index: 0, 
                parentIndex: null, 
                label: '', 
                hasSubItems: false 
            } 
        },
        { 
            name: 'secondary-item-click', 
            label: 'On Secondary Item Click', 
            event: { 
                item: {}, 
                index: 0, 
                label: '' 
            } 
        },
    ],
    properties: {
        // Sidebar Structure - Configuration officielle Shadcn UI
        showHeader: {
            label: { en: "Show header", fr: "Afficher l'en-tête" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        title: {
            label: { en: "Application title", fr: "Titre de l'application" },
            type: "Text",
            section: "settings",
            defaultValue: "Shadcn UI",
            bindable: true
        },
        subtitle: {
            label: { en: "Application subtitle", fr: "Sous-titre de l'application" },
            type: "Text",
            section: "settings",
            defaultValue: "Demo App",
            bindable: true
        },
        mainTitle: {
            label: { en: "Main content title", fr: "Titre du contenu principal" },
            type: "Text",
            section: "settings",
            defaultValue: "Dashboard",
            bindable: true
        },
        collapsible: {
            label: { en: "Collapsible mode", fr: "Mode repliable" },
            type: "TextSelect",
            options: {
                choices: [
                    { label: "Offcanvas (mobile overlay)", value: "offcanvas" },
                    { label: "Icon (collapse to icons)", value: "icon" },
                    { label: "None (always visible)", value: "none" }
                ]
            },
            defaultValue: "offcanvas",
            section: "settings",
            bindable: true
        },
        defaultOpen: {
            label: { en: "Default open", fr: "Ouvert par défaut" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        side: {
            label: { en: "Side", fr: "Côté" },
            type: "TextSelect",
            options: {
                choices: [
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" }
                ]
            },
            defaultValue: "left",
            section: "settings"
        },
        keyboardShortcut: {
            label: { en: "Keyboard shortcut (Cmd+B)", fr: "Raccourci clavier (Cmd+B)" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        showTrigger: {
            label: { en: "Show header trigger", fr: "Afficher bouton dans l'en-tête" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        hideContent: {
            label: { en: "Hide main content area", fr: "Masquer la zone de contenu principal" },
            type: "OnOff",
            section: "settings",
            defaultValue: false,
            bindable: true
        },
        
        // Appearance
        variant: {
            label: { en: "Variant", fr: "Variante" },
            type: "TextSelect",
            options: {
                choices: [
                    { label: "Sidebar (default)", value: "sidebar" },
                    { label: "Floating (rounded with shadow)", value: "floating" },
                    { label: "Inset (subtle background)", value: "inset" }
                ]
            },
            defaultValue: "sidebar",
            section: "style"
        },
        sidebarWidth: {
            label: { en: "Sidebar width", fr: "Largeur du sidebar" },
            type: "Text",
            section: "style",
            defaultValue: "16rem",
            bindable: true
        },

        // Navigation Menu
        menuItems: {
            label: { en: "Menu items", fr: "Éléments de menu" },
            type: "Array",
            section: "settings",
            options: {
                item: {
                    type: "Object",
                    options: {
                        item: {
                            icon: {
                                label: { en: "Icon name", fr: "Nom d'icône" },
                                type: "TextSelect",
                                options: {
                                    choices: [
                                        { label: "Home", value: "home" },
                                        { label: "Inbox", value: "inbox" },
                                        { label: "Calendar", value: "calendar" },
                                        { label: "Search", value: "search" },
                                        { label: "Settings", value: "settings" },
                                        { label: "Help Circle", value: "help-circle" }
                                    ]
                                },
                                bindable: true
                            },
                            label: {
                                label: { en: "Label", fr: "Libellé" },
                                type: "Text",
                                bindable: true
                            },
                            badge: {
                                label: { en: "Badge", fr: "Badge" },
                                type: "Text",
                                bindable: true
                            },
                            active: {
                                label: { en: "Active", fr: "Actif" },
                                type: "OnOff",
                                bindable: true
                            },
                            disabled: {
                                label: { en: "Disabled", fr: "Désactivé" },
                                type: "OnOff",
                                bindable: true
                            },
                            subItems: {
                                label: { en: "Sub items", fr: "Sous-éléments" },
                                type: "Array",
                                bindable: true,
                                options: {
                                    item: {
                                        type: "Object",
                                        options: {
                                            item: {
                                                label: {
                                                    label: { en: "Label", fr: "Libellé" },
                                                    type: "Text",
                                                    bindable: true
                                                },
                                                active: {
                                                    label: { en: "Active", fr: "Actif" },
                                                    type: "OnOff",
                                                    bindable: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            defaultValue: [
                { icon: "home", label: "Home", active: true },
                { icon: "inbox", label: "Inbox", badge: "3" },
                { icon: "calendar", label: "Calendar" },
                { icon: "search", label: "Search" },
                { icon: "settings", label: "Settings" }
            ],
            bindable: true
        },

        // Secondary Navigation
        secondaryItems: {
            label: { en: "Secondary items", fr: "Éléments secondaires" },
            type: "Array",
            section: "settings",
            options: {
                item: {
                    type: "Object",
                    options: {
                        item: {
                            icon: {
                                label: { en: "Icon name", fr: "Nom d'icône" },
                                type: "TextSelect",
                                options: {
                                    choices: [
                                        { label: "Home", value: "home" },
                                        { label: "Inbox", value: "inbox" },
                                        { label: "Calendar", value: "calendar" },
                                        { label: "Search", value: "search" },
                                        { label: "Settings", value: "settings" },
                                        { label: "Help Circle", value: "help-circle" }
                                    ]
                                },
                                bindable: true
                            },
                            label: {
                                label: { en: "Label", fr: "Libellé" },
                                type: "Text",
                                bindable: true
                            },
                            disabled: {
                                label: { en: "Disabled", fr: "Désactivé" },
                                type: "OnOff",
                                bindable: true
                            }
                        }
                    }
                }
            },
            defaultValue: [
                { icon: "help-circle", label: "Help & Support" }
            ],
            bindable: true
        },

        // Group Labels
        groupLabel: {
            label: { en: "Main group label", fr: "Label du groupe principal" },
            type: "Text",
            section: "settings",
            defaultValue: "Platform",
            bindable: true
        },
        secondaryGroupLabel: {
            label: { en: "Secondary group label", fr: "Label groupe secondaire" },
            type: "Text",
            section: "settings",
            defaultValue: "Support",
            bindable: true
        },

        // User Footer settings
        showFooter: {
            label: { en: "Show footer", fr: "Afficher le pied" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        userName: {
            label: { en: "User name", fr: "Nom d'utilisateur" },
            type: "Text",
            section: "settings",
            defaultValue: "John Doe",
            bindable: true
        },
        userEmail: {
            label: { en: "User email", fr: "Email utilisateur" },
            type: "Text",
            section: "settings",
            defaultValue: "john@example.com",
            bindable: true
        },
        userAvatar: {
            label: { en: "User avatar URL", fr: "URL avatar utilisateur" },
            type: "Text",
            section: "settings",
            defaultValue: "",
            bindable: true
        },
        userInitials: {
            label: { en: "User initials", fr: "Initiales utilisateur" },
            type: "Text",
            section: "settings",
            defaultValue: "",
            bindable: true
        },

        // Shadcn UI CSS Variables - Format HSL
        sidebarBg: {
            label: { en: "Sidebar background (HSL)", fr: "Arrière-plan sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "0 0% 98%",
            bindable: true
        },
        sidebarForeground: {
            label: { en: "Sidebar foreground (HSL)", fr: "Texte sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.3% 26.1%",
            bindable: true
        },
        sidebarPrimary: {
            label: { en: "Sidebar primary (HSL)", fr: "Couleur principale sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.9% 10%",
            bindable: true
        },
        sidebarPrimaryForeground: {
            label: { en: "Sidebar primary foreground (HSL)", fr: "Texte principal sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "0 0% 98%",
            bindable: true
        },
        sidebarAccent: {
            label: { en: "Sidebar accent (HSL)", fr: "Accent sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 4.8% 95.9%",
            bindable: true
        },
        sidebarAccentForeground: {
            label: { en: "Sidebar accent foreground (HSL)", fr: "Texte accent sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "240 5.9% 10%",
            bindable: true
        },
        sidebarBorder: {
            label: { en: "Sidebar border (HSL)", fr: "Bordure sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "220 13% 91%",
            bindable: true
        },
        sidebarRing: {
            label: { en: "Sidebar ring (HSL)", fr: "Ring sidebar (HSL)" },
            type: "Text",
            section: "style",
            defaultValue: "217.2 91.2% 59.8%",
            bindable: true
        }
    }
};
