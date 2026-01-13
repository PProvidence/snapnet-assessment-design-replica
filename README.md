# Finance Landing Page - Design Replication

A pixel-perfect replication of the provided Figma design ("Landing Page -2"), focusing on layout fidelity, responsive behavior, and modern CSS techniques.

## 🚀 Live Demo

[https://snapnet-assessment-design-replica.vercel.app/]

## 🎨 Design Implementation Details

* **Pixel Perfection:** layout matches the 1440px design specification explicitly with a centered card layout.
* **Responsive Strategy:**
    * **Desktop:** CSS Grid layout for precise 50/50 split.
    * **Mobile:** Flexbox column layout for optimized readability.
* **Typography:** Integrated **Overpass** font family to match the Figma design source.
* **Visual Effects:**
    * **Assets:** Utilizes SVGs for all icons and illustrations to ensure crisp rendering on all high-DPI displays.
    * Smooth hover states and transitions for interactive elements.

### Theme Awareness (Light & Dark Mode)
The application automatically detects the user's system preference (`prefers-color-scheme`) and switches themes instantly without flashing.
* **CSS Variables:** Implemented using semantic CSS variables (e.g., `--bg-primary`, `--text-main`) in `index.css`.
* **Asset Switching:** Dynamically renders different illustrations (`illustration-white.svg` vs `illustration-dark.svg`) based on the active theme.

### Performance Optimization
* **LCP (Largest Contentful Paint):** Critical above-the-fold assets (Logo and Main Illustration) use `fetchPriority="high"` to ensure immediate loading.
* **Vector Graphics:** Optimized SVGs are used instead of heavy raster images to keep bundle size low.

## 🛠 Tech Stack

* **Framework:** React 19 + Vite + TypeScript
* **Styling:** Tailwind CSS v4 (CSS-first configuration)
* **Icons:** `react-icons` (Socials) and `lucide-react` (UI elements)
* **Fonts:** Google Fonts (Overpass & Maven Pro)    

## 📂 Project Structure

```text
src/
├── assets/                 # Optimized SVGs (illustrations, logos, decor)
├── App.tsx                 # Main component with responsive layout logic
├── index.css               # Tailwind setup & Custom CSS Variables
└── main.tsx                # Entry point
```

## ⚡️ Getting Started
I
1.  **Clone the repository**
    ```bash
    git clone [https://github.com/PProvidence/snapnet-assessment-design-replica.git](https://github.com/PProvidence/snapnet-assessment-design-replica.git)
cd design-replica    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```