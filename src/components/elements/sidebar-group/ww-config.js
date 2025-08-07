export default {
    editor: {
        label: {
            en: 'Sidebar Group',
            fr: 'Groupe Sidebar'
        },
        icon: 'layers',
        customSettingsPropertiesOrder: [
            'label',
            'showLabel',
            'collapsible',
            'collapsed',
            'showPadding',
            'groupItems'
        ],
        customStylePropertiesOrder: [
            'marginBottom',
            'labelColor',
            'labelOpacity',
            'labelSize',
            'labelWeight',
            'labelSpacing',
            'labelPadding',
            'contentGap',
            'contentPadding'
        ]
    },
    triggerEvents: [
        {
            name: 'toggle',
            label: { en: 'On toggle', fr: 'Lors du basculement' },
            event: {
                collapsed: false,
                label: ''
            },
            default: true
        }
    ],
    properties: {
        /* === CONTENT === */
        label: {
            label: { en: 'Group label', fr: 'Label du groupe' },
            type: 'Text',
            section: 'settings',
            defaultValue: { en: 'Group', fr: 'Groupe' },
            bindable: true,
            multiLang: true,
            responsive: true,
            states: true,
            classes: true
        },

        showLabel: {
            label: { en: 'Show label', fr: 'Afficher le label' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        collapsible: {
            label: { en: 'Collapsible', fr: 'Repliable' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        collapsed: {
            label: { en: 'Collapsed by default', fr: 'Replié par défaut' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            hidden: (content) => !content.collapsible,
            responsive: true,
            states: true,
            classes: true
        },

        showPadding: {
            label: { en: 'Show spacing', fr: 'Afficher espacement' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: true,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        /* === DROPZONE === */
        groupItems: {
            label: { en: 'Group items', fr: 'Éléments du groupe' },
            type: 'Repeat',
            section: 'settings',
            defaultValue: [
                {
                    isWwObject: true,
                    type: "sidebar-button",
                    content: {
                        text: { en: "Menu Item", fr: "Élément de menu" },
                        active: false,
                        showIcon: true,
                        icon: "home"
                    }
                }
            ],
            bindable: 'repeatable'
        },

        /* === STYLING === */
        marginBottom: {
            label: { en: 'Margin bottom', fr: 'Marge inférieure' },
            type: 'Length',
            section: 'style',
            defaultValue: '16px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelColor: {
            label: { en: 'Label color', fr: 'Couleur du label' },
            type: 'Color',
            section: 'style',
            defaultValue: 'var(--sidebar-foreground)',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelOpacity: {
            label: { en: 'Label opacity', fr: 'Opacité du label' },
            type: 'Number',
            options: { min: 0, max: 1, step: 0.1 },
            section: 'style',
            defaultValue: 0.6,
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelSize: {
            label: { en: 'Label font size', fr: 'Taille police label' },
            type: 'Length',
            section: 'style',
            defaultValue: '12px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelWeight: {
            label: { en: 'Label font weight', fr: 'Graisse police label' },
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
            defaultValue: '500',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelSpacing: {
            label: { en: 'Label letter spacing', fr: 'Espacement lettres label' },
            type: 'Length',
            section: 'style',
            defaultValue: '0.05em',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        labelPadding: {
            label: { en: 'Label padding', fr: 'Espacement label' },
            type: 'Length',
            section: 'style',
            defaultValue: '0 12px 8px 12px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        contentGap: {
            label: { en: 'Content gap', fr: 'Espacement contenu' },
            type: 'Length',
            section: 'style',
            defaultValue: '2px',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        },

        contentPadding: {
            label: { en: 'Content padding', fr: 'Espacement interne contenu' },
            type: 'Length',
            section: 'style',
            defaultValue: '0',
            bindable: true,
            responsive: true,
            states: true,
            classes: true
        }
    }
};