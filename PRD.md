# Planning Guide

An interactive visualization and exploration tool for the Hopf Fibration Cognitive Grammar - a mathematical framework mapping the trinity of Prolog constraints (logical topos), Scheme functions (virtual telos), and Go routines (actual types) through nested Hopf fibrations across prime-factorized dimensional spaces.

**Experience Qualities**: 
1. **Cerebral** - The interface should feel intellectually stimulating, inviting deep exploration of complex mathematical structures
2. **Fluid** - Transitions between fibration levels and dimensional spaces should feel smooth and continuous, reflecting the geometric nature of the Hopf fibration
3. **Revelatory** - Each interaction should unveil new layers of understanding, creating "aha!" moments as users grasp the nested structure

**Complexity Level**: Light Application (multiple features with basic state)
  - The app presents complex mathematical concepts but does so through an accessible interface with visualization, exploration, and educational components. State management handles current fibration level, selected dimensions, and user annotations.

## Essential Features

### Interactive Hopf Fibration Visualizer
- **Functionality**: Visual representation of nested Hopf fibrations showing S³ → S² × S¹ and higher-order fibrations
- **Purpose**: Make abstract topology concrete and graspable through visual representation
- **Trigger**: User selects a fibration level (S³→S², S⁷→S⁴, S¹⁵→S⁸, S¹⁹→S¹², etc.)
- **Progression**: Select level → View 3D visualization → Rotate/explore → See fiber structure → Understand mapping
- **Success criteria**: Users can visually distinguish total space, base space, and fiber space; rotations are smooth at 60fps

### Prime Factorization Dimension Explorer
- **Functionality**: Display and explore the prime factorization of dimensions at each Hopf level
- **Purpose**: Reveal the mathematical structure underlying cognitive complexity
- **Trigger**: User clicks on a dimensional space or enters a Hopf level
- **Progression**: Enter/select level → View prime factorization → See tensor shape → Explore factor relationships → Understand optimization
- **Success criteria**: Prime factorizations are accurate; relationships between levels are visually clear

### Trinity Mapping Interface
- **Functionality**: Map the three paradigms (Prolog/Scheme/Go) to the three spaces (Total/Fiber/Base)
- **Purpose**: Connect abstract mathematics to concrete computational paradigms
- **Trigger**: User navigates to "Trinity" tab or hovers over space labels
- **Progression**: View mapping → Select paradigm → See corresponding space → Explore properties → Understand correspondence
- **Success criteria**: Clear visual connections between paradigms and spaces; properties are accurately represented

### Nested Level Navigator
- **Functionality**: Browse through the recursive hierarchy where each level's fibers become the next level's constraints
- **Purpose**: Demonstrate the recursive nature of cognitive metamorphosis
- **Trigger**: User clicks "Ascend" or "Descend" navigation controls
- **Progression**: Select direction → Animate transition → View new level → See relationship to previous → Understand recursion
- **Success criteria**: Smooth transitions between levels; relationship to prior level is visually maintained

### Educational Annotations System
- **Functionality**: Persistent user notes and highlights on different aspects of the fibration
- **Purpose**: Support learning and exploration by allowing users to mark insights
- **Trigger**: User clicks annotation icon or highlights text/visualization element
- **Progression**: Select element → Add note → Save → View later → Build understanding
- **Success criteria**: Notes persist across sessions; easily retrievable and editable

## Edge Case Handling

- **Invalid Fibration Levels**: Gracefully handle requests for non-existent or mathematically invalid Hopf fibrations
- **Performance Limits**: Throttle 3D rendering for very high-dimensional spaces to maintain responsiveness
- **Empty State**: Provide helpful starting point when user first visits with tutorial overlay
- **Mobile Constraints**: Adapt 3D visualizations to touch controls; simplify for smaller screens
- **Deep Links**: Support URL parameters to share specific fibration levels and configurations

## Design Direction

The design should evoke the feeling of gazing into a mathematical cosmos - elegant, precise, infinite in depth yet perfectly ordered. It should feel like a research tool from the future, where complex mathematics becomes intuitive through sophisticated visualization. The interface should be minimal and refined, letting the mathematical beauty speak for itself, with a sense of cutting-edge computational philosophy.

## Color Selection

Custom palette inspired by quantum physics visualizations and deep space imagery, conveying both rigor and wonder.

- **Primary Color**: Deep Indigo `oklch(0.35 0.15 270)` - Represents the logical depth of the Total Space, communicating intellectual rigor and infinite possibility
- **Secondary Colors**: 
  - Cyan `oklch(0.65 0.18 210)` for Fiber Space - Fluid, circular, goal-oriented
  - Amber `oklch(0.72 0.15 60)` for Base Space - Grounded, actual, concrete
- **Accent Color**: Vivid Purple `oklch(0.55 0.25 300)` - Highlights active elements, creates energy and excitement for discovery
- **Foreground/Background Pairings**:
  - Background (Deep Space Black `oklch(0.12 0.02 270)`): Soft White text `oklch(0.95 0.01 270)` - Ratio 14.2:1 ✓
  - Card (Subtle Indigo `oklch(0.18 0.05 270)`): Light Gray text `oklch(0.88 0.01 270)` - Ratio 11.8:1 ✓
  - Primary (Deep Indigo `oklch(0.35 0.15 270)`): White text `oklch(0.98 0.01 270)` - Ratio 8.5:1 ✓
  - Secondary (Dark Slate `oklch(0.30 0.05 250)`): Light text `oklch(0.92 0.01 270)` - Ratio 9.2:1 ✓
  - Accent (Vivid Purple `oklch(0.55 0.25 300)`): White text `oklch(0.98 0.01 270)` - Ratio 5.1:1 ✓
  - Muted (Charcoal `oklch(0.25 0.03 270)`): Light Gray text `oklch(0.85 0.01 270)` - Ratio 7.8:1 ✓

## Font Selection

Typography should convey mathematical precision and futuristic sophistication - use IBM Plex Mono for code/mathematical notation (precise, technical) and Inter for body text (clean, highly legible, modern).

- **Typographic Hierarchy**: 
  - H1 (Page Title): Inter Bold / 36px / -0.02em letter-spacing / 40px line-height
  - H2 (Section Headers): Inter SemiBold / 24px / -0.01em letter-spacing / 32px line-height  
  - H3 (Subsections): Inter Medium / 18px / normal letter-spacing / 26px line-height
  - Body (Descriptions): Inter Regular / 15px / normal letter-spacing / 24px line-height
  - Code (Mathematical Notation): IBM Plex Mono Regular / 14px / normal letter-spacing / 22px line-height
  - Small (Labels/Captions): Inter Regular / 13px / normal letter-spacing / 20px line-height

## Animations

Animations should reflect the continuous, smooth transformations inherent in topology - nothing should jump or snap. Every transition should feel like a mathematical morphism, natural and inevitable. Subtle but purposeful, guiding attention to the recursive nature of the nested structures.

- **Purposeful Meaning**: Motion communicates mathematical continuity and transformation - fibrations unfolding, dimensions expanding, levels nesting
- **Hierarchy of Movement**: 
  - Primary: 3D visualization rotations and level transitions (fluid, physics-based)
  - Secondary: Tab switches and panel reveals (smooth slides)
  - Tertiary: Hover states and micro-interactions (subtle scale/glow effects)

## Component Selection

- **Components**: 
  - `Tabs` for switching between Visualizer, Trinity Mapping, and Explorer views
  - `Card` for displaying individual fibration levels and dimensional data with subtle borders
  - `ScrollArea` for browsing through nested hierarchy levels
  - `Tooltip` for displaying mathematical definitions on hover
  - `Button` with subtle gradient for navigation controls (Ascend/Descend)
  - `Badge` for displaying prime factors and dimensional numbers
  - `Separator` for dividing logical sections
  - `Textarea` for annotation input
  
- **Customizations**: 
  - Custom 3D Canvas component using Three.js for Hopf fibration visualization
  - Custom PrimeFactorization component with animated breakdown visualization
  - Custom FibrationLevel component showing S^n → S^m × S^k notation
  
- **States**: 
  - Buttons: Subtle glow on hover, slight scale down on press, dimmed when disabled
  - Inputs: Focused state with accent border and subtle shadow
  - 3D Canvas: Interactive cursor, smooth rotation inertia
  
- **Icon Selection**: 
  - `ArrowUp/ArrowDown` from Phosphor for level navigation
  - `Cube` for 3D visualization mode
  - `GitBranch` for showing fibration structure
  - `Note` for annotations
  - `MathOperations` for prime factorization
  
- **Spacing**: Consistent 4px base unit - 16px between related elements, 32px between sections, 48px for major divisions
  
- **Mobile**: 
  - Stack tabs vertically on mobile
  - Simplify 3D visualization to 2D projections for performance
  - Collapse annotation panel into bottom sheet
  - Increase touch targets to 48px minimum
  - Use accordions for nested level browsing
