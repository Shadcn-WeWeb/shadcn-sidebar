export default {
    options: {
        displayAllowedValues: ['flex', 'block'],
    },
    inherit: [{ type: 'ww-layout' }, { type: 'ww-background-video' }],
    editor: {
        label: {
            en: 'Sidebar Section',
            fr: 'Section Sidebar'
        },
        icon: 'menu'
    },
    properties: {
        wwObjects: {
            hidden: true,
            defaultValue: [],
        },
    }
};