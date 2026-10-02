# CPC Website Redesign — Design Brief v2 (full staging spec)

Current live site: https://mycpcdoc.com/ — DO NOT modify. Build a separate STAGING site for a future controlled migration. Live URLs, forms, SEO metadata, redirects, analytics, tracking, phone numbers and indexed pages stay untouched until staging is approved.

## Brand message
- Primary: ADVANCED PAIN MEDICINE. PRECISE TREATMENT. A PATH BACK TO FUNCTION.
- Alt: "Precision Pain Medicine for a More Active Life." / "Advanced Interventional Pain Care. Focused on Function. Designed Around You."
- Use "Restoring Function"; never promise cures or guaranteed results; no exaggerated medical claims.
- Communicate: precision, minimally invasive, image-guided, neuromodulation, spine, nerve/joint, regenerative/biologic, multidisciplinary, biopsychosocial, technology, experience, compassion, education, quality of life.
- Feel: sophisticated specialty center, not a generic template. Premium without luxurious; clinical without cold; modern without experimental; professional without corporate; human without generic.
- Hierarchy: Advanced medicine → Expertise → Precision → Personalized care → Restoring function → Next step.

## Design direction
Premium medical, minimal, editorial, clinical, human, technology-forward. References: academic medical center, premium specialty clinic, med-tech company, private practice.
Avoid: stock doctor imagery, overly blue templates, cartoon illustrations, heavy gradients, huge rounded cards, cheap icons, excess animation, ER visual language, spa look, aggressive sales language.

## Colors
**UPDATE (user): palette is now black + cyan #3EDBF0 only** (implemented in assets/css/style.css via --navy=#0A0A0A black, --teal=#3EDBF0). Cyan is used for fills, icons, rules, and text on black; never as text on white (contrast). The list below is the superseded original palette.
Navy #102A43 (primary) · Teal #167C80 (secondary) · Sage #7BA7A0 (accent) · Off-white #F7F8F6 (bg) · White #FFFFFF · Text #17212B · Secondary text #5E6B75 · Border #DCE3E5 · Dark section #0D202B. Mostly neutral, controlled teal.

## Typography
Headings: Manrope / DM Sans / Plus Jakarta Sans. Body: Inter / Source Sans 3. Large, strong, compact.
H1 56/42/36px (desktop/tablet/mobile) · H2 44/36/30 · H3 24 · body 17px, line-height 1.7 · small 14.

## Layout
Max width 1200–1280px; page padding 32/24/20 (desktop/tablet/mobile); 12-col grid; generous whitespace; editorial sections.

## Header
Desktop: Logo · About · Conditions · Treatments · Patient Resources · For Referring Physicians · About Dr. Goswami; right: Call Office (559) 478-4757 + **Request a Consultation**. Sticky after scroll.
Mobile: Logo, menu icon, Call, Request Consultation. Sticky bottom action bar (Call / Request Consultation), large buttons, no tiny dropdowns, short forms.
Nav dropdowns — Conditions: Back Pain, Neck Pain, Sciatica, Spinal Stenosis, Nerve Pain, Joint Pain, Head & Neck Pain, Post-Surgical Pain. Treatments: Interventional Spine, Neuromodulation, Nerve & Joint Procedures, Regenerative Medicine, Minimally Invasive Procedures, Comprehensive Pain Management.

## Homepage sections
1. **Hero** — eyebrow "INTERVENTIONAL PAIN MEDICINE | FRESNO, CA"; H1 "Advanced Pain Medicine. Focused on Getting You Moving Again."; copy: California Pain Consultants provides advanced interventional pain care for spine, nerve, joint, and musculoskeletal conditions. Our approach combines precise diagnostics, minimally invasive procedures, neuromodulation, regenerative therapies, and comprehensive pain management. CTAs: Request a Consultation / Explore Treatments. Visual: authentic clinical portrait/practice imagery, or abstract anatomical/imaging-inspired visual; no cliché smiling-doctor stock. Subtle floating tags: Image-Guided Procedures, Neuromodulation, Minimally Invasive Care.
2. **Trust strip** — Fellowship-Trained Pain Medicine Specialist · Board-Certified Anesthesiology · Advanced Interventional Techniques · Fresno / Central Valley. No unverified statistics.
3. **Intro** — "Pain Is Complex. Your Treatment Should Be Personal." Chronic pain can affect movement, sleep, work, relationships, and everyday life. CPC takes a comprehensive approach to understanding where pain comes from and identifying appropriate treatment options. Split layout (editorial image left; text + 3 principles right: 01 Understand the source, 02 Choose the right intervention, 03 Build a path toward function). CTA: How We Approach Pain.
4. **Treatment categories** — "Advanced Treatments, Carefully Matched to Your Needs." Six cards (icon, category, short description, Explore arrow):
   01 Interventional Spine Care (epidural injections, facet procedures, medial branch blocks, radiofrequency, minimally invasive decompression)
   02 Neuromodulation (spinal cord stimulation, intrathecal pump, other appropriate options)
   03 Nerve & Joint Procedures (selective nerve root blocks, peripheral nerve blocks, SI joint procedures, trigger point injections)
   04 Regenerative & Biologic Therapies (prolotherapy, PRP-related where clinically appropriate, other offered options)
   05 Vertebral & Minimally Invasive Procedures (kyphoplasty, vertebroplasty, percutaneous procedures, other MIS spine)
   06 Comprehensive Pain Management (biopsychosocial, education, function-focused, multidisciplinary planning)
5. **Featured procedures** — "Precision Procedures. Designed Around the Source of Pain." Spinal Cord Stimulation (neuromodulation approach for selected chronic pain conditions); Radiofrequency Ablation (minimally invasive; targets selected nerves responsible for pain transmission); Epidural Steroid Injections (image-guided, selected spinal/nerve-related pain); Minimally Invasive Spine Procedures (address selected structural sources while minimizing tissue disruption). CTA: View All Treatments.
6. **Conditions** — "Pain Can Take Many Forms. We Evaluate and Treat a Broad Range of Pain Conditions." Searchable/filterable grid: Back, Neck, Sciatica, Spinal Stenosis, Radicular, Joint, Arthritis, Nerve, Head & Neck, Post-Surgical, Musculoskeletal, Chronic, Compression Fracture, other. CTA: View All Conditions.
7. **Physician** — "Meet Dr. Amitabh Goswami" / Fellowship-Trained Pain Medicine Specialist. Authentic portrait. Dr. Goswami is a fellowship-trained Pain Medicine specialist and diplomat of the American Board of Anesthesiology. His approach combines advanced diagnostics, interventional techniques, and multidisciplinary pain management with an emphasis on improving function and quality of life. CTAs: Meet Dr. Goswami / View Credentials & Experience. Only verified education, fellowship, publications, presentations, leadership. No fabricated credentials.
8. **CPC Approach** — "A More Complete Approach to Pain." 01 Listen · 02 Diagnose · 03 Treat · 04 Restore Function (descriptions: understand symptoms/history/goals; clinical evaluation + diagnostics to identify pain generators; select appropriate interventional, MIS, regenerative, neuromodulation and comprehensive options; meaningful improvement in movement, activity, confidence, quality of life).
9. **Technology/Innovation** (dark navy) — "Advancing the Science of Pain Medicine." CPC stays engaged with evolving technologies and advances in interventional pain medicine and neuromodulation. Authentic imagery only. Topics: neuromodulation, image-guided, MIS, emerging tech. CTA: Explore Our Approach.
10. **Patient experience** — "Care That Starts With Listening." Testimonial cards (large quote, first name/last initial if permitted, optional Google badge). Only with confirmed permission/compliance; never fabricate.
11. **Patient resources** — "Everything You Need Before Your Visit." Cards: New Patient Registration, Referral Forms, Procedure Instructions, Medicare/Insurance Information. CTA: Patient Resources.
12. **Referring physicians** — "A Clear Referral Path for Physicians." We work with referring physicians and healthcare professionals to provide specialized evaluation and interventional pain care for appropriate patients. Cards: Refer a Patient, Treatment Information, Clinical Communication, Contact Our Office. CTA: Physician Referral.
13. **FAQ** (accordion, "Questions Before Your Visit?") — what to bring; referral needed?; first consultation; how treatment options are determined; after a procedure; office location; how to request appointment. No medical advice or universal promises.
14. **Final CTA** — "Ready to Take the Next Step?" If pain is affecting your movement, sleep, work, or everyday life, our team can help you understand your options. Request a Consultation / Call (559) 478-4757.
15. **Location** — 7255 N Cedar Ave #101, Fresno, CA 93720 · (559) 478-4757 · Google Map, office info; parking/hours only if verified.

## Footer
Logo, short brand statement; nav (About, Treatments, Conditions, Patient Resources, Physician Referrals, Contact); legal (Privacy Policy, Accessibility, Terms, Medical Disclaimer); contact info; social links only if active and verified.

## Inner page templates
- **Treatment:** breadcrumb, category, name, intro, who may benefit, what it is, how it works, what to expect, potential benefits, risks & considerations, FAQ, related conditions, related treatments, CTA "Discuss Your Options", medical disclaimer. No outcome promises.
- **Condition:** hero, what is it, common causes, symptoms, how we evaluate, potential treatment options, when to seek care, FAQ, related treatments, CTA Request a Consultation.
- **Physician:** hero, credentials, education, fellowship, clinical experience, publications, presentations, leadership, approach, memberships, CTA.
- **Patient Resources:** new patients, registration, forms, referral forms, procedure instructions, insurance, FAQ, what to expect, contact.
- **Referring Physicians:** hero "Specialized Pain Care for Your Patients"; referral process, conditions, treatment categories, how to refer, referral form, office contact, clinical communication.
- **About:** philosophy, advanced pain medicine, multidisciplinary care, technology, patient-centered care, physician, team, office, location.
- **Contact:** phone, address, hours, map, contact form, appointment request, referral option, emergency disclaimer.

## SEO
Local targets: Pain Management Fresno, Pain Management Doctor Fresno, Interventional Pain Medicine Fresno, Pain Specialist Fresno, Pain Doctor Fresno, Back Pain Doctor Fresno, Spine Pain Treatment Fresno, Neuromodulation Fresno, Spinal Cord Stimulation Fresno, Pain Management Central Valley. Useful individual pages, no keyword stuffing.
Unique title/meta per page, one H1, logical H2/H3, schema (MedicalClinic, Physician, LocalBusiness, Breadcrumb, FAQ only where eligible), canonicals, Open Graph, XML sitemap, robots.txt, internal linking.

## Performance
Fast mobile, minimal JS, optimized WebP/AVIF, lazy loading, responsive images, critical CSS, no animation libraries, no autoplay video.

## Accessibility
WCAG-conscious: keyboard nav, visible focus, semantic HTML, ARIA only where needed, alt text, contrast, accessible forms, large tap targets, reduced-motion support, readable type.

## Animation
Subtle only: fade-up reveal, card hover, image scale hover, nav transition, accordion, button hover. No heavy parallax. Respect prefers-reduced-motion.

## Conversion
Primary: Request a Consultation. Secondary: Call the Office. Tertiary: Physician Referral. Clear next action on every major page; credibility first, not a sales funnel.

## Technical
Semantic HTML5, modern CSS, vanilla JS. Structure: /index.html /about.html /doctor.html /conditions.html /treatments.html /patient-resources.html /referring-physicians.html /contact.html · /assets/css/style.css · /assets/js/main.js · /assets/images/. Components easy to migrate to WordPress later.

## Migration safety
- Don't delete current URLs. Build a full URL inventory first, mapping: old URL, new URL, redirect required, SEO title, meta description, canonical, status.
- Preserve PDFs, patient forms, documents, analytics, tracking, contact forms, phone number, indexed content.
- Any URL change needs a 301 redirect plan.
- Launch gate: staging approved; mobile QA; forms tested; analytics tested; SEO metadata checked; redirect map approved; accessibility checked; performance tested; indexing strategy reviewed.
