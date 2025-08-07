<template>
    <!-- SidebarProvider - Structure exacte Shadcn UI -->
    <div 
        class="sidebar-container"
        :style="sidebarCSSVariables"
    >
        <!-- Mobile Overlay -->
        <div 
            v-if="isMobile"
            class="sidebar-overlay"
            :class="{active: openMobile}"
            @click="setOpenMobile(false)"
        ></div>

        <!-- Sidebar - Architecture simplifiée -->
        <div 
            class="shadcn-sidebar"
            :class="{
                collapsed: !open && !isMobile,
                mobile: isMobile,
                closed: isMobile && !openMobile
            }"
        >
            <!-- Header -->
            <div class="sidebar-header" v-if="content.showHeader">
                <div class="sidebar-logo">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <div>
                    <div class="sidebar-title">{{ content.title || 'Shadcn UI' }}</div>
                    <div class="sidebar-subtitle">{{ content.subtitle || 'Demo App' }}</div>
                </div>
            </div>

            <!-- Navigation -->
            <div class="sidebar-nav">
                <!-- Main Group -->
                <div class="nav-group">
                    <div class="nav-label" v-if="content.groupLabel">{{ content.groupLabel }}</div>
                    
                    <a 
                        v-for="(item, index) in menuItems" 
                        :key="index"
                        href="#"
                        class="nav-item"
                        :class="{ active: item.active }"
                        @click.prevent="handleItemClick(item, index)"
                    >
                        <span class="nav-icon" v-html="getIconSvg(item.icon)" v-if="item.icon"></span>
                        <span>{{ item.label }}</span>
                        <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
                    </a>
                </div>

                <!-- Secondary Group -->
                <div class="nav-group" v-if="secondaryItems.length > 0">
                    <div class="nav-label" v-if="content.secondaryGroupLabel">{{ content.secondaryGroupLabel }}</div>
                    
                    <a 
                        v-for="(item, index) in secondaryItems" 
                        :key="index"
                        href="#"
                        class="nav-item"
                        @click.prevent="handleSecondaryItemClick(item, index)"
                    >
                        <span class="nav-icon" v-html="getIconSvg(item.icon)" v-if="item.icon"></span>
                        <span>{{ item.label }}</span>
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="sidebar-footer" v-if="content.showFooter">
                <div class="user-profile">
                    <div class="user-avatar">
                        <img v-if="content.userAvatar" :src="content.userAvatar" :alt="content.userName" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
                        <span v-else>{{ getUserInitials() }}</span>
                    </div>
                    <div class="user-info">
                        <div class="user-name">{{ content.userName || 'John Doe' }}</div>
                        <div class="user-email">{{ content.userEmail || 'john@example.com' }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div 
            class="sidebar-main"
            :class="{
                collapsed: !open && !isMobile,
                mobile: isMobile
            }"
        >
            <!-- Header avec Trigger -->
            <header class="main-header" v-if="content.showTrigger">
                <!-- SidebarTrigger -->
                <button 
                    class="sidebar-trigger"
                    @click="toggleSidebar"
                >
                    <!-- Menu icon -->
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="7" x="3" y="3" rx="1"/>
                        <rect width="9" height="7" x="3" y="14" rx="1"/>
                    </svg>
                    <span class="sr-only">Toggle Sidebar</span>
                </button>
                <h1 class="main-title">{{ content.mainTitle || 'Dashboard' }}</h1>
            </header>

            <!-- Content Slot -->
            <div class="main-content" v-if="!content.hideContent">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ShadcnSidebar',
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    data() {
        return {
            // Constants - exact comme le code officiel
            SIDEBAR_WIDTH: "16rem",
            SIDEBAR_WIDTH_MOBILE: "18rem", 
            SIDEBAR_WIDTH_ICON: "3rem",
            
            // Hook useSidebar state - exact
            open: this.content.defaultOpen !== false,
            openMobile: false,
            isMobile: false,
        };
    },
    mounted() {
        // Détection mobile
        this.isMobile = window.innerWidth < 768;
        window.addEventListener('resize', this.handleResize);
        
        // Keyboard shortcut - exact comme l'original
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
        // useSidebar computed - exact
        collapsibleType() {
            return this.content.collapsible || 'offcanvas';
        },
        
        state() {
            return this.open ? 'expanded' : 'collapsed';
        },
        
        sidebarCSSVariables() {
            return {
                '--sidebar-width': this.content.sidebarWidth || this.SIDEBAR_WIDTH,
                '--sidebar-width-icon': this.SIDEBAR_WIDTH_ICON,
                '--sidebar-width-mobile': this.SIDEBAR_WIDTH_MOBILE,
                // Shadcn UI CSS Variables exactes - utilisation des nouvelles variables
                '--sidebar-background': this.content.sidebarBg || '0 0% 98%',
                '--sidebar-foreground': this.content.sidebarForeground || '240 5.3% 26.1%',
                '--sidebar-primary': this.content.sidebarPrimary || '240 5.9% 10%',
                '--sidebar-primary-foreground': this.content.sidebarPrimaryForeground || '0 0% 98%',
                '--sidebar-accent': this.content.sidebarAccent || '240 4.8% 95.9%',
                '--sidebar-accent-foreground': this.content.sidebarAccentForeground || '240 5.9% 10%',
                '--sidebar-border': this.content.sidebarBorder || '220 13% 91%',
                '--sidebar-ring': this.content.sidebarRing || '217.2 91.2% 59.8%'
            };
        },

        menuItems() {
            return this.content.menuItems || [
                { 
                    icon: 'home', 
                    label: 'Home', 
                    active: true 
                },
                { 
                    icon: 'inbox', 
                    label: 'Inbox', 
                    badge: '3' 
                },
                { 
                    icon: 'calendar', 
                    label: 'Calendar' 
                },
                { 
                    icon: 'search', 
                    label: 'Search' 
                },
                { 
                    icon: 'settings', 
                    label: 'Settings',
                    subItems: [
                        { label: 'General', active: false },
                        { label: 'Team', active: false },
                        { label: 'Billing', active: false }
                    ]
                }
            ];
        },

        secondaryItems() {
            return this.content.secondaryItems || [
                { icon: 'help-circle', label: 'Support' },
                { icon: 'settings', label: 'Settings' }
            ];
        },

    },
    methods: {
        // useSidebar methods - exact comme l'original
        toggleSidebar() {
            if (this.isMobile) {
                this.setOpenMobile(!this.openMobile);
            } else {
                this.setOpen(!this.open);
            }
        },
        
        setOpen(value) {
            this.open = value;
            // Cookie storage comme l'original
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
                    collapsible: this.collapsibleType
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
            // Keyboard shortcut - EXACT comme l'original (Cmd+B / Ctrl+B)
            if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                this.toggleSidebar();
            }
        },

        handleItemClick(item, index, parentIndex = null) {
            if (item.disabled) return;
            
            // Toggle sub-items if they exist
            if (item.subItems) {
                const targetItem = parentIndex !== null ? this.menuItems[parentIndex] : item;
                targetItem.expanded = !targetItem.expanded;
            }
            
            this.$emit("trigger-event", {
                name: "item-click",
                event: { 
                    item,
                    index,
                    parentIndex,
                    label: item.label,
                    hasSubItems: !!item.subItems
                }
            });
        },

        handleSecondaryItemClick(item, index) {
            if (item.disabled) return;
            
            this.$emit("trigger-event", {
                name: "secondary-item-click",
                event: { 
                    item,
                    index,
                    label: item.label
                }
            });
        },

        getUserInitials() {
            if (this.content.userInitials) return this.content.userInitials;
            
            const name = this.content.userName || 'User';
            return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        },

        getIconSvg(iconName) {
            const icons = {
                home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',
                inbox: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>',
                calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
                search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
                settings: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
                'help-circle': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><point cx="12" cy="17" r=".02"/></svg>'
            };
            
            return icons[iconName] || icons.home;
        }
    }
};
</script>

<style scoped>
/* === SIDEBAR SHADCN UI - ARCHITECTURE CLAUDE.md === */

/* Conteneur principal - WeWeb écrase ce niveau */
.sidebar-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: hsl(var(--sidebar-background, 0 0% 98%));
    color: hsl(var(--sidebar-foreground, 240 5.3% 26.1%));
}

/* Layout de base - SIMPLE */
.shadcn-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 40;
    width: var(--sidebar-width, 16rem);
    background-color: hsl(var(--sidebar-background, 0 0% 98%));
    border-right: 1px solid hsl(var(--sidebar-border, 220 13% 91%));
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.shadcn-sidebar.collapsed {
    transform: translateX(-100%);
}

.shadcn-sidebar.mobile {
    z-index: 50;
    width: var(--sidebar-width-mobile, 18rem);
}

.shadcn-sidebar.mobile.closed {
    transform: translateX(-100%);
}

/* Contenu principal */
.sidebar-main {
    margin-left: var(--sidebar-width, 16rem);
    min-height: 100vh;
    flex: 1;
    transition: margin-left 0.3s ease;
}

.sidebar-main.collapsed {
    margin-left: 0;
}

.sidebar-main.mobile {
    margin-left: 0;
}

/* Overlay mobile */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Header sidebar */
.sidebar-header {
    padding: 1rem;
    border-bottom: 1px solid hsl(var(--sidebar-border, 220 13% 91%));
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.sidebar-logo {
    width: 2rem;
    height: 2rem;
    background-color: hsl(var(--sidebar-primary, 240 5.9% 10%));
    color: hsl(var(--sidebar-primary-foreground, 0 0% 98%));
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar-title {
    font-weight: 600;
    font-size: 0.875rem;
}

.sidebar-subtitle {
    font-size: 0.75rem;
    color: hsl(var(--sidebar-foreground, 240 5.3% 26.1%) / 0.6);
}

/* Navigation */
.sidebar-nav {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.nav-group {
    margin-bottom: 1.5rem;
}

.nav-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: hsl(var(--sidebar-foreground, 240 5.3% 26.1%) / 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0 0.75rem;
    margin-bottom: 0.25rem;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: hsl(var(--sidebar-foreground, 240 5.3% 26.1%));
    text-decoration: none;
    transition: all 0.15s ease;
    cursor: pointer;
    margin-bottom: 0.25rem;
}

.nav-item:hover {
    background-color: hsl(var(--sidebar-accent, 240 4.8% 95.9%));
    color: hsl(var(--sidebar-accent-foreground, 240 5.9% 10%));
}

.nav-item.active {
    background-color: hsl(var(--sidebar-primary, 240 5.9% 10%));
    color: hsl(var(--sidebar-primary-foreground, 0 0% 98%));
}

.nav-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
}

.nav-badge {
    margin-left: auto;
    background-color: hsl(var(--sidebar-primary, 240 5.9% 10%));
    color: hsl(var(--sidebar-primary-foreground, 0 0% 98%));
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
}

/* Footer */
.sidebar-footer {
    padding: 1rem;
    border-top: 1px solid hsl(var(--sidebar-border, 220 13% 91%));
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
}

.user-avatar {
    width: 2rem;
    height: 2rem;
    background-color: hsl(var(--sidebar-primary, 240 5.9% 10%));
    color: hsl(var(--sidebar-primary-foreground, 0 0% 98%));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
}

.user-info {
    flex: 1;
    min-width: 0;
}

.user-name {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.user-email {
    font-size: 0.75rem;
    color: hsl(var(--sidebar-foreground, 240 5.3% 26.1%) / 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Trigger button */
.sidebar-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 0.375rem;
    border: 1px solid hsl(var(--sidebar-border, 220 13% 91%));
    background-color: hsl(0 0% 100%);
    color: hsl(222.2 84% 4.9%);
    cursor: pointer;
    transition: all 0.15s ease;
}

.sidebar-trigger:hover {
    background-color: hsl(210 40% 96%);
}

/* Header principal */
.main-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    padding: 0 1rem;
    border-bottom: 1px solid hsl(var(--sidebar-border, 220 13% 91%));
    background-color: white;
}

.main-title {
    font-size: 1.125rem;
    font-weight: 600;
}

/* Contenu principal */
.main-content {
    flex: 1;
    padding: 1rem;
    overflow: auto;
}

/* Responsive */
@media (max-width: 768px) {
    .shadcn-sidebar {
        transform: translateX(-100%);
    }
    
    .sidebar-main {
        margin-left: 0;
    }
    
    .main-header {
        display: flex;
    }
}

/* Screen reader */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>

<!-- Import globals.css pour variables CSS Shadcn -->
<style>
@import './globals.css';
</style>

