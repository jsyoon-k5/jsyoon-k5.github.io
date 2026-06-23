# Homepage Editing Guide

This site is still a static GitHub Pages homepage. Most routine edits should happen in these files:

- `data/site-content.js`: profile text, publications, DOI/GitHub visibility, skills, miscellaneous text, and media URLs.
- `config/design.css`: colors, fonts, section spacing, layout widths, and border radii.
- `styles.css`: component styling. Edit this only when changing the structure or behavior of a section.
- `scripts/render-homepage.js`: rendering logic. Edit this only when adding a new content type.
- `assets/images/`: portraits, publication thumbnails, logos, and future image assets.
- `assets/pdfs/`: CV and future PDF files.

## Profile Links and CV

The CV button and update time are configured in `profile.cv` inside `data/site-content.js`:

```js
cv: {
    label: "Open CV",
    url: "assets/pdfs/CV.pdf",
    lastUpdatedLabel: "CV last updated",
    lastUpdated: "22 June 2026",
    useServedLastModified: true
}
```

When the site is served through a local or hosted HTTP server, the page tries to read the PDF's `Last-Modified` header. If the server does not expose it, the configured `lastUpdated` text is shown.

Other profile links, such as GitHub, are configured in `profile.links`.

## Publication Links

Each publication has a `links` object:

```js
links: {
    doi: { show: true, label: "DOI", url: "https://doi.org/..." },
    github: { show: true, label: "GitHub", url: "", placeholder: "GitHub project TBA" }
}
```

Use `show: false` to hide a link. For first-author project pages, keep `show: true` and leave `url` empty until the GitHub page is ready.

## Miscellaneous Media

The gaming entry is set to a 16:9 placeholder. Replace its `media` object in `data/site-content.js` with:

```js
media: {
    type: "image",
    url: "assets/images/your-image.png",
    alt: "Gameplay highlight"
}
```

or:

```js
media: {
    type: "video",
    url: "assets/videos/your-video.mp4"
}
```
