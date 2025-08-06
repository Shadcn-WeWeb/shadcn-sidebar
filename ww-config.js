export default {
    editor: {
        label: 'Sidebar Navigation',
        icon: 'menu',
    },
    triggerEvents: [
        { name: 'toggle', label: 'On Toggle', event: { collapsed: false }, default: true },
        { name: 'item-click', label: 'On Item Click', event: { item: {}, index: 0, label: '' } },
    ],
    properties: {
        // Header settings
        showHeader: {
            label: { en: "Show header", fr: "Afficher l'en-tête" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        title: {
            label: { en: "Title", fr: "Titre" },
            type: "Text",
            section: "settings",
            defaultValue: "Navigation",
            bindable: true
        },
        collapsible: {
            label: { en: "Collapsible", fr: "Repliable" },
            type: "OnOff",
            section: "settings",
            defaultValue: true,
            bindable: true
        },
        collapsed: {
            label: { en: "Initially collapsed", fr: "Replié initialement" },
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
                    { label: "Default", value: "default" },
                    { label: "Secondary", value: "secondary" },
                    { label: "Outline", value: "outline" }
                ]
            },
            defaultValue: "default",
            section: "style"
        },
        position: {
            label: { en: "Position", fr: "Position" },
            type: "TextSelect",
            options: {
                choices: [
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" }
                ]
            },
            defaultValue: "left",
            section: "style"
        },

        // Navigation items
        items: {
            label: { en: "Navigation items", fr: "Éléments de navigation" },
            type: "Array",
            section: "settings",
            options: {
                item: {
                    type: "Object",
                    options: {
                        item: {
                            icon: {
                                label: { en: "Icon", fr: "Icône" },
                                type: "Text",
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
                            }
                        }
                    }
                }
            },
            defaultValue: [
                { icon: "🏠", label: "Home", active: true },
                { icon: "📊", label: "Dashboard", badge: "3" },
                { icon: "👥", label: "Users" },
                { icon: "⚙️", label: "Settings" },
                { icon: "❓", label: "Help" }
            ],
            bindable: true
        },

        // Footer settings
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
        userInitials: {
            label: { en: "User initials", fr: "Initiales utilisateur" },
            type: "Text",
            section: "settings",
            defaultValue: "JD",
            bindable: true
        },

        // Colors
        primaryColor: {
            label: { en: "Primary color", fr: "Couleur principale" },
            type: "Color",
            section: "style",
            defaultValue: "hsl(222.2, 47.4%, 11.2%)",
            bindable: true
        },
        primaryForeground: {
            label: { en: "Primary foreground", fr: "Premier plan principal" },
            type: "Color", 
            section: "style",
            defaultValue: "hsl(210, 40%, 98%)",
            bindable: true
        },
        secondaryColor: {
            label: { en: "Secondary color", fr: "Couleur secondaire" },
            type: "Color",
            section: "style", 
            defaultValue: "hsl(210, 40%, 96%)",
            bindable: true
        },
        secondaryForeground: {
            label: { en: "Secondary foreground", fr: "Premier plan secondaire" },
            type: "Color",
            section: "style",
            defaultValue: "hsl(222.2, 84%, 4.9%)",
            bindable: true
        },
        borderColor: {
            label: { en: "Border color", fr: "Couleur de bordure" },
            type: "Color",
            section: "style",
            defaultValue: "hsl(214.3, 31.8%, 91.4%)",
            bindable: true
        },
        accentColor: {
            label: { en: "Accent color", fr: "Couleur d'accent" },
            type: "Color",
            section: "style",
            defaultValue: "hsl(210, 40%, 96%)",
            bindable: true
        },
        accentForeground: {
            label: { en: "Accent foreground", fr: "Premier plan accent" },
            type: "Color",
            section: "style",
            defaultValue: "hsl(222.2, 84%, 4.9%)",
            bindable: true
        }
    }
};
