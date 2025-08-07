<template>
    <div 
        class="shadcn-sidebar-group"
        :class="{
            'sidebar-group-collapsed': content.collapsed,
            'sidebar-group-no-padding': !content.showPadding
        }"
        :style="groupStyle"
        ww-responsive="sidebar-group"
    >
        <!-- Group Header -->
        <div v-if="content.showLabel" class="sidebar-group-header" @click="toggleCollapsed">
            <div class="sidebar-group-label-container">
                <!-- Label -->
                <span class="sidebar-group-label">
                    {{ wwLib.wwLang.getText(content.label) }}
                </span>
                
                <!-- Collapse Icon -->
                <div v-if="content.collapsible" class="sidebar-group-toggle">
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        :class="{ 'rotated': !content.collapsed }"
                    >
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Group Content - Dropzone for sidebar items -->
        <div 
            v-if="!content.collapsed || !content.collapsible"
            class="sidebar-group-content"
            :class="{ 'with-header': content.showLabel }"
        >
            <wwLayout
                class="sidebar-group-layout"
                path="groupItems"
                direction="column"
                :style="contentStyle"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarGroup',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event", "update:content"],
    computed: {
        groupStyle() {
            return {
                '--group-margin-bottom': this.content.marginBottom || '16px',
                '--label-color': this.content.labelColor || 'var(--sidebar-foreground)',
                '--label-opacity': this.content.labelOpacity || '0.6',
                '--label-size': this.content.labelSize || '12px',
                '--label-weight': this.content.labelWeight || '500',
                '--label-spacing': this.content.labelSpacing || '0.05em',
                '--label-padding': this.content.labelPadding || '0 12px 8px 12px',
                '--content-gap': this.content.contentGap || '2px',
                '--content-padding': this.content.contentPadding || '0',
            };
        },

        contentStyle() {
            return {
                gap: 'var(--content-gap)',
                padding: 'var(--content-padding)',
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
        toggleCollapsed() {
            if (!this.content.collapsible) return;
            
            this.$emit("update:content", {
                collapsed: !this.content.collapsed
            });

            this.$emit("trigger-event", {
                name: "toggle",
                event: {
                    collapsed: !this.content.collapsed,
                    label: wwLib.wwLang.getText(this.content.label)
                }
            });
        }
    }
};
</script>

<style scoped>
/* === SHADCN SIDEBAR GROUP === */
.shadcn-sidebar-group {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--group-margin-bottom);
}

.sidebar-group-no-padding {
    margin-bottom: 0;
}

/* Header */
.sidebar-group-header {
    display: flex;
    align-items: center;
    padding: var(--label-padding);
    cursor: pointer;
    user-select: none;
}

.sidebar-group-header:not(.collapsible) {
    cursor: default;
}

.sidebar-group-label-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.sidebar-group-label {
    font-size: var(--label-size);
    font-weight: var(--label-weight);
    color: var(--label-color);
    opacity: var(--label-opacity);
    text-transform: uppercase;
    letter-spacing: var(--label-spacing);
    flex: 1;
}

.sidebar-group-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    opacity: 0.6;
    transition: transform 0.2s ease;
}

.sidebar-group-toggle svg {
    transition: transform 0.2s ease;
}

.sidebar-group-toggle svg.rotated {
    transform: rotate(90deg);
}

/* Content */
.sidebar-group-content {
    display: flex;
    flex-direction: column;
}

.sidebar-group-content.with-header {
    /* Optionnel: espacement supplémentaire si il y a un header */
}

.sidebar-group-layout {
    width: 100%;
    min-height: 40px;
}

/* Collapsed state */
.sidebar-group-collapsed .sidebar-group-content {
    display: none;
}

/* Hover effects */
.sidebar-group-header:hover .sidebar-group-toggle {
    opacity: 1;
}

/* Animation for smooth collapse */
.sidebar-group-content {
    transition: all 0.3s ease;
    overflow: hidden;
}

.sidebar-group-collapsed .sidebar-group-content {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
}
</style>