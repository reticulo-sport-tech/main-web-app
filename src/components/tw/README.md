Tailwind Primitives (tw)
=======================

`TwProduct`
-----------

- A centered product header block with optional `icon`, `simpleDescription`, and `description`.
- Wraps arbitrary children (feature lists, CTAs, etc.).
- Example:

```
<TwProduct name="Studio" icon={<IoAnalyticsOutline />} simpleDescription="AI Video Analytics">
  ...children...
</TwProduct>
```

`FeatureSection`
----------------

- Previously used for image-and-text split sections; now the site prefers compact icon lists.
- You can still use it for visual sections with `featureUrl` images.

Dark Mode
---------

- When building new cards, use:
  - `bg-white dark:bg-slate-800`
  - `border-slate-200 dark:border-slate-700`
  - Title: `text-slate-900 dark:text-white`
  - Body: `text-slate-600 dark:text-slate-300`

