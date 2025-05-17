# Portfolio Development Plan

## Phase 1: Setup & Basic Structure

- [ ] Verify Shadcn UI installation and configuration.
- [x] Modify `globals.css` to set the default theme to "slate" (blueish gray).
- [x] Create basic layout components (e.g., Navbar, Footer).
- [x] Create main page sections (e.g., Hero, About, Experience, Projects, Skills, Education, Contact).

## Phase 2: Content Population (from `resume.md`)

- [x] Parse or manually extract information from `resume.md`.
- [x] Populate Hero Section: Name, current role/aspirations.
- [x] Populate About Section: Personal Statement.
- [x] Populate Experience Section: Work Experience, achievements.
- [x] Populate Projects Section: Personal/Work Projects.
- [x] Populate Skills Section: Programming, Software, Investment Analysis, Soft Skills.
- [x] Populate Education Section: Degrees, certifications.
- [x] Populate Contact Section: Email, LinkedIn, Website.
- [x] Refactor page sections into individual components.

## Phase 3: Styling & Refinements

- [x] Apply Shadcn UI components for a professional look and feel.
- [x] Navbar Enhancements: Sticky, mobile menu, active link styling, smooth scroll.
- [x] Scroll-triggered Animations for Sections:
  - Apply fade-in or slide-in effects (e.g., `animate-fadeInUp` from `tw-animate-css`) to each main section.
- [ ] Hover Effects & Micro-interactions:
  - Add subtle hover effects to interactive elements (Cards, Badges, Buttons).
- [ ] Typography and Spacing Review:
  - Ensure consistency and adjust for visual hierarchy.
- [ ] Visual Polish & Consistency:
  - Review icon usage, card styling, section backgrounds.
- [ ] Responsive Design Deep Dive:
  - Thoroughly test and refine for key breakpoints.
- [ ] Ensure responsiveness across different devices. (Covered by "Responsive Design Deep Dive")
- [ ] Add subtle animations or transitions for a modern touch (using `tw-animate-css`). (Covered by specific animation tasks)
- [ ] Refine typography, spacing, and overall visual hierarchy. (Covered by "Typography and Spacing Review")
- [ ] Implement a dark mode toggle (optional, based on progress and preference). (Moved to Phase 4)

## Phase 4: Final Touches

- [ ] Optimize SEO with appropriate metadata in `layout.tsx`. (Partially done with title/desc)
- [ ] Add a favicon.
- [ ] Dark Mode Toggle (Optional).
- [ ] Performance Check.
- [ ] Conduct thorough testing and fix any bugs.
- [ ] Review and finalize the portfolio.
- [x] Update `PLAN.md` to reflect completed tasks.
