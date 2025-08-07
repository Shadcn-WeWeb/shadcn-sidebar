<template>
    <div 
        class="shadcn-sidebar-header"
        :style="headerStyle"
        ww-responsive="sidebar-header"
    >
        <!-- Logo -->
        <div v-if="content.showLogo" class="sidebar-header-logo">
            <div class="sidebar-logo-container">
                <i v-if="content.logoIcon" :data-lucide="content.logoIcon" class="sidebar-logo-icon"></i>
                <img v-else-if="content.logoImage" :src="content.logoImage" :alt="content.logoAlt" class="sidebar-logo-image" />
                <div v-else class="sidebar-logo-fallback">
                    <span>{{ content.logoFallback || 'S' }}</span>
                </div>
            </div>
        </div>

        <!-- Text Content -->
        <div class="sidebar-header-content">
            <h2 v-if="content.showTitle" class="sidebar-header-title">
                {{ wwLib.wwLang.getText(content.title) }}
            </h2>
            <p v-if="content.showSubtitle" class="sidebar-header-subtitle">
                {{ wwLib.wwLang.getText(content.subtitle) }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarHeader',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
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
        headerStyle() {
            return {
                '--header-gap': this.content.gap || '12px',
                '--header-padding': this.content.padding || '16px',
                '--logo-size': this.content.logoSize || '32px',
                '--logo-bg': this.content.logoBackground || 'var(--sidebar-primary)',
                '--logo-color': this.content.logoColor || 'var(--sidebar-primary-foreground)',
                '--logo-radius': this.content.logoRadius || '8px',
                '--title-size': this.content.titleSize || '18px',
                '--title-weight': this.content.titleWeight || '600',
                '--title-color': this.content.titleColor || 'var(--sidebar-foreground)',
                '--subtitle-size': this.content.subtitleSize || '14px',
                '--subtitle-weight': this.content.subtitleWeight || '400',
                '--subtitle-color': this.content.subtitleColor || 'var(--sidebar-foreground)',
                '--subtitle-opacity': this.content.subtitleOpacity || '0.7',
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
/* === SHADCN SIDEBAR HEADER === */
.shadcn-sidebar-header {
    display: flex;
    align-items: center;
    gap: var(--header-gap);
    padding: var(--header-padding);
    width: 100%;
    box-sizing: border-box;
}

/* Logo */
.sidebar-header-logo {
    flex-shrink: 0;
}

.sidebar-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--logo-size);
    height: var(--logo-size);
    background-color: var(--logo-bg);
    color: var(--logo-color);
    border-radius: var(--logo-radius);
    overflow: hidden;
}

.sidebar-logo-icon {
    width: calc(var(--logo-size) * 0.6);
    height: calc(var(--logo-size) * 0.6);
}

.sidebar-logo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sidebar-logo-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: calc(var(--logo-size) * 0.4);
}

/* Content */
.sidebar-header-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.sidebar-header-title {
    font-size: var(--title-size);
    font-weight: var(--title-weight);
    color: var(--title-color);
    margin: 0;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sidebar-header-subtitle {
    font-size: var(--subtitle-size);
    font-weight: var(--subtitle-weight);
    color: var(--subtitle-color);
    opacity: var(--subtitle-opacity);
    margin: 0;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Responsive */
@media (max-width: 768px) {
    .shadcn-sidebar-header {
        padding: 12px;
    }
}
</style>