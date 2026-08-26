# Full Audit Report

- URL: `https://acentraperu.com`
- Generated: `2026-08-26T16:31:54.599969`
- Overall score: `68/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 55 |
| Social Meta | 5 | 69 |
| Robots and Crawlers | 8 | 80 |
| Broken Links | 10 | 100 |
| Internal Links | 8 | 100 |
| Redirects | 3 | 100 |
| AI Search | 5 | 0 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 100 |
| Readability | 8 | 0 |
| Entity SEO | 5 | 0 |
| Link Profile | 7 | 75 |
| Hreflang | 5 | 0 |
| Content Uniqueness | 5 | 100 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | Schema | No Organization/Person entity found in JSON-LD. |  | Add Organization or Person schema with name, url, logo, and sameAs properties. |
| Critical | environment | 4 security headers missing | Missing headers reduce trust and can expose the site to browser/security risks. | Set security headers in `next.config.js` `headers()` or at your edge/CDN. |
| Critical | link_profile | 2 orphan page(s) with zero inbound internal links. |  | Add internal links from relevant content pages to these orphan pages. |
| Critical | security | 🔴 4 security headers missing — poor security posture |  |  |
| Critical | social | 🔴 Missing required: og:image |  |  |
| Warning | environment | No llms.txt found | AI crawlers and assistants have no curated machine-readable guidance for key pages. | Serve `/llms.txt` from `/public/llms.txt`. |
| Warning | environment | Social meta tags are incomplete | Missing OG/Twitter tags weakens social previews and share quality. | Use the Next.js Metadata API (`app/`) or `next/head` (`pages/`) for title/meta/OG/Twitter tags. |
| Warning | environment | Content readability is difficult | Long, complex text can reduce engagement and comprehension. | Rewrite key sections with shorter sentences (15-20 words), shorter paragraphs (2-4 sentences), and clearer subheadings. |
| Warning | readability | ⚠️ Content is difficult to read (Flesch: 0) — may reduce engagement |  |  |
| Warning | readability | ⚠️ 42.2% complex words (3+ syllables) — consider simplifying |  |  |
| Warning | robots | ⚠️ 11 AI crawlers not explicitly managed: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended |  |  |
| Warning | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Warning | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |
| Warning | security | ⚠️ HSTS missing includeSubDomains directive |  |  |
| Info | Wikipedia | No Wikipedia article found for 'Acentra'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `AIzaSyBcRWiOc6ExE8r6uC_wxKvtK6DMizQN9DA` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | sameAs | Missing sameAs link to LinkedIn (Strong KG signal). |  | Add 'linkedin.com' profile URL to sameAs array in your entity schema. |
| Info | sameAs | Missing sameAs link to Twitter/X (Strong KG signal). |  | Add 'x.com' profile URL to sameAs array in your entity schema. |

## Measurement Notes

1 checks returned errors or incomplete measurements; treat affected scores as directional.
