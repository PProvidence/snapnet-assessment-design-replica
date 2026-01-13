# Finance Landing Page - Design Replication

A pixel-perfect replication of the provided Figma design ("Landing Page -2"), focusing on layout fidelity, responsive behavior, and modern CSS techniques.

## 🎨 Design Implementation Details

* **Pixel Perfection:** layout matches the 1440px design specification explicitly.
* **Responsive Strategy:**
    * **Desktop:** CSS Grid layout for precise 50/50 split.
    * **Mobile:** Flexbox column layout for optimized readability.
* **Typography:** Integrated **Overpass** font family to match the Figma design source.
* **Visual Effects:**
    * Custom CSS background blobs using absolute positioning and high blur values.
    * Smooth hover states and transitions for interactive elements.

## 🛠 Tech Stack

* **Framework:** React 19 + Vite + TypeScript
* **Styling:** Tailwind CSS v4 (CSS-first configuration)
* **Icons:** Lucide React
* **Font:** Overpass (Google Fonts)

## 📂 Project Structure

* `src/App.tsx`: Main layout component containing the Hero section, Navbar, and Footer.
* `src/index.css`: Tailwind v4 theme configuration, custom color variables (`--color-brand-green`), and font imports.

## ⚡️ Getting Started

1.  **Install dependencies:**
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