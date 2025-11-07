# Claude.md — Development Instructions

## Project Context
This project is a **Next.js** web application designed for a **luxury gala event** organized by a **high-end resort in Puerto Rico**.  
The purpose of the site is to communicate **elegance**, **prestige**, and **exclusivity** while maintaining a **modern and minimalist visual identity**.

---

## Technical Requirements

### 1. Framework and Styling
- Use **Next.js (latest stable version)** with the App Router structure (`src/app/`).
- Use **Tailwind CSS** for all styling.
- All components and pages must be **fully responsive**, using the responsive modifiers `sm:`, `md:`, `lg:`, and `xl:` for layout adjustments.
- Follow **modern best practices** for all frameworks, libraries, and TypeScript usage.

---

### 2. Design and Aesthetic
- The overall look and feel should be **luxurious and prestigious**, appealing to **high-class audiences**.
- Maintain a **minimalist design** with **refined and intentional visual details** that enhance the sense of exclusivity.
- **Do not use emojis.**
- For any icon needs, use **React Icons** only:  
  [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- Define a **consistent color palette** in the Tailwind configuration, with the following color roles:
  - `primary`
  - `secondary`
  - `tertiary`
  - `quaternary`
  - `quinary`
  
  This ensures consistent branding and a cohesive design across the platform.

---

### 3. Code Structure
Follow a **modular architecture** with clearly separated components and logic.

#### Recommended File Structure
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│ ├── utils/
│ │ └── (utility files for shared logic)
│ ├── components/
│ └── (individual reusable components)
├── public/
│ └── (images, icons, and static assets)


#### Code Guidelines
- Divide all reusable UI elements into **individual components** inside `/src/app/components/`.
- Create a `/src/app/utils/` directory for shared **functions and logic** that are reused throughout the project.
- Follow the **DRY principle (Don’t Repeat Yourself)** at all times.
- Use clear and descriptive names for all files, functions, and components.

---

### 4. Components and Modal Behavior
- Before creating any component or UI element, **verify its availability** at [https://ui.shadcn.com/](https://ui.shadcn.com/).  
  Use and customize components from **shadcn/ui** when possible.
- Every **modal** must include a **universal close handler** that allows the user to close it by clicking outside the modal area.  
  This ensures a **user-friendly and accessible** experience.

---

### 5. Images and Responsiveness
- All images must be properly scaled and optimized for each screen type:
  - Mobile phones  
  - Tablets  
  - Laptops  
  - Desktop monitors  
  - Full-screen TVs
- Use **responsive image handling** to maintain quality, aspect ratio, and composition on all devices.

---

### 6. Development Standards
- Use **TypeScript** for type safety.
- Use **functional components** with React Hooks where appropriate.
- Maintain **semantic HTML**, **accessibility standards (WCAG)**, and consistent **code formatting**.
- Keep indentation, class naming, and file structure **clean and organized**.
- Apply **modern React and Next.js patterns**, avoiding deprecated methods.
- Always prefer reusable and composable code over inline duplication.

---

## Objective Summary for the LLM
You are tasked with generating a **Next.js application** using **Tailwind CSS** that presents a **luxurious and minimalist** web experience for a **resort gala event in Puerto Rico**.  
The application must:
- Be fully responsive across all devices.  
- Use modular, clean, and reusable code.  
- Maintain consistent branding via color configuration.  
- Ensure accessibility and visual refinement.  
- Follow best practices and latest standards in modern web development.

Your output should result in a **visually stunning, luxury-inspired website** that reflects **prestige and sophistication**, while being technically robust and user-friendly.
