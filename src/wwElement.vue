<template>
    <div class="sidebar-container" :style="colorVariables">
        <!-- SIDEBAR INTERNE - Échappe aux styles WeWeb -->
        <div 
            class="shadcn-sidebar"
            :class="sidebarClasses"
        >
            <!-- Header du sidebar -->
            <div class="sidebar-header" v-if="content.showHeader">
                <h3 class="sidebar-title">{{ content.title || 'Menu' }}</h3>
                <button 
                    class="sidebar-toggle" 
                    @click="toggleCollapsed"
                    v-if="content.collapsible"
                >
                    {{ isCollapsed ? '→' : '←' }}
                </button>
            </div>

            <!-- Navigation items -->
            <nav class="sidebar-nav">
                <div 
                    v-for="(item, index) in navigationItems" 
                    :key="index"
                    class="sidebar-item"
                    :class="{ 'active': item.active, 'disabled': item.disabled }"
                    @click="handleItemClick(item, index)"
                >
                    <span class="sidebar-icon" v-if="item.icon && !isCollapsed">
                        {{ item.icon }}
                    </span>
                    <span class="sidebar-label" v-if="!isCollapsed">
                        {{ item.label }}
                    </span>
                    <span class="sidebar-badge" v-if="item.badge && !isCollapsed">
                        {{ item.badge }}
                    </span>
                </div>
            </nav>

            <!-- Footer du sidebar -->
            <div class="sidebar-footer" v-if="content.showFooter && !isCollapsed">
                <div class="sidebar-user">
                    <div class="user-avatar">{{ content.userInitials || 'U' }}</div>
                    <div class="user-info">
                        <div class="user-name">{{ content.userName || 'User' }}</div>
                        <div class="user-email">{{ content.userEmail || 'user@example.com' }}</div>
                    </div>
                </div>
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
            isCollapsed: this.content.collapsed || false,
        };
    },
    computed: {
        sidebarClasses() {
            const classes = [];
            
            // Variante de style
            const variant = this.content.variant || 'default';
            classes.push(variant);
            
            // État collapsed
            if (this.isCollapsed) {
                classes.push('collapsed');
            }
            
            // Position
            const position = this.content.position || 'left';
            classes.push(`position-${position}`);
            
            return classes;
        },

        navigationItems() {
            return this.content.items || [
                { icon: '🏠', label: 'Home', active: true },
                { icon: '📊', label: 'Dashboard', badge: '3' },
                { icon: '👥', label: 'Users' },
                { icon: '⚙️', label: 'Settings' },
                { icon: '❓', label: 'Help' }
            ];
        },

        colorVariables() {
            return {
                '--custom-primary': this.cleanColor(this.content.primaryColor) || 'hsl(222.2, 47.4%, 11.2%)',
                '--custom-primary-foreground': this.cleanColor(this.content.primaryForeground) || 'hsl(210, 40%, 98%)',
                '--custom-secondary': this.cleanColor(this.content.secondaryColor) || 'hsl(210, 40%, 96%)',
                '--custom-secondary-foreground': this.cleanColor(this.content.secondaryForeground) || 'hsl(222.2, 84%, 4.9%)',
                '--custom-border': this.cleanColor(this.content.borderColor) || 'hsl(214.3, 31.8%, 91.4%)',
                '--custom-accent': this.cleanColor(this.content.accentColor) || 'hsl(210, 40%, 96%)',
                '--custom-accent-foreground': this.cleanColor(this.content.accentForeground) || 'hsl(222.2, 84%, 4.9%)'
            };
        }
    },
    methods: {
        cleanColor(color) {
            if (!color) return null;
            
            // Si c'est une variable WeWeb avec fallback (var(--xxx, #color))
            if (color.startsWith('var(') && color.includes(',')) {
                const fallback = color.split(',')[1].replace(')', '').trim();
                return fallback;
            }
            
            return color;
        },

        toggleCollapsed() {
            this.isCollapsed = !this.isCollapsed;
            
            this.$emit("trigger-event", {
                name: "toggle",
                event: { 
                    collapsed: this.isCollapsed
                }
            });
        },

        handleItemClick(item, index) {
            if (item.disabled) return;
            
            this.$emit("trigger-event", {
                name: "item-click",
                event: { 
                    item,
                    index,
                    label: item.label
                }
            });
        }
    }
};
</script>

<style scoped>
/* ARCHITECTURE RÉVOLUTIONNAIRE: Container + Sidebar interne */
.sidebar-container {
    display: block;
    height: 100%;
    box-sizing: border-box;
}

.shadcn-sidebar {
    /* Sidebar de base */
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 280px;
    background: white;
    border-right: 1px solid var(--custom-border);
    transition: all 0.3s ease;
    overflow: hidden;
}

/* ===== VARIANTS ===== */
.shadcn-sidebar.default {
    background: white;
    border-color: var(--custom-border);
}

.shadcn-sidebar.secondary {
    background: var(--custom-secondary);
    border-color: var(--custom-border);
}

.shadcn-sidebar.outline {
    background: transparent;
    border: 1px solid var(--custom-border);
}

/* ===== COLLAPSED STATE ===== */
.shadcn-sidebar.collapsed {
    width: 64px;
}

.shadcn-sidebar.collapsed .sidebar-label,
.shadcn-sidebar.collapsed .sidebar-badge {
    display: none;
}

/* ===== POSITIONS ===== */
.shadcn-sidebar.position-left {
    border-right: 1px solid var(--custom-border);
    border-left: none;
}

.shadcn-sidebar.position-right {
    border-left: 1px solid var(--custom-border);
    border-right: none;
}

/* ===== HEADER ===== */
.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--custom-border);
    background: var(--custom-accent);
}

.sidebar-title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--custom-primary);
}

.sidebar-toggle {
    padding: 4px 8px;
    border: 1px solid var(--custom-border);
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

.sidebar-toggle:hover {
    background: var(--custom-secondary);
}

/* ===== NAVIGATION ===== */
.sidebar-nav {
    flex: 1;
    padding: 8px 0;
    overflow-y: auto;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.2s;
    border-left: 3px solid transparent;
}

.sidebar-item:hover {
    background: var(--custom-accent);
}

.sidebar-item.active {
    background: var(--custom-primary);
    color: var(--custom-primary-foreground);
    border-left-color: var(--custom-primary);
    font-weight: 500;
}

.sidebar-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.sidebar-icon {
    font-size: 18px;
    width: 20px;
    text-align: center;
    flex-shrink: 0;
}

.sidebar-label {
    flex: 1;
    font-size: 14px;
}

.sidebar-badge {
    background: var(--custom-destructive);
    color: var(--custom-destructive-foreground);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    min-width: 20px;
    text-align: center;
}

/* ===== FOOTER ===== */
.sidebar-footer {
    padding: 16px 20px;
    border-top: 1px solid var(--custom-border);
    background: var(--custom-muted);
}

.sidebar-user {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--custom-primary);
    color: var(--custom-primary-foreground);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
}

.user-info {
    flex: 1;
    min-width: 0;
}

.user-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--custom-primary);
    line-height: 1.2;
}

.user-email {
    font-size: 12px;
    color: var(--custom-muted-foreground);
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

<!-- Import global pour les variables CSS seulement -->
<style>
@import './globals.css';
</style>
