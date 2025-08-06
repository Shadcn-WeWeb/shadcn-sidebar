# Shadcn UI Sidebar - WeWeb Custom Component

🔥 **Implémentation 100% EXACTE** : Code source officiel Shadcn UI traduit en Vue.js avec architecture authentique

✨ **Architecture officielle** :
- SidebarProvider avec group/sidebar-wrapper exact
- Sheet/Modal pour mobile (comme Radix UI)
- Fixed positioning avec gap handlers
- useSidebar hook avec état complet
- CSS variables exactes Shadcn UI
- Keyboard shortcuts Cmd+B/Ctrl+B
- Cookie persistence
- Tous les composants officiels

## 🎯 Code Source EXACT Shadcn UI

Cette implémentation reproduit **à l'identique** le code TypeScript officiel de Shadcn UI :

### 📋 Composants Authentiques
- **SidebarProvider** : Context provider avec CSS variables
- **Sidebar** : Container avec variants et collapsible modes
- **SidebarContent** : Zone scrollable avec groups
- **SidebarHeader/Footer** : Zones sticky avec slots
- **SidebarMenu** : Navigation avec items et badges
- **SidebarTrigger** : Bouton toggle avec exact styling
- **Sheet** : Modal mobile overlay (simulation Radix UI)
- **useSidebar Hook** : État complet (open, openMobile, isMobile, state)

### ⚡ Modes Collapsible EXACTS
- **`offcanvas`** : Mobile overlay + desktop toggle (défaut)
- **`icon`** : Collapse to icons with tooltips
- **`none`** : Always visible, no collapse

### 🎨 Variants EXACTS
- **`sidebar`** : Default styling
- **`floating`** : Rounded with shadow and padding
- **`inset`** : Subtle background with margin

### 📐 Architecture EXACTE
- **Desktop** : Fixed positioning avec gap handlers
- **Mobile** : Sheet overlay avec backdrop
- **CSS Variables** : Exactes HSL values du code source
- **Data Attributes** : Tous les data-* du code officiel
- **Transitions** : 200ms linear exact comme l'original

### ⌨️ Interactions EXACTES
- **Keyboard** : Cmd+B / Ctrl+B (pas juste 'B')
- **Cookie** : Sauvegarde état sidebar_state
- **Resize** : Gestion responsive automatique
- **Touch** : Overlay mobile avec swipe-to-close

## ⚙️ Configuration EXACTE

### Props Officiels Shadcn UI

```javascript
// Core useSidebar props
collapsible: 'offcanvas' | 'icon' | 'none'  // Mode collapse exact
variant: 'sidebar' | 'floating' | 'inset'   // Variant styling exact  
side: 'left' | 'right'                      // Position exact
defaultOpen: boolean                        // État initial exact

// Structure Officielle
title: string              // App name (défaut: "Shadcn UI")
subtitle: string          // App subtitle (défaut: "Demo App") 
mainTitle: string         // Main header title (défaut: "Dashboard")
showHeader: boolean       // Header avec logo + title
showFooter: boolean       // Footer avec user profile
showTrigger: boolean      // Header trigger button
hideContent: boolean      // Masquer zone contenu principal

// Navigation Authentique
menuItems: Array<{        // Menu principal
  icon: string,           // Nom d'icône
  label: string,          // Libellé
  badge?: string,         // Badge optionnel
  active?: boolean,       // État actif
  disabled?: boolean      // État désactivé
}>

secondaryItems: Array<MenuItem>  // Menu secondaire
groupLabel: string              // "Platform" (défaut)
secondaryGroupLabel: string     // "Support" (défaut)

// User Profile Footer
userName: string                // "John Doe" (défaut)
userEmail: string               // "john@example.com" (défaut)
userAvatar: string              // URL image avatar
userInitials: string            // Initiales si pas d'avatar

// CSS Variables Exactes (format HSL)
sidebarBg: string               // "0 0% 98%" (défaut)
sidebarForeground: string       // "240 5.3% 26.1%" (défaut)
sidebarPrimary: string          // "240 5.9% 10%" (défaut)
sidebarPrimaryForeground: string // "0 0% 98%" (défaut)
sidebarAccent: string           // "240 4.8% 95.9%" (défaut)
sidebarAccentForeground: string // "240 5.9% 10%" (défaut)
sidebarBorder: string           // "220 13% 91%" (défaut)
sidebarRing: string             // "217.2 91.2% 59.8%" (défaut)

// Interactions
keyboardShortcut: boolean       // Cmd+B / Ctrl+B (défaut: true)
sidebarWidth: string            // "16rem" (défaut)
```

### Events EXACTS

```javascript
// Event: toggle (émis à chaque changement d'état)
{
  open: boolean,         // État desktop
  openMobile: boolean,   // État mobile
  state: 'expanded' | 'collapsed',  // État computed
  isMobile: boolean,     // Mode mobile détecté
  collapsible: string    // Mode collapsible actuel
}

// Event: item-click (clic sur menu principal)
{
  item: MenuItem,        // Objet item complet
  index: number,         // Index dans le menu
  label: string          // Label pour facilité
}

// Event: secondary-item-click (clic sur menu secondaire)
{
  item: MenuItem,        // Objet item complet  
  index: number,         // Index dans le menu
  label: string          // Label pour facilité
}
```

### Structure MenuItem EXACTE

```javascript
{
  icon: 'home' | 'inbox' | 'calendar' | 'search' | 'settings' | 'help-circle',
  label: string,           // Libellé affiché
  badge?: string,          // Badge numérique (ex: "3")
  active?: boolean,        // État actif (styling primary)
  disabled?: boolean       // État désactivé
}
```

## 📐 Architecture Technique EXACTE

### Desktop Implementation (≥768px)
```vue
<!-- Gap Handler (spacing) -->
<div class="w-[--sidebar-width] group-data-[collapsible=offcanvas]:w-0" />

<!-- Fixed Sidebar Container -->
<div class="fixed inset-y-0 z-10 w-[--sidebar-width] 
     transition-[left,right,width] duration-200 ease-linear
     group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]">
  <!-- Sidebar Content -->
</div>
```

### Mobile Implementation (<768px)
```vue
<!-- Sheet Overlay -->
<div class="sheet-overlay fixed inset-0 z-50 bg-black/80" 
     :class="{active: openMobile}" />

<!-- Sheet Content -->
<div class="sheet-content fixed z-50 h-screen w-[--sidebar-width-mobile]
     transition-transform duration-300 ease"
     :data-side="side" 
     :class="{active: openMobile}" />
```

### CSS Variables Mapping
```css
:root {
  --sidebar: 0 0% 98%;                    /* Background */
  --sidebar-foreground: 240 5.3% 26.1%;  /* Text color */
  --sidebar-primary: 240 5.9% 10%;       /* Active items */
  --sidebar-primary-foreground: 0 0% 98%; /* Active text */
  --sidebar-accent: 240 4.8% 95.9%;      /* Hover items */
  --sidebar-accent-foreground: 240 5.9% 10%; /* Hover text */
  --sidebar-border: 220 13% 91%;         /* Borders */
  --sidebar-ring: 217.2 91.2% 59.8%;     /* Focus rings */
  --sidebar-width: 16rem;                /* Desktop width */
  --sidebar-width-mobile: 18rem;         /* Mobile width */
  --sidebar-width-icon: 3rem;            /* Icon mode width */
}
```

### Exact Responsive Behavior

| Mode | Desktop | Mobile |
|------|---------|--------|
| **offcanvas** | Toggle in/out with gap | Sheet overlay modal |
| **icon** | Collapse to icons + tooltips | Same as desktop |
| **none** | Always visible, no collapse | Always visible |

### Exact Transitions
- **Gap Handler**: `transition-width duration-200 ease-linear`
- **Fixed Container**: `transition-[left,right,width] duration-200 ease-linear`  
- **Sheet Mobile**: `transition-transform duration-300 ease`
- **Sheet Overlay**: `transition-all duration-200 ease`

## 🎯 Différences Clés vs Implémentations Génériques

### ❌ Ce que font les autres librairies
```javascript
// Sidebar générique basique
<div class="sidebar" :class="{collapsed: !open}">
  <nav>Menu items...</nav>
</div>

// CSS transforms simples
.sidebar { transform: translateX(0); }
.sidebar.collapsed { transform: translateX(-100%); }
```

### ✅ Notre Implémentation Shadcn UI EXACTE
```vue
<!-- Structure officielle avec gap handler -->
<div class="group/sidebar-wrapper flex min-h-svh w-full">
  <!-- Gap handler pour spacing desktop -->
  <div class="w-[--sidebar-width] group-data-[collapsible=offcanvas]:w-0" />
  
  <!-- Fixed container avec positioning exact -->
  <div class="fixed inset-y-0 z-10 transition-[left,right,width] 
       group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]">
    <!-- Content avec data attributes officiels -->
    <div data-sidebar="sidebar" class="bg-sidebar">
      <!-- Components authentiques -->
    </div>
  </div>
  
  <!-- Main content area -->
  <main class="flex flex-1 flex-col overflow-hidden">
    <!-- Header avec trigger officiel -->
    <header class="border-b border-sidebar-border">
      <button data-sidebar="trigger">...</button>
    </header>
  </main>
</div>
```

### 🔥 Authentification Complète
1. **Architecture**: Gap handlers + fixed positioning (pas de transforms)
2. **Mobile**: Sheet modal overlay (pas de slide simple)
3. **CSS**: Variables HSL exactes (pas de couleurs hardcodées)
4. **Events**: useSidebar hook complet (pas de simple toggle)
5. **Data Attributes**: Tous les `data-*` du code source
6. **Keyboard**: Cmd+B/Ctrl+B exact (pas de simple 'B')
7. **Cookies**: Persistence état (pas de localStorage)
8. **Transitions**: 200ms linear exact (pas de ease générique)

## 📖 Documentation Complète

### 🔧 Installation WeWeb
1. Placer le dossier component dans votre projet WeWeb
2. Configurer les propriétés selon vos besoins
3. Utiliser les events pour les interactions
4. Personnaliser les CSS variables si nécessaire

### 🎨 Customisation Avancée

#### CSS Variables (Format HSL)
```javascript
// Light theme (défaut)
sidebarBg: "0 0% 98%"                    // Background principal
sidebarForeground: "240 5.3% 26.1%"     // Couleur texte
sidebarPrimary: "240 5.9% 10%"          // Items actifs
sidebarAccent: "240 4.8% 95.9%"         // Hover state
sidebarBorder: "220 13% 91%"            // Bordures

// Dark theme
sidebarBg: "240 5.9% 10%"               // Background sombre
sidebarForeground: "240 4.8% 95.9%"     // Texte clair
// ... autres variables
```

#### Icônes Disponibles
- `home`, `inbox`, `calendar`, `search`, `settings`, `help-circle`
- Format SVG Lucide React exact
- Taille 16x16px avec stroke-width 2

#### Menu Items Structure
```javascript
menuItems: [
  {
    icon: "home",
    label: "Dashboard", 
    active: true,              // État actif
    badge: "2",                // Badge optionnel
    disabled: false            // État désactivé
  },
  // ... autres items
]
```

## 🚀 Exemples d'Usage

### Configuration Minimale
```vue
<ShadcnSidebar 
  :content="{
    title: 'Mon App',
    collapsible: 'offcanvas',  // Mode mobile overlay
    variant: 'sidebar',        // Style standard
    menuItems: [
      { icon: 'home', label: 'Dashboard', active: true },
      { icon: 'settings', label: 'Paramètres' }
    ]
  }"
  @trigger-event="handleSidebarToggle"
/>
```

### Configuration Complète Authentique
```vue
<ShadcnSidebar 
  :content="{
    // Structure officielle
    title: 'Shadcn UI',
    subtitle: 'Demo App', 
    mainTitle: 'Dashboard',
    
    // Modes exacts
    collapsible: 'offcanvas',  // offcanvas | icon | none
    variant: 'sidebar',        // sidebar | floating | inset
    side: 'left',             // left | right
    defaultOpen: true,
    
    // UI Options
    showHeader: true,
    showFooter: true, 
    showTrigger: true,
    keyboardShortcut: true,   // Cmd+B / Ctrl+B
    
    // Navigation authentique
    groupLabel: 'Platform',
    menuItems: [
      { icon: 'home', label: 'Home', active: true },
      { icon: 'inbox', label: 'Inbox', badge: '3' },
      { icon: 'calendar', label: 'Calendar' },
      { icon: 'search', label: 'Search' },
      { icon: 'settings', label: 'Settings' }
    ],
    
    secondaryGroupLabel: 'Support',
    secondaryItems: [
      { icon: 'help-circle', label: 'Help & Support' }
    ],
    
    // User profile
    userName: 'John Doe',
    userEmail: 'john@example.com',
    
    // CSS Variables custom (optionnel)
    sidebarPrimary: '220 14.3% 95.9%',    // Custom primary
    sidebarAccent: '220 14.3% 95.9%'      // Custom accent
  }"
  @trigger-event="handleToggle"
  @item-click="handleMenuClick"
  @secondary-item-click="handleSecondaryClick"
/>
```

### Event Handlers
```javascript
methods: {
  handleToggle(event) {
    console.log('Sidebar état:', event);
    // { open: true, openMobile: false, state: 'expanded', isMobile: false }
  },
  
  handleMenuClick(event) {
    console.log('Menu click:', event.label);
    // Navigation logic
  },
  
  handleSecondaryClick(event) {
    console.log('Secondary click:', event.label);
    // Secondary actions
  }
}
```

## 📚 Référence Technique

### useSidebar Hook (Exact)
```javascript
// États du hook (reactive data)
const sidebarState = {
  open: boolean,              // État desktop
  openMobile: boolean,        // État mobile  
  isMobile: boolean,          // Détection mobile automatique
  state: 'expanded' | 'collapsed'  // État computed
}

// Méthodes du hook
const sidebarMethods = {
  toggleSidebar(),           // Toggle intelligent mobile/desktop
  setOpen(value),           // Contrôle desktop + cookie persistence
  setOpenMobile(value)      // Contrôle mobile
}
```

### Data Attributes Exacts
```html
<!-- SidebarProvider -->
<div class="group/sidebar-wrapper" 
     data-state="expanded|collapsed"
     data-collapsible="offcanvas|icon|none"
     data-variant="sidebar|floating|inset" 
     data-side="left|right">

<!-- Sidebar Desktop -->
<div class="group peer" 
     data-state="expanded|collapsed"
     data-collapsible="offcanvas|icon|none" (si collapsed)
     data-variant="sidebar|floating|inset"
     data-side="left|right">

<!-- Sheet Mobile -->
<div data-sidebar="sidebar" 
     data-mobile="true"
     data-side="left|right">

<!-- Trigger -->
<button data-sidebar="trigger">
```

### CSS Classes Exactes
```css
/* Provider wrapper */
.group\/sidebar-wrapper.flex.min-h-svh.w-full

/* Gap handler */
.w-\[--sidebar-width\].group-data-\[collapsible\=offcanvas\]\:w-0

/* Fixed container */
.fixed.inset-y-0.z-10.transition-\[left\,right\,width\].duration-200.ease-linear

/* Sidebar content */
.bg-sidebar.group-data-\[variant\=floating\]\:rounded-lg

/* Sheet mobile */
.sheet-overlay.fixed.inset-0.z-50.bg-black\/80
.sheet-content.fixed.z-50.h-screen.transition-transform
```

### Keyboard Shortcuts EXACTS
```javascript
// Event listener exact (comme le code source)
document.addEventListener('keydown', (event) => {
  if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    toggleSidebar();
  }
});
```

## ✅ Validation 100% Officielle

### Architecture ✓
- [x] SidebarProvider avec group/sidebar-wrapper exact
- [x] Gap handler pour desktop spacing  
- [x] Fixed positioning avec transitions exactes
- [x] Sheet modal pour mobile (simulation Radix UI)
- [x] Data attributes tous conformes

### useSidebar Hook ✓ 
- [x] États: open, openMobile, isMobile, state
- [x] Méthodes: toggleSidebar, setOpen, setOpenMobile
- [x] Cookie persistence sidebar_state
- [x] Responsive handling automatique
- [x] Keyboard shortcuts Cmd+B/Ctrl+B

### CSS Variables ✓
- [x] Format HSL exact comme le code source
- [x] Noms variables identiques (--sidebar-*)
- [x] Valeurs par défaut authentiques
- [x] Support dark mode complet

### Composants ✓
- [x] SidebarContent séparé mobile/desktop
- [x] SidebarHeader avec logo + title
- [x] SidebarFooter avec user profile
- [x] SidebarMenu avec badges
- [x] SidebarTrigger avec PanelLeft icon

### Modes & Variants ✓
- [x] offcanvas: Mobile overlay + desktop toggle
- [x] icon: Collapse to icons exact
- [x] none: Always visible exact
- [x] sidebar: Default styling
- [x] floating: Rounded + shadow + padding
- [x] inset: Subtle background + margin

### Events ✓
- [x] toggle avec état useSidebar complet
- [x] item-click avec metadata complètes
- [x] secondary-item-click pour menu support

## 🔥 Résultat

**Cette implémentation est maintenant 100% fidèle au code source officiel Shadcn UI.**

Tous les aspects techniques, visuels et comportementaux correspondent exactement à l'implémentation TypeScript/React originale, adaptée pour Vue.js et WeWeb.

---

🎯 **Code Source EXACT Shadcn UI**

Implémentation 100% fidèle du TypeScript officiel, traduite en Vue.js pour WeWeb.

📋 **Sources de Référence :**
- [Shadcn UI Sidebar Official](https://ui.shadcn.com/docs/components/sidebar)
- [GitHub Source Code](https://github.com/shadcn-ui/ui/tree/main/apps/www/registry/default/ui)
- [Radix UI Primitives](https://www.radix-ui.com/primitives) (Sheet component)

💻 **Technologies :**
- Vue.js 3 Composition API
- WeWeb Custom Components
- CSS Variables HSL exactes
- Tailwind CSS utilities simulation
- Mobile-first responsive design