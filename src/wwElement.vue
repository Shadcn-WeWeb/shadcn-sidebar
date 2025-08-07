<template>
    <div class="shadcn-sidebar-section">
        <!-- Sidebar -->
        <aside class="sidebar">
            <!-- Header Dropzone -->
            <wwLayout
                class="sidebar-header"
                path="sidebarHeader"
                direction="column"
            />
            
            <!-- Navigation Dropzone -->
            <wwLayout
                class="sidebar-nav"
                path="sidebarNav"
                direction="column"
            />
            
            <!-- Footer Dropzone -->
            <wwLayout
                v-if="content.showFooter"
                class="sidebar-footer"
                path="sidebarFooter"
                direction="column"
            />
        </aside>
        
        <!-- Main Content -->
        <main class="main-content">
            <!-- Header with Trigger -->
            <header v-if="content.showTrigger" class="main-header">
                <button class="sidebar-trigger" @click="toggleSidebar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>
                
                <wwLayout
                    class="main-header-content"
                    path="mainHeader"
                    direction="row"
                />
            </header>
            
            <!-- Main Content Dropzone -->
            <wwLayout
                class="main-content-area"
                path="mainContent"
                direction="column"
            />
        </main>
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
    data() {
        return {
            open: this.content.defaultOpen !== false,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    methods: {
        toggleSidebar() {
            this.open = !this.open;
            this.$emit('trigger-event', { 
                name: 'toggle', 
                event: { 
                    open: this.open,
                    state: this.open ? 'expanded' : 'collapsed'
                } 
            });
        }
    }
};
</script>

<style scoped>
/* Base layout */
.shadcn-sidebar-section {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Sidebar */
.sidebar {
    width: 250px;
    min-height: 100vh;
    background: hsl(0 0% 98%);
    border-right: 1px solid hsl(220 13% 91%);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.sidebar-header,
.sidebar-nav,
.sidebar-footer {
    padding: 1rem;
    min-height: 60px;
}

.sidebar-nav {
    flex: 1;
}

/* Main content */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-bottom: 1px solid hsl(220 13% 91%);
    min-height: 60px;
}

.sidebar-trigger {
    background: white;
    border: 1px solid hsl(220 13% 91%);
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar-trigger:hover {
    background: hsl(220 14.3% 95.9%);
}

.main-header-content {
    flex: 1;
    min-height: 40px;
}

.main-content-area {
    flex: 1;
    padding: 1rem;
    min-height: 300px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    .main-content {
        width: 100%;
    }
}
</style>