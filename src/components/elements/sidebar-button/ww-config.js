export default {
    editor: {
        label: {
            en: 'Sidebar Button',
            fr: 'Bouton Sidebar'
        },
        icon: 'cursor-pointer',
        customSettingsPropertiesOrder: [
            'text',
            'active',
            'disabled',
            'showIcon',
            'icon',
            'badge',
            'hasSubmenu'
        ],
        customStylePropertiesOrder: [
            'backgroundColor',
            'textColor',
            'hoverColor',
            'hoverTextColor',
            'borderRadius',
            'padding',
            'gap',
            'fontSize',
            'fontWeight'
        ]
    },
    triggerEvents: [
        {
            name: 'click',
            label: { en: 'On click', fr: 'Au clic' },
            event: {
                text: '',
                active: false,
                badge: '',
                icon: '',
                hasSubmenu: false
            },
            default: true
        }
    ],
    options: {
        linkable: true,
    },
    properties: {
        /* === CONTENT === */
        text: {
            label: { en: 'Text', fr: 'Texte' },
            type: 'Text',
            section: 'settings',
            defaultValue: { en: 'Menu Item', fr: 'Élément de menu' },
            bindable: true,
            multiLang: true,
            responsive: true,
            states: true,
            classes: true
        },

        active: {
            label: { en: 'Active state', fr: 'État actif' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        disabled: {
            label: { en: 'Disabled', fr: 'Désactivé' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === ICON === */
        showIcon: {
            label: { en: 'Show icon', fr: 'Afficher icône' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        icon: {
            label: { en: 'Lucide icon name', fr: 'Nom icône Lucide' },
            type: 'TextSelect',
            options: {
                options: [
                    { label: { en: 'Home', fr: 'Accueil' }, value: 'home' },
                    { label: { en: 'Dashboard', fr: 'Tableau de bord' }, value: 'layout-dashboard' },
                    { label: { en: 'Inbox', fr: 'Boîte de réception' }, value: 'inbox' },
                    { label: { en: 'Calendar', fr: 'Calendrier' }, value: 'calendar' },
                    { label: { en: 'Search', fr: 'Recherche' }, value: 'search' },
                    { label: { en: 'Settings', fr: 'Paramètres' }, value: 'settings' },
                    { label: { en: 'User', fr: 'Utilisateur' }, value: 'user' },
                    { label: { en: 'Users', fr: 'Utilisateurs' }, value: 'users' },
                    { label: { en: 'File', fr: 'Fichier' }, value: 'file' },
                    { label: { en: 'Folder', fr: 'Dossier' }, value: 'folder' },
                    { label: { en: 'Mail', fr: 'Mail' }, value: 'mail' },
                    { label: { en: 'Phone', fr: 'Téléphone' }, value: 'phone' },
                    { label: { en: 'Heart', fr: 'Cœur' }, value: 'heart' },
                    { label: { en: 'Star', fr: 'Étoile' }, value: 'star' },
                    { label: { en: 'Bell', fr: 'Cloche' }, value: 'bell' },
                    { label: { en: 'Help Circle', fr: 'Aide' }, value: 'help-circle' },
                    { label: { en: 'Info', fr: 'Info' }, value: 'info' },
                    { label: { en: 'Plus', fr: 'Plus' }, value: 'plus' },
                    { label: { en: 'Minus', fr: 'Moins' }, value: 'minus' },
                    { label: { en: 'Check', fr: 'Vérifier' }, value: 'check' },
                    { label: { en: 'X', fr: 'X' }, value: 'x' },
                ]
            },
            section: 'settings',
            defaultValue: 'home',
            bindable: true,
            hidden: (content) => !content.showIcon,
            responsive: true,
            states: true,
            classes: true
        },

        /* === BADGE === */
        badge: {
            label: { en: 'Badge text', fr: 'Texte badge' },
            type: 'Text',
            section: 'settings',
            defaultValue: '',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === SUBMENU === */
        hasSubmenu: {
            label: { en: 'Has submenu', fr: 'A un sous-menu' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === STYLING === */
        backgroundColor: {
            label: { en: 'Background color', fr: 'Couleur de fond' },
            type: 'Color',
            section: 'style',
            defaultValue: 'transparent',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        textColor: {
            label: { en: 'Text color', fr: 'Couleur du texte' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        hoverColor: {
            label: { en: 'Hover background', fr: 'Fond au survol' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-accent)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        hoverTextColor: {
            label: { en: 'Hover text color', fr: 'Couleur texte survol' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-accent-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        borderRadius: {
            label: { en: 'Border radius', fr: 'Rayon des bordures' },
            type: 'Length',
            section: 'style',
            defaultValue: '6px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        padding: {
            label: { en: 'Padding', fr: 'Espacement interne' },
            type: 'Length',
            section: 'style',
            defaultValue: '8px 12px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        gap: {
            label: { en: 'Gap between elements', fr: 'Espacement entre éléments' },
            type: 'Length',
            section: 'style',
            defaultValue: '8px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        fontSize: {
            label: { en: 'Font size', fr: 'Taille de police' },
            type: 'Length',
            section: 'style',
            defaultValue: '14px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        fontWeight: {
            label: { en: 'Font weight', fr: 'Graisse de police' },
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
            defaultValue: '400',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        }
    }
};