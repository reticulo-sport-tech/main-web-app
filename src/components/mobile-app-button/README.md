Mobile App Buttons
==================

Provides store badge buttons used on product pages (e.g., Radlo).

Components
----------

- `GooglePlayButton`
- `AppStoreButton`
- `AppGalleryButton` (Huawei)

Props
-----

- `url`: string — destination store link
- `theme`: 'light' | 'dark' — badge variant to match background
- `width`/`height`: number — pixel dimensions
- `className`: optional string

Example
-------

```
<GooglePlayButton url={APKUrl} width={200} height={64} theme="dark" />
<AppStoreButton url={IOSUrl} width={200} height={64} theme="dark" />
```

