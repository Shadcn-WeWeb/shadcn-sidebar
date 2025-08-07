<template>
    <component
        :is="linkTag"
        v-bind="properties"
        class="shadcn-sidebar-button"
        :class="{
            'sidebar-button-active': content.active,
            'sidebar-button-disabled': content.disabled,
            '-link': hasLink && !isEditing
        }"
        :style="buttonStyle"
        ww-responsive="sidebar-button"
        @click="handleClick"
    >
        <!-- Icon -->
        <div v-if="content.showIcon && content.icon" class="sidebar-button-icon">
            <i :data-lucide="content.icon" class="sidebar-icon"></i>
        </div>

        <!-- Text Content -->
        <div class="sidebar-button-content">
            <span class="sidebar-button-text">
                {{ wwLib.wwLang.getText(content.text) }}
            </span>
        </div>

        <!-- Badge -->
        <div v-if="content.badge" class="sidebar-button-badge">
            {{ content.badge }}
        </div>

        <!-- Chevron for submenu -->
        <div v-if="content.hasSubmenu" class="sidebar-button-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
            </svg>
        </div>
    </component>
</template>

<script>
export default {
    name: 'SidebarButton',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    setup() {
        const { hasLink, linkTag, properties } = wwLib.wwElement.useLink();
        return {
            hasLink,
            linkTag,
            properties,
        };
    },
    mounted() {
        this.loadLucideIcons();
    },
    updated() {
        this.$nextTick(() => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    },
    computed: {
        buttonStyle() {
            const baseStyle = {
                '--button-bg': this.content.backgroundColor || (this.content.active ? 'var(--sidebar-primary)' : 'transparent'),
                '--button-color': this.content.textColor || (this.content.active ? 'var(--sidebar-primary-foreground)' : 'var(--sidebar-foreground)'),
                '--button-hover-bg': this.content.hoverColor || 'var(--sidebar-accent)',
                '--button-hover-color': this.content.hoverTextColor || 'var(--sidebar-accent-foreground)',
                '--button-border-radius': this.content.borderRadius || '6px',
                '--button-padding': this.content.padding || '8px 12px',
                '--button-gap': this.content.gap || '8px',
                '--button-font-size': this.content.fontSize || '14px',
                '--button-font-weight': this.content.fontWeight || (this.content.active ? '500' : '400'),
            };

            return baseStyle;
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
        handleClick(event) {
            if (this.content.disabled) return;

            this.$emit("trigger-event", {
                name: "click",
                event: {
                    domEvent: event,
                    text: wwLib.wwLang.getText(this.content.text),
                    active: this.content.active,
                    badge: this.content.badge,
                    icon: this.content.icon,
                    hasSubmenu: this.content.hasSubmenu
                }
            });
        },

        async loadLucideIcons() {
            if (window.lucide) return;
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
                script.onload = () => {
                    if (window.lucide) {
                        window.lucide.createIcons();
                    }
                    resolve();
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
    }
};
</script>

<style scoped>
/* === SHADCN SIDEBAR BUTTON === */
.shadcn-sidebar-button {
    display: flex;
    align-items: center;
    gap: var(--button-gap);
    width: 100%;
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
    text-decoration: none;
    position: relative;
    min-height: 36px;
    box-sizing: border-box;
}

.shadcn-sidebar-button:hover:not(.sidebar-button-disabled) {
    background-color: var(--button-hover-bg);
    color: var(--button-hover-color);
}

.sidebar-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.sidebar-button-disabled:hover {
    background-color: var(--button-bg) !important;
    color: var(--button-color) !important;
}

.sidebar-button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.sidebar-icon {
    width: 16px;
    height: 16px;
}

.sidebar-button-content {
    flex: 1;
    text-align: left;
    min-width: 0;
}

.sidebar-button-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sidebar-button-badge {
    margin-left: auto;
    background-color: var(--sidebar-primary);
    color: var(--sidebar-primary-foreground);
    font-size: 11px;
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 10px;
    min-width: 16px;
    text-align: center;
    line-height: 1.2;
    flex-shrink: 0;
}

.sidebar-button-chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    opacity: 0.6;
    transition: transform 0.15s ease;
}

.sidebar-button-active .sidebar-button-chevron {
    transform: rotate(90deg);
}

/* Link styling */
.-link {
    cursor: pointer;
}

/* Responsive behaviors */
@media (max-width: 768px) {
    .shadcn-sidebar-button {
        min-height: 44px;
        padding: 12px;
    }
}
</style>