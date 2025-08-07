export default {
    editor: {
        label: {
            en: 'Sidebar Header',
            fr: 'En-tête Sidebar'
        },
        icon: 'layout-grid',
        customSettingsPropertiesOrder: [
            'showLogo',
            'logoType',
            'logoIcon',
            'logoImage',
            'logoAlt',
            'logoFallback',
            'showTitle',
            'title',
            'showSubtitle',
            'subtitle'
        ],
        customStylePropertiesOrder: [
            'gap',
            'padding',
            'logoSize',
            'logoBackground',
            'logoColor',
            'logoRadius',
            'titleSize',
            'titleWeight',
            'titleColor',
            'subtitleSize',
            'subtitleWeight',
            'subtitleColor',
            'subtitleOpacity'
        ]
    },
    properties: {
        /* === LOGO === */
        showLogo: {
            label: { en: 'Show logo', fr: 'Afficher logo' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        logoType: {
            label: { en: 'Logo type', fr: 'Type de logo' },
            type: 'TextSelect',
            options: {
                options: [
                    { label: { en: 'Icon', fr: 'Icône' }, value: 'icon' },
                    { label: { en: 'Image', fr: 'Image' }, value: 'image' },
                    { label: { en: 'Text', fr: 'Texte' }, value: 'text' }
                ]
            },
            section: 'settings',
            defaultValue: 'icon',
            bindable: true,
            hidden: (content) => !content.showLogo,
            responsive: true,
            states: true,
            classes: true
        },

        logoIcon: {
            label: { en: 'Logo icon', fr: 'Icône logo' },
            type: 'TextSelect',
            options: {
                options: [
                    { label: { en: 'Command', fr: 'Commande' }, value: 'command' },
                    { label: { en: 'Layers', fr: 'Calques' }, value: 'layers' },
                    { label: { en: 'Layout Grid', fr: 'Grille' }, value: 'layout-grid' },
                    { label: { en: 'Zap', fr: 'Éclair' }, value: 'zap' },
                    { label: { en: 'Hexagon', fr: 'Hexagone' }, value: 'hexagon' },
                    { label: { en: 'Square', fr: 'Carré' }, value: 'square' },
                    { label: { en: 'Circle', fr: 'Cercle' }, value: 'circle' },
                    { label: { en: 'Triangle', fr: 'Triangle' }, value: 'triangle' },
                    { label: { en: 'Diamond', fr: 'Diamant' }, value: 'diamond' },
                    { label: { en: 'Star', fr: 'Étoile' }, value: 'star' }
                ]
            },
            section: 'settings',
            defaultValue: 'command',
            bindable: true,
            hidden: (content) => !content.showLogo || content.logoType !== 'icon',
            responsive: true,
            states: true,
            classes: true
        },

        logoImage: {
            label: { en: 'Logo image', fr: 'Image logo' },
            type: 'Image',
            section: 'settings',
            defaultValue: '',
            bindable: true,
            hidden: (content) => !content.showLogo || content.logoType !== 'image',
            responsive: true,
            states: true,
            classes: true
        },

        logoAlt: {
            label: { en: 'Logo alt text', fr: 'Texte alternatif logo' },
            type: 'Text',
            section: 'settings',
            defaultValue: { en: 'Logo', fr: 'Logo' },
            bindable: true,
            multiLang: true,
            hidden: (content) => !content.showLogo || content.logoType !== 'image',
            responsive: true,
            states: true,
            classes: true
        },

        logoFallback: {
            label: { en: 'Logo text', fr: 'Texte logo' },
            type: 'Text',
            section: 'settings',
            defaultValue: 'S',
            bindable: true,
            hidden: (content) => !content.showLogo || content.logoType !== 'text',
            responsive: true,
            states: true,
            classes: true
        },

        /* === TITLE === */
        showTitle: {
            label: { en: 'Show title', fr: 'Afficher titre' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        title: {
            label: { en: 'Title', fr: 'Titre' },
            type: 'Text',
            section: 'settings',
            defaultValue: { en: 'Shadcn UI', fr: 'Shadcn UI' },
            bindable: true,
            multiLang: true,
            hidden: (content) => !content.showTitle,
            responsive: true,
            states: true,
            classes: true
        },

        /* === SUBTITLE === */
        showSubtitle: {
            label: { en: 'Show subtitle', fr: 'Afficher sous-titre' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        subtitle: {
            label: { en: 'Subtitle', fr: 'Sous-titre' },
            type: 'Text',
            section: 'settings',
            defaultValue: { en: 'Demo App', fr: 'App Démo' },
            bindable: true,
            multiLang: true,
            hidden: (content) => !content.showSubtitle,
            responsive: true,
            states: true,
            classes: true
        },

        /* === STYLING === */
        gap: {
            label: { en: 'Gap between elements', fr: 'Espacement entre éléments' },
            type: 'Length',
            section: 'style',
            defaultValue: '12px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        padding: {
            label: { en: 'Padding', fr: 'Espacement interne' },
            type: 'Length',
            section: 'style',
            defaultValue: '16px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === LOGO STYLING === */
        logoSize: {
            label: { en: 'Logo size', fr: 'Taille logo' },
            type: 'Length',
            section: 'style',
            defaultValue: '32px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        logoBackground: {
            label: { en: 'Logo background', fr: 'Fond logo' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-primary)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        logoColor: {
            label: { en: 'Logo color', fr: 'Couleur logo' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-primary-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        logoRadius: {
            label: { en: 'Logo border radius', fr: 'Rayon bordures logo' },
            type: 'Length',
            section: 'style',
            defaultValue: '8px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === TITLE STYLING === */
        titleSize: {
            label: { en: 'Title font size', fr: 'Taille police titre' },
            type: 'Length',
            section: 'style',
            defaultValue: '18px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        titleWeight: {
            label: { en: 'Title font weight', fr: 'Graisse police titre' },
            type: 'TextSelect',
            options: {
                options: [
                    { label: { en: 'Normal', fr: 'Normal' }, value: '400' },
                    { label: { en: 'Medium', fr: 'Medium' }, value: '500' },
                    { label: { en: 'Semi Bold', fr: 'Semi Gras' }, value: '600' },
                    { label: { en: 'Bold', fr: 'Gras' }, value: '700' },
                ]
            },
            section: 'style',
            defaultValue: '600',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        titleColor: {
            label: { en: 'Title color', fr: 'Couleur titre' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === SUBTITLE STYLING === */
        subtitleSize: {
            label: { en: 'Subtitle font size', fr: 'Taille police sous-titre' },
            type: 'Length',
            section: 'style',
            defaultValue: '14px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        subtitleWeight: {
            label: { en: 'Subtitle font weight', fr: 'Graisse police sous-titre' },
            type: 'TextSelect',
            options: {
                options: [
                    { label: { en: 'Light', fr: 'Léger' }, value: '300' },
                    { label: { en: 'Normal', fr: 'Normal' }, value: '400' },
                    { label: { en: 'Medium', fr: 'Medium' }, value: '500' },
                ]
            },
            section: 'style',
            defaultValue: '400',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        subtitleColor: {
            label: { en: 'Subtitle color', fr: 'Couleur sous-titre' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        subtitleOpacity: {
            label: { en: 'Subtitle opacity', fr: 'Opacité sous-titre' },
            type: 'Number',
            options: { min: 0, max: 1, step: 0.1 },
            section: 'style',
            defaultValue: 0.7,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        }
    }
};