<template>
    <!-- SidebarProvider - Architecture WeWeb Section -->
    <div 
        class="sidebar-section"
        :class="{
            'sidebar-collapsed': !open && !isMobile,
            'sidebar-mobile': isMobile,
            'sidebar-right': content.side === 'right'
        }"
        :style="sidebarCSSVariables"
    >
        <!-- Mobile Overlay -->
        <div 
            v-if="isMobile && openMobile"
            class="sidebar-overlay"
            @click="setOpenMobile(false)"
        ></div>

        <!-- Sidebar Container -->
        <div 
            class="sidebar-container"
            :class="{
                'sidebar-hidden': !open && !isMobile,
                'sidebar-mobile-hidden': isMobile && !openMobile
            }"
        >
            <!-- Header Dropzone -->
            <div class="sidebar-header-zone" v-if="content.showHeader">
                <wwLayout
                    class="sidebar-header-layout"
                    path="sidebarHeader"
                    direction="column"
                    :style="headerStyle"
                />
            </div>

            <!-- Navigation Dropzone -->
            <div class="sidebar-nav-zone">
                <wwLayout
                    class="sidebar-nav-layout"
                    path="sidebarNav"
                    direction="column"
                    :style="navStyle"
                />
            </div>

            <!-- Footer Dropzone -->
            <div class="sidebar-footer-zone" v-if="content.showFooter">
                <wwLayout
                    class="sidebar-footer-layout"
                    path="sidebarFooter"
                    direction="column"
                    :style="footerStyle"
                />
            </div>
        </div>

        <!-- Main Content Area -->
        <div 
            class="sidebar-main-area"
            :class="{
                'main-collapsed': !open && !isMobile,
                'main-mobile': isMobile
            }"
        >
            <!-- Header avec Trigger -->
            <div class="main-header-zone" v-if="content.showTrigger">
                <button 
                    class="sidebar-trigger"
                    @click="toggleSidebar"
                    :style="triggerStyle"
                >
                    <!-- Menu icon -->
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="7" x="3" y="3" rx="1"/>
                        <rect width="9" height="7" x="3" y="14" rx="1"/>
                    </svg>
                </button>
                
                <!-- Header Content Dropzone -->
                <wwLayout
                    class="main-header-layout"
                    path="mainHeader"
                    direction="row"
                    :style="mainHeaderStyle"
                />
            </div>

            <!-- Main Content Dropzone -->
            <div class="main-content-zone" v-if="!content.hideContent">
                <wwLayout
                    class="main-content-layout"
                    path="mainContent"
                    direction="column"
                    :style="mainContentStyle"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShadcnSidebarSection',
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    data() {
        return {
            // Constants
            SIDEBAR_WIDTH: "16rem",
            SIDEBAR_WIDTH_MOBILE: "18rem", 
            SIDEBAR_WIDTH_ICON: "3rem",
            
            // State
            open: this.content.defaultOpen !== false,
            openMobile: false,
            isMobile: false,
        };
    },
    mounted() {
        // Détection mobile
        this.checkMobile();
        window.addEventListener('resize', this.handleResize);
        
        // Keyboard shortcut
        if (this.content.keyboardShortcut !== false) {
            document.addEventListener('keydown', this.handleKeyboardShortcut);
        }
    },
    beforeUnmount() {
        if (this.content.keyboardShortcut !== false) {
            document.removeEventListener('keydown', this.handleKeyboardShortcut);
        }
        window.removeEventListener('resize', this.handleResize);
    },
    computed: {
        state() {
            return this.open ? 'expanded' : 'collapsed';
        },
        
        sidebarCSSVariables() {
            return {
                '--sidebar-width': this.content.sidebarWidth || this.SIDEBAR_WIDTH,
                '--sidebar-width-icon': this.SIDEBAR_WIDTH_ICON,
                '--sidebar-width-mobile': this.SIDEBAR_WIDTH_MOBILE,
                '--sidebar-background': `hsl(${this.content.sidebarBg || '0 0% 98%'})`,
                '--sidebar-foreground': `hsl(${this.content.sidebarForeground || '240 5.3% 26.1%'})`,
                '--sidebar-border': `hsl(${this.content.sidebarBorder || '220 13% 91%'})`,
                '--sidebar-primary': `hsl(${this.content.sidebarPrimary || '240 5.9% 10%'})`,
                '--sidebar-primary-foreground': `hsl(${this.content.sidebarPrimaryForeground || '0 0% 98%'})`,
                '--sidebar-accent': `hsl(${this.content.sidebarAccent || '240 4.8% 95.9%'})`,
                '--sidebar-accent-foreground': `hsl(${this.content.sidebarAccentForeground || '240 5.9% 10%'})`,
            };
        },

        headerStyle() {
            return {
                borderBottom: `1px solid hsl(${this.content.sidebarBorder || '220 13% 91%'})`,
                padding: this.content.headerPadding || '1rem',
            };
        },

        navStyle() {
            return {
                flex: '1',
                padding: this.content.navPadding || '1rem',
                overflowY: 'auto',
            };
        },

        footerStyle() {
            return {
                borderTop: `1px solid hsl(${this.content.sidebarBorder || '220 13% 91%'})`,
                padding: this.content.footerPadding || '1rem',
            };
        },

        triggerStyle() {
            return {
                border: `1px solid hsl(${this.content.sidebarBorder || '220 13% 91%'})`,
                backgroundColor: this.content.triggerBackground || 'white',
            };
        },

        mainHeaderStyle() {
            return {
                flex: '1',
                alignItems: 'center',
            };
        },

        mainContentStyle() {
            return {
                flex: '1',
                padding: this.content.contentPadding || '1rem',
                overflow: 'auto',
            };
        },
    },
    methods: {
        toggleSidebar() {
            if (this.isMobile) {
                this.setOpenMobile(!this.openMobile);
            } else {
                this.setOpen(!this.open);
            }
        },
        
        setOpen(value) {
            this.open = value;
            // Cookie storage
            if (typeof document !== 'undefined') {
                document.cookie = `sidebar_state=${value}; path=/; max-age=${60 * 60 * 24 * 7}`;
            }
            this.emitToggleEvent();
        },
        
        setOpenMobile(value) {
            this.openMobile = value;
            this.emitToggleEvent();
        },
        
        emitToggleEvent() {
            const currentOpen = this.isMobile ? this.openMobile : this.open;
            
            this.$emit("trigger-event", {
                name: "toggle",
                event: { 
                    open: currentOpen,
                    openMobile: this.openMobile,
                    state: this.state,
                    isMobile: this.isMobile,
                }
            });
        },
        
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
        },
        
        handleResize() {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth < 768;
            
            if (wasMobile !== this.isMobile && !this.isMobile) {
                this.openMobile = false;
            }
        },

        handleKeyboardShortcut(event) {
            // Keyboard shortcut (Cmd+B / Ctrl+B)
            if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                this.toggleSidebar();
            }
        },
    }
};
</script>

<style scoped>
/* === SIDEBAR SECTION - ARCHITECTURE WEWEB === */

/* Conteneur principal de section */
.sidebar-section {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: var(--sidebar-background);
    color: var(--sidebar-foreground);
    position: relative;
}

/* Sidebar Container */
.sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 40;
    width: var(--sidebar-width);
    background-color: var(--sidebar-background);
    border-right: 1px solid var(--sidebar-border);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.sidebar-section.sidebar-right .sidebar-container {
    left: auto;
    right: 0;
    border-right: none;
    border-left: 1px solid var(--sidebar-border);
}

.sidebar-hidden {
    transform: translateX(-100%);
}

.sidebar-section.sidebar-right .sidebar-hidden {
    transform: translateX(100%);
}

.sidebar-mobile-hidden {
    transform: translateX(-100%);
}

.sidebar-section.sidebar-right .sidebar-mobile-hidden {
    transform: translateX(100%);
}

.sidebar-mobile .sidebar-container {
    z-index: 50;
    width: var(--sidebar-width-mobile);
}

/* Zones de dropzone */
.sidebar-header-zone,
.sidebar-nav-zone,
.sidebar-footer-zone {
    min-height: 60px;
}

.sidebar-header-layout,
.sidebar-nav-layout,
.sidebar-footer-layout {
    width: 100%;
    min-height: inherit;
}

/* Main Content Area */
.sidebar-main-area {
    margin-left: var(--sidebar-width);
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease;
}

.sidebar-section.sidebar-right .sidebar-main-area {
    margin-left: 0;
    margin-right: var(--sidebar-width);
    transition: margin-right 0.3s ease;
}

.main-collapsed {
    margin-left: 0;
}

.sidebar-section.sidebar-right .main-collapsed {
    margin-right: 0;
}

.main-mobile {
    margin-left: 0;
    margin-right: 0;
}

/* Header zone */
.main-header-zone {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    padding: 0 1rem;
    border-bottom: 1px solid var(--sidebar-border);
    background-color: white;
    flex-shrink: 0;
}

.main-header-layout {
    flex: 1;
    min-height: 2rem;
}

/* Content zone */
.main-content-zone {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.main-content-layout {
    flex: 1;
    width: 100%;
    overflow: auto;
}

/* Overlay mobile */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
}

/* Trigger button */
.sidebar-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 0.375rem;
    background-color: white;
    color: hsl(222.2 84% 4.9%);
    cursor: pointer;
    transition: all 0.15s ease;
    flex-shrink: 0;
}

.sidebar-trigger:hover {
    background-color: hsl(210 40% 96%);
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar-container {
        transform: translateX(-100%);
    }
    
    .sidebar-section.sidebar-right .sidebar-container {
        transform: translateX(100%);
    }
    
    .sidebar-main-area {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>

<!-- Variables CSS globales pour les éléments enfants -->
<style>
:root {
  --sidebar-background: hsl(0 0% 98%);
  --sidebar-foreground: hsl(240 5.3% 26.1%);
  --sidebar-primary: hsl(240 5.9% 10%);
  --sidebar-primary-foreground: hsl(0 0% 98%);
  --sidebar-accent: hsl(240 4.8% 95.9%);
  --sidebar-accent-foreground: hsl(240 5.9% 10%);
  --sidebar-border: hsl(220 13% 91%);
  --sidebar-width: 16rem;
  --sidebar-width-icon: 3rem;
  --sidebar-width-mobile: 18rem;
}
</style>