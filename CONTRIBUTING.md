# Contributing to Ritz College Website Clone

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/Ritz-11A.git
   cd Ritz-11A
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Code Style Guidelines

### General Principles
- Write clean, readable, and maintainable code
- Follow existing code patterns and conventions
- Add comments for complex logic or non-obvious implementations
- Keep components focused and single-responsibility

### TypeScript
- Use TypeScript for all new components
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary

### React Components
- Use functional components with hooks
- Keep components small and reusable
- Use meaningful component and variable names
- Extract repeated logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use design tokens from the existing theme

### Animations
- Use Framer Motion for animations
- Keep animations smooth and performant
- Use `viewport={{ once: true }}` for scroll animations
- Stagger animations with appropriate delays

## Component Documentation

Add JSDoc comments to all new components:

```typescript
/**
 * ComponentName
 * 
 * Brief description of what the component does
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 */
export default function ComponentName() {
  // ...
}
```

## Commit Message Guidelines

Follow conventional commit format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style/formatting (no logic changes)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: Add search functionality to courses page
fix: Resolve mobile menu overflow issue
docs: Update README with deployment instructions
style: Format code with Prettier
refactor: Extract form validation into custom hook
```

## Pull Request Process

1. Create a new branch for your feature/fix
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit with descriptive messages

3. Push to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request with:
   - Clear title and description
   - Screenshots/videos for UI changes
   - Reference to any related issues

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code builds without errors (`npm run build`)
- [ ] No ESLint warnings (`npm run lint`)
- [ ] All pages load correctly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Animations are smooth and don't cause layout shifts
- [ ] Forms validate correctly
- [ ] Images load properly
- [ ] Navigation works across all pages

## Questions or Issues?

If you have questions or run into issues:
- Check existing issues on GitHub
- Review the README.md documentation
- Open a new issue with detailed information

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other community members

---

Thank you for contributing! 🎉
