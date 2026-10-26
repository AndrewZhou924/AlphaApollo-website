# Apollo homepage content coverage

Compared with the rendered homepage sources at `3c336f731493c534cd1dea3992be493b1055813c` on 26 October 2026. This is a coverage check against the existing website, not a fresh scientific or model-execution validation.

| Existing homepage content | Preview location | Check |
| --- | --- | --- |
| Project title, subtitle, Paper and GitHub | Hero | Preserved |
| Full introduction, including multi-turn SFT/RL, PPO/GRPO/DAPO, evaluation pipelines and extensible environments/tools | Overview below the original figure | Exact normalized text match |
| Three Key Features descriptions | Interactive Framework section | Original descriptions retained |
| Three feature figures and detailed-page links | Interactive Framework section | Same image files and destinations |
| Question 1–3 and Followup 1–3 | Recorded-demo selector | All six original prompt strings and GIF paths match; math rendering retained |
| GIF display | Explicit Play / Stop controls | Loaded only on request; selecting another demo stops the previous recording |
| Installation | Quick start / Installation & prerequisites | Exact command match |
| Reasoning, learning and evolution commands | Quick start code tabs | All three code blocks match |
| Issue link, contact names/emails, copyright | Footer | Preserved from the original site configuration |
| Documentation and detailed feature pages | Existing routes | Unchanged |

The earlier preview omitted the six demos, shortened the introduction, and omitted the contact footer. This revision restores that coverage. It does not claim every original sentence was previously migrated.

The unused `features` and `codeExamples` arrays and unused imports in `src/pages/index.tsx` are not rendered by the original homepage. In particular, illustrative `model()` / `load_data(PATH)` snippets are not promoted to runnable API examples. The actual published Quick Start remains the source of executable examples.

Additional preview content consists of the overview figure, publication/citation block, paired-project navigation and workflow summaries; provenance is in `CELESTIAL-PREVIEW.md`.

## Typography and references

- Removed the invented hero slogans and repeated uppercase section labels.
- Self-hosted Newsreader variable font for project/section headings; Manrope variable font for body/UI. Both are from Google Fonts under the SIL Open Font License; licenses and checksums are in `static/fonts/`.
- Main desktop paragraphs are 18 px, weight 500, with darker text; narrow-screen body text is 16 px. Captions and metadata are subordinate but readable.
- Nerfies (https://nerfies.github.io/): paper-title/resource hierarchy.
- Diffusion Policy (https://diffusion-policy.cs.columbia.edu/): original research figures and demonstration content.
- Distill (https://distill.pub/): editorial hierarchy, not a copied paper-page template.

The font pairing, red/blue colors and earlier slogan were our own design choices, not requirements or assets copied from those references.
