# Components and UI

## Introduction

This project uses shadcn/ui components built on top of Radix UI primitives and styled with TailwindCSS. All components are fully accessible and customizable.

## Available Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/button'

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card

Flexible card components for displaying content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

;<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here</CardContent>
</Card>
```

### Input

Form input component with consistent styling.

```tsx
import { Input } from '@/components/ui/input'

;<Input placeholder="Enter text..." />
```

## Adding New Components

To add new shadcn/ui components:

1. Install any required dependencies
2. Copy the component code to `src/components/ui/`
3. Update imports and styling as needed
4. Export from the component file

## Customization

Components can be customized by:

- Modifying the default styles in component files
- Updating TailwindCSS configuration
- Extending component variants using class-variance-authority
