# Shared research website preview

Review branch: `design/solar-lunar-preview`. The current homepage and Docs are unchanged.

## Preview routes

- `/solar-preview`: Apollo content with restrained red accents.
- `/lunar-preview`: Diana content with restrained blue accents.
- `/`: existing Apollo homepage for comparison.

Both preview routes render the same `src/components/Celestial` component. Project content lives in `src/data/celestial.ts`; colors are CSS variables selected by `data-project`. The revision uses text wordmarks and original research figures; decorative spheres, orbital graphics and proposed sun/moon marks have been removed. No research figure is redrawn. Route names are retained so existing preview links keep working.

## Template shortlist

Inspected 26 October 2026. These are references, not vendored source templates.

| Candidate | Useful qualities | Tradeoff for this project |
| --- | --- | --- |
| [Clarity](https://shikun.io/projects/clarity) | Modular explanations, wide original figures, interactive research presentation | Best narrative fit; translate the approach into existing Docusaurus components |
| [Academic Project Page / Nerfies family](https://github.com/eliahuhorwitz/Academic-project-page-template) | Clear paper title, resource buttons, media and citation | Strong paper-page foundation; less suited to a project with extensive Docs without adaptation |
| [Academic Project Astro](https://github.com/RomanHauksson/academic-project-astro-template) | MDX content and interactive figure/tab components | Attractive for a standalone paper page, but migration would add work and duplicate the current Docs stack |

The preview uses an independently implemented editorial layout: resource links, overview, interactive component explorer, workflow code, paper/citation and companion project. It uses the title/resource hierarchy of [Nerfies](https://nerfies.github.io/), the figure-led presentation of [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/), and the restrained typography of [Distill](https://distill.pub/). Red and blue accents distinguish the projects without decorative celestial graphics. Links use plain labels; figure controls explicitly say “Enlarge figure.” No third-party HTML, CSS, fonts or template assets are copied, and there is no framework migration.

## Content provenance

- Apollo website main snapshot: `3c336f731493c534cd1dea3992be493b1055813c`. Overview, three feature descriptions, three original figures and Quick Start commands are taken from that checkout. Quick Start is an unchanged content snapshot, not a claim of new execution validation.
- Apollo public paper: [arXiv:2510.06261v2](https://arxiv.org/abs/2510.06261v2), revised 10 March 2026. Title and author order follow arXiv. This preview introduces no new performance claims.
- Diana website review snapshot: `ea7999461b20dc2844f1c812976e48afa9da6ebf`, including the paper-checked memory scope. Quick Start follows README `5721533be9c1d66a2e37c6dadc99b0c6ce284c90`.
- Diana public paper: [arXiv:2610.20675v1](https://arxiv.org/abs/2610.20675v1). The blue route uses Diana's own title, original figures, examples and citation. It is a design preview, not an Apollo page relabeled as Diana.
- `static/img/twin/` contains exact copies of Diana's existing figures; provenance and checksums are recorded in `static/img/twin/SOURCES.json`.

The Diana content is a versioned preview snapshot. Before production adoption, move the shared component into the Diana repository and bind it to that repository's canonical content; do not maintain two independent production copies.

## Interactions

1. Switch between the Apollo and Diana previews.
2. Select a framework component to change its description, process steps and original figure.
3. Open original figures in a native dialog; Escape closes it and restores focus.
4. Choose workflow code examples and copy the displayed code.
5. Expand installation prerequisites, authors and BibTeX; copy citations.
6. Use section navigation and the existing Paper / GitHub / Docs links.

All interactions are browser-local; there are no model requests or fabricated live execution results. Motion is restrained and reduced-motion preferences are respected. Preview routes are marked `noindex, nofollow`.

## Local validation

Dependencies and build output are kept on D: in this session. In a normal checkout:

```sh
npm ci
npm run typecheck
npm run build
npm run serve -- --port 18767
```

Open `/solar-preview` and `/lunar-preview`. This branch does not alter the default homepage, merge to main or deploy production.

Validation on 26 October 2026: TypeScript and production build passed; all copied Diana images match their source bytes and Apollo workflow commands match the existing Quick Start. Browser checks covered component switching, figure enlargement/Escape, code switching/copying, separate Diana content, and 320/390 px narrow-screen layouts. No new model experiments were performed.
