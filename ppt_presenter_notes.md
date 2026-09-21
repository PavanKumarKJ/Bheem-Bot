# Presenter Notes for Bheem Bot

## 1. Short project explanation for presentation

This project is a privacy-first AI interview bot designed to conduct interviews while minimizing the amount of personal data collected and processed. The main objective is to combine AI-based interview assistance with strong privacy controls so that candidate evaluation remains useful, fair, and compliant with modern data protection principles.

Traditional interview systems often store too much personal and sensitive information, send unnecessary data to AI providers, and retain recordings or transcripts without clear consent and controls. Bheem addresses this by focusing on data minimization, candidate acknowledgment, PII masking, secure storage, and human review before final decisions are made.

The system supports structured interviews, AI-generated summaries, evaluation reports, and secure handling of interview data. It is built with a modern full-stack architecture using Next.js, Supabase, AI providers, and privacy-aware processing tools.

The project is valuable because it improves trust and responsibility in AI-driven recruitment. It shows that AI can help with hiring workflows while still respecting privacy and ethical boundaries.

---

## 2. Detailed explanation for presentation

This project is focused on data privacy and minimization in AI interview bots. The main problem is that many interview platforms collect large amounts of personal data, including recordings, transcripts, screenshots, and other sensitive content, without ensuring that only the minimum required information is stored or processed.

The goal of Bheem is to create an AI interview system where the interview process remains efficient and structured, but privacy is treated as a first-class requirement.

The system captures candidate responses in a controlled way and minimizes personally identifiable information before it is sent to an external AI provider. It also provides privacy notices so the candidate is informed about how their data will be used. Human review is also included so AI-generated evaluation is not treated as the final decision without oversight.

The project includes several important functional components. The frontend supports interview interfaces, onboarding, and result views. The backend stores sessions and secure reports. The AI layer analyzes relevant interview content. Privacy logic helps detect, mask, or reduce unnecessary sensitive data. The database and storage layer enforce access control and retention-aware handling.

The project is relevant because modern interview tools need to balance automation and candidate trust. Organizations want the efficiency of AI, but they also need compliance with data protection expectations and responsible governance practices. Bheem addresses that by applying privacy-by-design principles to the interview pipeline.

---

## 3. One-minute expert-level pitch

Our project is a privacy-first AI interview bot designed for structured recruitment screening while minimizing candidate data exposure. Traditional AI interview systems often process unnecessary personal information and retain sensitive records without clear limits. Bheem addresses this by filtering and minimizing personal data before AI processing, maintaining candidate notices and consent, using secure storage and access control, and requiring human review of AI-generated outputs. The system combines AI interviewing, privacy-aware data handling, and responsible decision support to improve both operational efficiency and trust in AI-driven hiring.

---

## 4. Very short explanation for final slides

Bheem is an AI interview bot built with a privacy-first approach. It minimizes personal data, filters sensitive information before AI processing, stores only what is necessary, and keeps human review in the loop. The goal is to make AI-assisted interviews both efficient and trustworthy.
