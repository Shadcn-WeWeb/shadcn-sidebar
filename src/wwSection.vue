<template>
    <div 
        class="shadcn-sidebar-section"
        :class="sectionClasses"
        :style="sectionStyle"
    >
        <wwLayout
            class="sidebar-layout"
            path="wwObjects"
            direction="row"
        />
    </div>
</template>

<script>
export default {
    name: 'ShadcnSidebarSection',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    computed: {
        sectionClasses() {
            return {
                'sidebar-collapsed': !this.content.defaultOpen,
                'sidebar-right': this.content.side === 'right',
                'sidebar-mobile': false // TODO: mobile detection
            };
        },
        
        sectionStyle() {
            return {
                '--sidebar-width': this.content.sidebarWidth || '16rem',
                '--sidebar-bg': `hsl(${this.content.sidebarBg || '0 0% 98%'})`,
                '--sidebar-foreground': `hsl(${this.content.sidebarForeground || '240 5.3% 26.1%'})`,
                '--sidebar-border': `hsl(${this.content.sidebarBorder || '220 13% 91%'})`,
                '--sidebar-primary': `hsl(${this.content.sidebarPrimary || '240 5.9% 10%'})`,
                '--sidebar-primary-foreground': `hsl(${this.content.sidebarPrimaryForeground || '0 0% 98%'})`,
                '--sidebar-accent': `hsl(${this.content.sidebarAccent || '240 4.8% 95.9%'})`,
                '--sidebar-accent-foreground': `hsl(${this.content.sidebarAccentForeground || '240 5.9% 10%'})`,
                '--trigger-background': this.content.triggerBackground || 'white'
            };
        },

        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
        // Section methods can be added here if needed
    }
};
</script>

<style scoped>
/* Section de base */
.shadcn-sidebar-section {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background: var(--sidebar-bg);
    color: var(--sidebar-foreground);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    position: relative;
}

.sidebar-layout {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
}

/* States */
.sidebar-collapsed {
    /* Styles pour état collapsed */
}

.sidebar-right {
    /* Styles pour sidebar à droite */
}

.sidebar-mobile {
    /* Styles pour mobile */
}

/* Responsive */
@media (max-width: 768px) {
    .shadcn-sidebar-section {
        flex-direction: column;
    }
}
</style>