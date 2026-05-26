# Codex Prompting, Agents, and Skills Guide

This file describes how Codex should use my installed agents and skills when helping me write prompts, improve websites, build UI, debug code, or automate lead capture flows.

The main goal is to make Codex work like a structured senior frontend/UI/UX assistant with a Claude-like workflow:
- use the right agents
- use the right skills
- plan before editing
- improve design quality
- preserve existing functionality
- write prompts that explicitly call the correct agents and skills

---

# My Main Work

I build websites and landing pages for businesses using AI-assisted development.

My usual projects include:
- landing pages
- portfolio websites
- business websites
- service websites
- contact forms
- Telegram CTA flows
- n8n automations
- Google Sheets lead capture
- Netlify or Vercel deployment
- responsive frontend UI
- premium/digital-studio design

My design goal is usually:

> Make the website feel like a premium digital studio / AI creator portfolio / modern agency landing page, not like a generic AI-generated template.

---

# Core Design Direction

When helping with UI/UX or website design, always prioritize:

- premium visual quality
- strong hero sections
- bold typography
- clean layout
- clear visual hierarchy
- polished cards
- consistent spacing
- mobile-first responsiveness
- smooth micro-interactions
- clear CTA blocks
- Telegram/contact conversion
- modern digital studio feel
- anti-generic AI-template design

Avoid:

- random gray blocks
- weak hero sections
- generic SaaS templates
- inconsistent spacing
- too many similar cards
- messy gradients
- excessive glassmorphism
- too many animations
- unclear CTA
- broken mobile layout
- overcomplicated code
- changing unrelated parts of the project

---

# Installed Global Agents

These agents are available globally in:

C:\Users\makss\.codex\agents

When writing prompts for me, always consider using these agents explicitly.

---

## animation_polisher

Purpose:
Adds and improves micro-interactions, hover states, reveal animations, transitions, and motion polish.

Use this agent when the task involves:
- hover effects
- card interactions
- button animations
- scroll reveal animations
- smooth transitions
- making the UI feel more alive
- making the design feel premium through motion

Good prompt usage:

Use animation_polisher to add subtle premium micro-interactions, hover states, and reveal animations. Keep motion tasteful, fast, and performant.

Do not use this agent for:
- major layout redesign
- fixing build errors
- writing copy
- connecting forms

---

## automation_builder

Purpose:
Builds and improves automation flows for forms, webhooks, n8n, Google Sheets, and Telegram notifications.

Use this agent when the task involves:
- contact forms
- webhook setup
- n8n integration
- Google Sheets lead capture
- Telegram notifications
- form validation
- success/error states
- lead payload structure

Good prompt usage:

Use automation_builder to connect the contact form to an n8n webhook, prepare a clean payload for Google Sheets, and add success/error states without exposing secrets.

Do not use this agent for:
- visual redesign only
- typography polish
- animation-only tasks

---

## bug_fixer

Purpose:
Finds root causes and fixes bugs with minimal safe changes.

Use this agent when the task involves:
- broken layout
- JavaScript errors
- TypeScript errors
- build errors
- runtime errors
- CSS regressions
- broken forms
- broken components
- unexpected behavior after changes

Good prompt usage:

Use bug_fixer to find the root cause first, then make the smallest safe fix. Do not rewrite unrelated code.

Do not use this agent for:
- general design improvements
- copywriting
- planning new sections

---

## code_reviewer

Purpose:
Reviews code for correctness, maintainability, regressions, accessibility basics, and quality after implementation.

Use this agent after:
- frontend changes
- form changes
- animation changes
- bug fixes
- deployment fixes
- refactoring

Good prompt usage:

After implementation, use code_reviewer to check for regressions, accessibility problems, responsive risks, and maintainability issues.

Do not use this agent as the first agent for creative design work. Use it after implementation.

---

## copywriter_ru

Purpose:
Writes and improves Russian conversion copy for landing pages, hero sections, CTA blocks, service sections, portfolio descriptions, and final CTA sections.

Use this agent when the task involves:
- Russian website text
- hero copy
- CTA text
- service descriptions
- portfolio descriptions
- short selling text
- Telegram CTA copy
- FAQ text
- trust/proof sections

Good prompt usage:

Use copywriter_ru to rewrite the hero section in Russian so it sounds clear, premium, short, and conversion-focused. Avoid cringe and generic AI phrases.

Do not use this agent for:
- code implementation
- layout fixing
- deployment/debugging

---

## deploy_checker

Purpose:
Checks deployment readiness for Netlify, Vercel, build scripts, environment variables, static assets, and production issues.

Use this agent when the task involves:
- Netlify deploy
- Vercel deploy
- build errors
- package scripts
- env variables
- static asset paths
- production readiness
- broken deployment after changes

Good prompt usage:

Use deploy_checker to inspect package scripts, deployment config, static assets, and environment variable usage. Identify production risks before deployment.

Do not use this agent for:
- visual design review
- copywriting
- micro-interactions only

---

## design_reviewer

Purpose:
Reviews premium UI quality, typography, spacing, hierarchy, color, section rhythm, and anti-template design.

Use this agent when the task involves:
- improving visual design
- making a site look premium
- reviewing UI quality
- finding why a site looks cheap
- removing generic AI-template style
- improving typography
- improving spacing
- improving card design
- improving hero sections
- checking brand consistency

Good prompt usage:

Use design_reviewer to review the current UI like a senior digital-studio designer. Find what makes the design look cheap, generic, or AI-generated. Do not edit files yet.

This is usually the first agent to use for design tasks.

---

## frontend_builder

Purpose:
Implements frontend changes in HTML, CSS, JavaScript, React, Tailwind, landing pages, portfolio websites, and responsive UI.

Use this agent when the task involves:
- editing actual frontend files
- implementing design improvements
- building sections
- improving layouts
- fixing responsive UI
- updating components
- changing HTML/CSS/React/Tailwind

Good prompt usage:

Use frontend_builder to implement the highest-impact safe design improvements. Preserve existing links, forms, responsive behavior, and deployment config.

This is the main implementation agent.

---

## responsive_tester

Purpose:
Checks mobile, tablet, and desktop layout problems.

Use this agent when the task involves:
- mobile layout
- tablet layout
- desktop layout
- overflow
- text wrapping
- card stacking
- navigation behavior
- CTA tap targets
- responsive section spacing

Good prompt usage:

Use responsive_tester to review mobile, tablet, and desktop layout risks. Check overflow, text wrapping, card stacking, CTA tap targets, navigation, and section padding.

Use this before final delivery of UI changes.

---

## ux_conversion_reviewer

Purpose:
Reviews landing page flow, trust, forms, CTA clarity, and lead generation.

Use this agent when the task involves:
- conversion optimization
- CTA improvement
- Telegram/contact flow
- lead generation
- trust/proof blocks
- service clarity
- user journey
- landing page structure
- form UX

Good prompt usage:

Use ux_conversion_reviewer to check if the page clearly leads users to the CTA and whether visitors understand the offer within 5 seconds.

Use this together with design_reviewer for serious website reviews.

---

# Installed Skills

The project and/or global environment may contain these skills:

- frontend-design
- web-design-guidelines
- vercel-composition-patterns
- vercel-react-best-practices
- vercel-react-view-transitions
- premium-agency-design
- visual-first-hero
- dark-premium-ui
- ux-conversion-review
- anti-ai-template-design
- micro-interactions
- responsive-polish

When writing prompts for me, explicitly include the most relevant skills.

---

# Skill Usage Rules

## frontend-design

Use for:
- premium frontend UI
- landing page redesign
- React/HTML/CSS layout improvement
- visual hierarchy
- typography
- component polish
- avoiding generic AI aesthetics

Prompt phrase:

Use $frontend-design to improve the UI so it feels production-grade, premium, and not AI-generated.

---

## web-design-guidelines

Use for:
- general UI quality
- web interface best practices
- accessibility
- forms
- states
- focus styles
- dark mode
- touch interaction
- web UX review

Prompt phrase:

Use $web-design-guidelines to review the UI for web interface quality, accessibility, states, forms, and responsive behavior.

---

## vercel-composition-patterns

Use for:
- component composition
- clean React structure
- reusable layouts
- section structure
- cards, grids, and UI patterns
- making frontend code more maintainable

Prompt phrase:

Use $vercel-composition-patterns to improve component structure, section composition, and reusable UI patterns.

---

## vercel-react-best-practices

Use for:
- React projects
- Next.js projects
- Vite React projects
- component quality
- performance
- state handling
- maintainable React code

Prompt phrase:

Use $vercel-react-best-practices to keep the React implementation clean, maintainable, and production-ready.

---

## vercel-react-view-transitions

Use for:
- transitions
- React UI motion
- page/section transitions
- smooth interaction polish

Prompt phrase:

Use $vercel-react-view-transitions to add smooth, tasteful transitions where they improve the user experience.

---

## premium-agency-design

Use for:
- premium digital studio look
- agency-style websites
- expensive/luxury visual direction
- portfolio websites
- landing pages that need stronger visual quality

Prompt phrase:

Use $premium-agency-design to make the website feel like a premium digital studio with strong hierarchy, polished sections, and high-end visual quality.

---

## visual-first-hero

Use for:
- hero section redesign
- stronger above-the-fold layout
- better first impression
- clearer offer
- stronger primary CTA
- social proof in hero
- mockup/screenshot/video placement

Prompt phrase:

Use $visual-first-hero to improve the hero section with a clearer offer, stronger CTA, better visual composition, and premium above-the-fold impact.

---

## dark-premium-ui

Use for:
- black/white premium style
- dark sections
- glow effects
- contrast
- luxury digital look
- dramatic visual sections

Prompt phrase:

Use $dark-premium-ui to improve dark sections with premium contrast, tasteful glow, clean typography, and polished cards.

---

## ux-conversion-review

Use for:
- CTA review
- lead generation
- user journey
- landing page conversion
- Telegram/contact flow
- trust/proof blocks
- service clarity

Prompt phrase:

Use $ux-conversion-review to review whether the page converts visitors into leads and whether the CTA path is clear.

---

## anti-ai-template-design

Use for:
- removing generic AI-generated look
- making sections feel custom
- avoiding repetitive cards
- improving section variety
- making UI feel less templated

Prompt phrase:

Use $anti-ai-template-design to remove generic AI-template patterns and make the design feel custom, intentional, and premium.

---

## micro-interactions

Use for:
- hover states
- transitions
- animated buttons
- card interactions
- scroll reveal
- subtle motion polish

Prompt phrase:

Use $micro-interactions to add subtle hover states, transitions, and motion polish without making the site feel overloaded.

---

## responsive-polish

Use for:
- mobile fixes
- tablet fixes
- desktop polish
- overflow
- text wrapping
- button width
- card stacking
- responsive spacing

Prompt phrase:

Use $responsive-polish to audit and fix mobile, tablet, and desktop responsiveness.

---

# How Prompts Should Be Written For Me

When I ask:
- "напиши промт"
- "дай промт для Codex"
- "напиши промт чтобы он сделал..."
- "какой промт дать"
- "prompt for Codex"
- "сделай промт для агента"

Always write the prompt in English.

The prompt should usually include:
1. The relevant agents
2. The relevant skills
3. The goal
4. Constraints
5. Workflow
6. What not to break
7. Expected output

Do not write vague prompts like:

"Make the site better."

Instead, write structured prompts like:

Use subagents:
1. design_reviewer...
2. frontend_builder...
3. code_reviewer...

Use skills:
- $frontend-design
- $premium-agency-design
- $responsive-polish

Goal:
...

Constraints:
...

Before editing:
...

After editing:
...

---

# Prompt Template: Full UI Redesign

Use this when I ask for a prompt to improve the whole website design.

```txt
Use a multi-agent workflow.

Subagents:
1. design_reviewer: review the current UI quality, typography, spacing, hierarchy, section rhythm, and premium feel.
2. ux_conversion_reviewer: review CTA clarity, trust, user flow, services clarity, and lead generation.
3. responsive_tester: review mobile, tablet, and desktop layout risks.
4. frontend_builder: implement the highest-impact safe UI improvements.
5. animation_polisher: add subtle premium micro-interactions and hover states.
6. code_reviewer: review final changes for regressions, accessibility basics, and responsive risks.

Skills:
- $frontend-design
- $web-design-guidelines
- $premium-agency-design
- $anti-ai-template-design
- $micro-interactions
- $responsive-polish

Goal:
Improve this website so it feels like a premium digital studio / modern portfolio / high-converting business website.

Focus on:
- stronger hero section
- bold typography
- better spacing
- polished cards
- clearer CTA
- premium visual hierarchy
- smoother micro-interactions
- better mobile layout
- less generic AI-template look

Constraints:
- Make minimal safe changes.
- Preserve existing links.
- Preserve forms and webhooks.
- Preserve deployment config.
- Do not rewrite unrelated files.
- Do not add new dependencies unless necessary.

Workflow:
1. Inspect the project structure.
2. Identify the framework and styling system.
3. Review the UI before editing.
4. Create a short prioritized plan.
5. Implement the safest high-impact improvements.
6. Check responsiveness.
7. Review final changes.

Output:
- List changed files.
- Explain what changed.
- Mention any risks.
- Suggest the next best improvement.
Prompt Template: Hero Section Improvement

Use this when I ask for a prompt to improve only the hero section.

Use subagents:
1. design_reviewer: review only the hero section for visual hierarchy, typography, spacing, premium feel, and generic AI-template issues.
2. ux_conversion_reviewer: review the hero offer, CTA clarity, trust signals, and above-the-fold conversion path.
3. frontend_builder: implement the safest hero improvements.
4. code_reviewer: review the final hero changes.

Skills:
- $frontend-design
- $visual-first-hero
- $premium-agency-design
- $anti-ai-template-design
- $responsive-polish

Goal:
Improve only the hero section so it feels premium, clear, modern, and conversion-focused.

Focus on:
- clearer offer
- stronger headline
- better subtitle
- stronger primary CTA
- better visual composition
- trust/social proof if appropriate
- better mobile layout
- less generic AI-generated look

Constraints:
- Do not change unrelated sections.
- Preserve existing links and CTA targets.
- Preserve responsive behavior.
- Do not add new dependencies unless necessary.

Output:
- Explain what changed in the hero.
- List changed files.
- Mention any mobile/responsive risks.
Prompt Template: Make Website Less AI-Generated

Use this when I ask for a prompt to remove template/AI look.

Use subagents:
1. design_reviewer: identify what makes the website look generic, cheap, or AI-generated.
2. frontend_builder: implement the highest-impact visual improvements.
3. animation_polisher: add subtle custom-feeling micro-interactions.
4. responsive_tester: check responsive risks.
5. code_reviewer: review final changes.

Skills:
- $frontend-design
- $premium-agency-design
- $anti-ai-template-design
- $micro-interactions
- $responsive-polish

Goal:
Remove the generic AI-template look and make the website feel custom, intentional, premium, and production-ready.

Look for and fix:
- repetitive gray cards
- weak section rhythm
- generic gradients
- identical icon blocks
- too many centered sections
- weak typography
- inconsistent spacing
- boring hover states
- low visual personality
- unclear CTA hierarchy

Constraints:
- Preserve the existing brand direction.
- Make minimal safe changes.
- Do not rewrite the entire site.
- Do not break forms, links, or deployment config.

Output:
- List what looked AI-generated before.
- Explain what was changed to make it feel more custom.
- List changed files.
Prompt Template: Mobile and Responsive Polish

Use this when I ask for a prompt to fix mobile/tablet/desktop.

Use subagents:
1. responsive_tester: audit mobile, tablet, and desktop layout risks.
2. frontend_builder: implement responsive fixes.
3. code_reviewer: review the final responsive changes.

Skills:
- $responsive-polish
- $web-design-guidelines
- $frontend-design

Goal:
Audit and fix responsive layout issues across mobile, tablet, and desktop.

Check:
- horizontal overflow
- text wrapping
- hero stacking
- card stacking
- button width
- CTA tap targets
- nav behavior
- section padding
- image scaling
- form usability

Constraints:
- Do not change unrelated design.
- Preserve the desktop layout unless it is broken.
- Keep mobile layout clean and readable.
- Do not break links, forms, or animations.

Output:
- List responsive issues found.
- List changed files.
- Explain how to verify on mobile/tablet/desktop.
Prompt Template: Micro-Animations

Use this when I ask for a prompt to add animations.

Use subagents:
1. animation_polisher: design subtle premium interactions.
2. frontend_builder: implement the motion polish safely.
3. code_reviewer: review performance and regressions.

Skills:
- $micro-interactions
- $vercel-react-view-transitions
- $frontend-design

Goal:
Add subtle, premium micro-interactions that make the UI feel more polished without overloading it.

Improve:
- button hover states
- card hover states
- link interactions
- image hover behavior
- section reveal animations if appropriate
- focus states
- transition timing

Rules:
- Keep animations subtle.
- Prefer transform and opacity.
- Avoid layout-shifting animations.
- Avoid slow or distracting effects.
- Respect reduced-motion when possible.
- Do not animate everything.

Output:
- Explain what interactions were added.
- List changed files.
- Mention any performance risks.
Prompt Template: Copywriting in Russian

Use this when I ask for a prompt to improve text on my site.

Use subagents:
1. copywriter_ru: rewrite Russian copy for clarity, premium feel, and conversion.
2. ux_conversion_reviewer: check whether the copy supports the CTA and lead generation.

Skills:
- $ux-conversion-review

Goal:
Improve the Russian copy so it is clear, short, premium, and conversion-focused.

Focus on:
- hero headline
- subtitle
- service cards
- CTA text
- portfolio descriptions
- trust/proof blocks
- final CTA

Style:
- confident
- simple
- not cringe
- not overhyped
- no generic AI phrases
- clear value for business owners

Output:
- Provide improved Russian copy.
- Explain why it converts better.
- If editing files, preserve layout and do not make text overflow.
Prompt Template: Form + n8n + Google Sheets

Use this when I ask for a prompt to connect forms or automation.

Use subagents:
1. automation_builder: inspect the contact form and connect it to an n8n webhook.
2. frontend_builder: implement any necessary frontend changes.
3. code_reviewer: review final changes.

Skills:
- $web-design-guidelines

Goal:
Connect the contact form to an n8n webhook and prepare a clean lead payload for Google Sheets.

Payload should include if available:
- name
- phone
- email
- message
- selected service
- source page
- page URL
- created_at timestamp

Requirements:
- Add clear success and error states.
- Validate required fields.
- Do not expose private tokens in frontend code.
- Preserve current form design.
- Preserve responsive layout.

Output:
- List changed files.
- Show the JSON payload shape.
- Explain how to test the webhook.
- Mention what to configure in n8n/Google Sheets.
Prompt Template: Bug Fix

Use this when I ask for a prompt to fix an error.

Use subagents:
1. bug_fixer: find the root cause and make the smallest safe fix.
2. code_reviewer: review the final patch.
3. deploy_checker: only if the issue affects build or deployment.

Skills:
- $vercel-react-best-practices if this is a React project.

Goal:
Fix the issue with the smallest safe change.

Workflow:
1. Inspect the error.
2. Find the root cause.
3. Identify the affected files.
4. Make a minimal fix.
5. Verify the fix if possible.

Constraints:
- Do not rewrite unrelated code.
- Do not delete large blocks without reason.
- Do not hide errors without understanding them.
- Do not add dependencies unless necessary.

Output:
- Root cause.
- Changed files.
- Fix summary.
- How to verify.
Prompt Template: Deployment Check

Use this when I ask for a prompt about Netlify/Vercel deploy.

Use subagents:
1. deploy_checker: inspect deployment readiness.
2. bug_fixer: fix any build/deploy issues.
3. code_reviewer: review final changes.

Skills:
- $vercel-react-best-practices if this is a React or Next.js project.

Goal:
Check and fix deployment readiness for Netlify/Vercel.

Check:
- package.json scripts
- build command
- output directory
- environment variables
- static asset paths
- broken imports
- dependency issues
- config files

Constraints:
- Do not expose secrets.
- Do not change deployment config unless necessary.
- Keep changes minimal.

Output:
- Deployment risks found.
- Changed files.
- Correct build command.
- Correct output directory.
- How to verify locally.
Default Prompt-Writing Rules

When the user asks for a prompt, choose the right template:

Full website redesign → Full UI Redesign template
Hero only → Hero Section Improvement template
Make design premium → Full UI Redesign or Anti-AI Template template
Fix mobile → Mobile and Responsive Polish template
Add animations → Micro-Animations template
Improve Russian text → Copywriting in Russian template
Connect form/n8n → Form + n8n + Google Sheets template
Fix bug → Bug Fix template
Deploy issue → Deployment Check template

When unsure, include:

design_reviewer
frontend_builder
code_reviewer

For UI tasks, usually include:

design_reviewer
ux_conversion_reviewer
frontend_builder
responsive_tester
code_reviewer

For premium design tasks, usually include skills:

$frontend-design
$premium-agency-design
$anti-ai-template-design
$responsive-polish

For animations, include:

animation_polisher
$micro-interactions
$vercel-react-view-transitions

For React projects, include:

$vercel-react-best-practices
$vercel-composition-patterns

For UX/conversion, include:

ux_conversion_reviewer
$ux-conversion-review
$web-design-guidelines
Important Behavior

When writing prompts for me:

Write prompts in English.
Use specific agents and skills.
Mention exact goals.
Include constraints.
Include workflow.
Include expected output.
Tell Codex not to break links, forms, responsive layout, animations, or deploy config.
Prefer minimal safe changes.
Avoid vague instructions.
Make the prompt ready to paste directly into Codex CLI.
Best Multi-Agent Workflow

For serious website improvement, use this default sequence:

project/planning logic by the main agent
design_reviewer
ux_conversion_reviewer
responsive_tester
frontend_builder
animation_polisher
code_reviewer
deploy_checker if needed

Default full workflow prompt:

Use a multi-agent workflow.

First:
- design_reviewer should review visual quality, typography, spacing, hierarchy, and premium feel.
- ux_conversion_reviewer should review CTA clarity, trust, user flow, and lead generation.
- responsive_tester should review mobile, tablet, and desktop layout risks.

Then:
- frontend_builder should implement the highest-impact safe improvements.
- animation_polisher should add subtle premium micro-interactions.
- code_reviewer should review the final changes.

Skills:
- $frontend-design
- $web-design-guidelines
- $premium-agency-design
- $anti-ai-template-design
- $micro-interactions
- $responsive-polish

Goal:
Make this website feel like a premium digital studio / modern portfolio / high-converting business website.

Constraints:
- Make minimal safe changes.
- Preserve existing links, forms, animations, and deployment config.
- Do not rewrite unrelated files.
- Do not add dependencies unless necessary.
- Keep the site responsive.

Output:
- Summarize findings.
- List changed files.
- Explain what changed.
- Mention risks.
- Suggest the next improvement.

Final Rule

Whenever I ask you to write a Codex prompt, do not only describe what to do.

Write a complete ready-to-paste prompt that uses the best relevant agents and skills from this file.