
# Update Header Logo Text Styling

## Summary
Split the header logo into two parts to match the reference style:
- **"MDIS"** in orange (primary color)
- **"Creative Labs"** in white/foreground color (same as "Design Studio" was)

## Changes Required

### File: `src/components/Navbar.tsx`

**Current code (line 41-45):**
```tsx
<a href="#hero" className="flex items-center gap-2 group">
  <span className="text-xl md:text-2xl font-heading font-bold text-gradient">
    MDIS Creative Labs
  </span>
</a>
```

**Updated code:**
```tsx
<a href="#hero" className="flex items-center gap-2 group">
  <span className="text-xl md:text-2xl font-heading font-bold text-primary">
    MDIS
  </span>
  <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
    Creative Labs
  </span>
</a>
```

## Technical Details

| Element | Color Class | Result |
|---------|-------------|--------|
| MDIS | `text-primary` | Orange (#e76d24) |
| Creative Labs | `text-foreground` | White/Light (95% white) |

- Font size remains: `text-xl md:text-2xl`
- Font family remains: `font-heading` (Sora)
- Font weight remains: `font-bold`
- The `gap-2` on the parent `<a>` tag creates proper spacing between the two words
