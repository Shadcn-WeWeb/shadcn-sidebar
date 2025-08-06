<template>
    <!-- SidebarProvider - Structure exacte Shadcn UI -->
    <div 
        class="group/sidebar-wrapper flex min-h-svh w-full"
        :class="{
            'has-[[data-variant=inset]]:bg-sidebar': (content.variant || 'sidebar') === 'inset'
        }"
        :style="sidebarCSSVariables"
    >
        <!-- Mobile Sheet - exact comme Shadcn UI -->
        <template v-if="isMobile">
            <!-- Overlay -->
            <div 
                class="sheet-overlay"
                :class="{active: openMobile}"
                @click="setOpenMobile(false)"
            ></div>

            <!-- Sheet Content -->
            <div 
                class="sheet-content"
                :class="{active: openMobile}"
                :data-side="content.side || 'left'"
                data-sidebar="sidebar"
                data-mobile="true"
                :style="{'--sidebar-width': SIDEBAR_WIDTH_MOBILE}"
            >
                <div class="sr-only">
                    <div>Sidebar</div>
                    <div>Displays the mobile sidebar.</div>
                </div>
                <div class="flex h-full w-full flex-col">
                    <!-- Contenu sidebar pour mobile -->
                    <div class="flex h-full w-full flex-col bg-sidebar">
                        <sidebar-content-component :menu-items="menuItems" :secondary-items="secondaryItems" :content="content" @item-click="handleItemClick" @secondary-item-click="handleSecondaryItemClick"></sidebar-content-component>
                    </div>
                </div>
            </div>
        </template>

        <!-- Desktop Sidebar - Structure fixe exacte -->
        <div 
            v-else
            class="group peer hidden text-sidebar-foreground md:block"
            :data-state="state"
            :data-collapsible="state === 'collapsed' ? collapsibleType : ''"
            :data-variant="content.variant || 'sidebar'"
            :data-side="content.side || 'left'"
        >
            <!-- Gap handler - exact comme le code original -->
            <div 
                class="relative bg-transparent transition-width duration-200 ease-linear"
                :class="[
                    'w-[--sidebar-width]',
                    'group-data-[collapsible=offcanvas]:w-0',
                    'group-data-[side=right]:rotate-180',
                    ((content.variant || 'sidebar') === 'floating' || (content.variant || 'sidebar') === 'inset') 
                        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
                ]"
            ></div>

            <!-- Fixed sidebar container -->
            <div 
                class="fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex"
                :class="[
                    (content.side || 'left') === 'left' 
                        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                    ((content.variant || 'sidebar') === 'floating' || (content.variant || 'sidebar') === 'inset')
                        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l border-sidebar-border'
                ]"
            >
                <div 
                    data-sidebar="sidebar"
                    class="flex h-full w-full flex-col bg-sidebar"
                    :class="{
                        'rounded-lg border border-sidebar-border shadow': (content.variant || 'sidebar') === 'floating'
                    }"
                >
                    <sidebar-content-component :menu-items="menuItems" :secondary-items="secondaryItems" :content="content" @item-click="handleItemClick" @secondary-item-click="handleSecondaryItemClick"></sidebar-content-component>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <main class="flex flex-1 flex-col overflow-hidden">
            <!-- Header avec Trigger -->
            <header class="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border px-4" v-if="content.showTrigger">
                <!-- SidebarTrigger - exact comme le code -->
                <button 
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 h-7 w-7"
                    @click="toggleSidebar"
                    data-sidebar="trigger"
                >
                    <!-- PanelLeft icon -->
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="7" x="3" y="3" rx="1"/>
                        <rect width="9" height="7" x="3" y="14" rx="1"/>
                    </svg>
                    <span class="sr-only">Toggle Sidebar</span>
                </button>
                <h1 class="text-lg font-semibold">{{ content.mainTitle || 'Dashboard' }}</h1>
            </header>

            <!-- Content Slot -->
            <div class="flex-1 p-4" v-if="!content.hideContent">
                <slot></slot>
            </div>
        </main>
    </div>
</template>
</template>

<script>
// Sidebar Content Component - Séparé pour la réutilisation mobile/desktop
const SidebarContentComponent = {
    props: ['menuItems', 'secondaryItems', 'content'],
    emits: ['item-click', 'secondary-item-click'],
    template: `
        <div class="flex h-full w-full flex-col">
            <!-- Header -->
            <div class="flex flex-col gap-2 p-4 border-b border-sidebar-border" v-if="content.showHeader">
                <div class="flex items-center gap-2">
                    <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                        <span class="truncate font-semibold">{{ content.title || 'Shadcn UI' }}</span>
                        <span class="truncate text-xs text-sidebar-foreground/60">{{ content.subtitle || 'Demo App' }}</span>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-auto p-4">
                <!-- Main Group -->
                <div class="space-y-1">
                    <div class="px-2 py-1 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider" v-if="content.groupLabel">
                        {{ content.groupLabel }}
                    </div>
                    
                    <template v-for="(item, index) in menuItems" :key="index">
                        <a href="#" 
                           class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                           :class="{ 'bg-sidebar-primary text-sidebar-primary-foreground': item.active }"
                           @click.prevent="$emit('item-click', item, index)"
                        >
                            <span class="size-4" v-html="getIconSvg(item.icon)" v-if="item.icon"></span>
                            <span>{{ item.label }}</span>
                            <span v-if="item.badge" class="ml-auto rounded-full bg-sidebar-primary px-2 py-0.5 text-xs text-sidebar-primary-foreground">
                                {{ item.badge }}
                            </span>
                        </a>
                    </template>
                </div>

                <!-- Secondary Group -->
                <div class="mt-6 space-y-1" v-if="secondaryItems.length > 0">
                    <div class="px-2 py-1 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider" v-if="content.secondaryGroupLabel">
                        {{ content.secondaryGroupLabel }}
                    </div>
                    
                    <template v-for="(item, index) in secondaryItems" :key="index">
                        <a href="#" 
                           class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                           @click.prevent="$emit('secondary-item-click', item, index)"
                        >
                            <span class="size-4" v-html="getIconSvg(item.icon)" v-if="item.icon"></span>
                            <span>{{ item.label }}</span>
                        </a>
                    </template>
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-auto border-t border-sidebar-border p-4" v-if="content.showFooter">
                <div class="flex items-center gap-3 rounded-lg px-3 py-2">
                    <div class="flex size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium">
                        <img v-if="content.userAvatar" :src="content.userAvatar" :alt="content.userName" class="w-full h-full rounded-full object-cover" />
                        <span v-else>{{ getUserInitials() }}</span>
                    </div>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                        <span class="truncate font-medium">{{ content.userName || 'John Doe' }}</span>
                        <span class="truncate text-xs text-sidebar-foreground/60">{{ content.userEmail || 'john@example.com' }}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
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

export default {
    name: 'ShadcnSidebar',
    components: {
        SidebarContentComponent
    },
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
                // Shadcn UI CSS Variables exactes
                '--sidebar': this.content.sidebarBg || '0 0% 98%',
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
                    state: this.sidebarState,
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

    }
};
</script>

<style scoped>
/* Variables CSS exactes de Shadcn UI */
:root {
    --sidebar: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
    --sidebar-width: 16rem;
    --sidebar-width-mobile: 18rem;
    --sidebar-width-icon: 3rem;
}

.dark {
    --sidebar: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224 71.4% 4.1%;
    --sidebar-primary-foreground: 210 20% 98%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
}

/* Sheet/Modal overlay pour mobile - exact comme Shadcn UI */
.sheet-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgb(0 0 0 / 0.8);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
}

.sheet-overlay.active {
    opacity: 1;
    visibility: visible;
}

.sheet-content {
    position: fixed;
    z-index: 50;
    gap: 1rem;
    background: hsl(var(--sidebar));
    padding: 1.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: transform 0.3s ease, opacity 0.3s ease;
    border: 1px solid hsl(var(--sidebar-border));
    color: hsl(var(--sidebar-foreground));
    inset-y: 0;
    height: 100vh;
    width: var(--sidebar-width-mobile);
}

.sheet-content[data-side="left"] {
    left: 0;
    border-right: 1px solid hsl(var(--sidebar-border));
    transform: translateX(-100%);
    opacity: 0;
}

.sheet-content[data-side="right"] {
    right: 0;
    border-left: 1px solid hsl(var(--sidebar-border));
    transform: translateX(100%);
    opacity: 0;
}

.sheet-content.active {
    transform: translateX(0);
    opacity: 1;
}

/* Styles Tailwind pour compatibilité */
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

.flex { display: flex; }
.hidden { display: none; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.h-16 { height: 4rem; }
.h-7 { height: 1.75rem; }
.w-7 { width: 1.75rem; }
.size-4 { width: 1rem; height: 1rem; }
.size-8 { width: 2rem; height: 2rem; }
.min-h-svh { min-height: 100vh; }
.h-svh { height: 100vh; }
.flex-1 { flex: 1 1 0%; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.shrink-0 { flex-shrink: 0; }
.overflow-hidden { overflow: hidden; }
.overflow-auto { overflow: auto; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-full { border-radius: 9999px; }
.border { border-width: 1px; }
.border-b { border-bottom-width: 1px; }
.border-r { border-right-width: 1px; }
.border-l { border-left-width: 1px; }
.bg-white { background-color: rgb(255 255 255); }
.bg-sidebar { background-color: hsl(var(--sidebar)); }
.bg-sidebar-primary { background-color: hsl(var(--sidebar-primary)); }
.bg-sidebar-accent { background-color: hsl(var(--sidebar-accent)); }
.border-sidebar-border { border-color: hsl(var(--sidebar-border)); }
.border-slate-200 { border-color: rgb(226 232 240); }
.text-sidebar-foreground { color: hsl(var(--sidebar-foreground)); }
.text-sidebar-primary-foreground { color: hsl(var(--sidebar-primary-foreground)); }
.text-sidebar-accent-foreground { color: hsl(var(--sidebar-accent-foreground)); }
.text-sm { font-size: 0.875rem; }
.text-xs { font-size: 0.75rem; }
.text-lg { font-size: 1.125rem; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.leading-tight { line-height: 1.25; }
.tracking-wider { letter-spacing: 0.05em; }
.uppercase { text-transform: uppercase; }
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-0\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
.ml-auto { margin-left: auto; }
.mt-auto { margin-top: auto; }
.mt-6 { margin-top: 1.5rem; }
.space-y-1 > * + * { margin-top: 0.25rem; }
.fixed { position: fixed; }
.inset-y-0 { top: 0; bottom: 0; }
.left-0 { left: 0; }
.right-0 { right: 0; }
.z-10 { z-index: 10; }
.z-50 { z-index: 50; }
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; }
.transition-width { transition-property: width; }
.duration-200 { transition-duration: 200ms; }
.ease-linear { transition-timing-function: linear; }
.hover\:bg-sidebar-accent:hover { background-color: hsl(var(--sidebar-accent)); }
.hover\:text-sidebar-accent-foreground:hover { color: hsl(var(--sidebar-accent-foreground)); }
.hover\:bg-slate-100:hover { background-color: rgb(241 245 249); }
.hover\:text-slate-900:hover { color: rgb(15 23 42); }
.focus-visible\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px; }
.focus-visible\:ring-2:focus-visible { box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0 0 #0000); }
.focus-visible\:ring-slate-950:focus-visible { --tw-ring-color: rgb(2 6 23); }
.ring-offset-white { --tw-ring-offset-color: #fff; }
.disabled\:pointer-events-none:disabled { pointer-events: none; }
.disabled\:opacity-50:disabled { opacity: 0.5; }
.inline-flex { display: inline-flex; }
.aspect-square { aspect-ratio: 1 / 1; }
.object-cover { object-fit: cover; }
.grid { display: grid; }
.text-left { text-align: left; }
.shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }

/* Responsive utilities */
@media (min-width: 768px) {
    .md\:block { display: block; }
    .md\:flex { display: flex; }
}

/* Group data states - simulation Tailwind */
.group\/sidebar-wrapper[data-variant="inset"] .has-\[\[data-variant\=inset\]\]\:bg-sidebar {
    background-color: hsl(var(--sidebar));
}

.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:w-0 {
    width: 0;
}

.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[--sidebar-width-icon\] {
    width: var(--sidebar-width-icon);
}

.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)\_\+\_theme\(spacing\.4\)\)\] {
    width: calc(var(--sidebar-width-icon) + 1rem);
}

.group[data-side="right"] .group-data-\[side\=right\]\:rotate-180 {
    transform: rotate(180deg);
}

.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:left-\[calc\(var\(--sidebar-width\)\*-1\)\] {
    left: calc(var(--sidebar-width) * -1);
}

.group[data-collapsible="offcanvas"] .group-data-\[collapsible\=offcanvas\]\:right-\[calc\(var\(--sidebar-width\)\*-1\)\] {
    right: calc(var(--sidebar-width) * -1);
}

.group[data-side="left"] .group-data-\[side\=left\]\:border-r {
    border-right-width: 1px;
}

.group[data-side="right"] .group-data-\[side\=right\]\:border-l {
    border-left-width: 1px;
}

.group[data-collapsible="icon"] .group-data-\[collapsible\=icon\]\:w-\[calc\(var\(--sidebar-width-icon\)\_\+\_theme\(spacing\.4\)\_\+2px\)\] {
    width: calc(var(--sidebar-width-icon) + 1rem + 2px);
}

/* Width utilities */
.w-\[--sidebar-width\] { width: var(--sidebar-width); }
.w-\[--sidebar-width-icon\] { width: var(--sidebar-width-icon); }

</style>

