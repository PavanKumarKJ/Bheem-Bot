# Slide-by-Slide Presentation Text in PPT Order

## Slide 1

Data Privacy and Minimization in AI Interview Bots.

This project is focused on building a privacy-aware AI interview bot that can support candidate evaluation while reducing unnecessary exposure of personal data. The goal is to improve interview efficiency without neglecting privacy, security, and ethical responsibility.

The project is being presented by the Department of Computer Science at Siddaganga Institute of Technology, Tumakuru, under the guidance of Dr. N R Sunitha.

---

## Slide 2

Problem Statement:

Recruiters often spend a significant amount of time conducting repetitive screening interviews and comparing large numbers of candidate responses. At the same time, candidates may not clearly understand when AI is being used, what information is being collected, or how their responses are evaluated.

Interview platforms can send unnecessary personal information to AI providers and retain sensitive recordings, transcripts, and screenshots without clear controls. Automated scores can also introduce unfairness when they rely on tone, confidence, personality, or other signals that are not directly related to job requirements.

Bheem addresses these challenges through structured AI interviews, data minimisation, privacy notices, secure storage, and human review of AI-generated results.

---

## Slide 3

Literature Survey.

Several papers and studies in this area discuss privacy risk, chatbot leakage, and fairness in AI-based conversational systems. ProxyGPT proposes anonymization to prevent identity linking, while other works analyze how users disclose personal information in chatbot conversations and identify associated privacy harms.

Some studies focus on privacy controls in interview chatbots, while others discuss the security and data protection challenges of chatbots in general. There are also papers on the legal and ethical issues surrounding AI-driven recruitment and the requirements under the EU AI Act.

These studies show that privacy, fairness, transparency, and accountability are essential in AI-based interview systems, and that current solutions often lack a complete technical implementation for privacy-preserving recruitment support.

---

## Slide 4

Literature Survey Continued.

The literature review highlights additional works on chatbot security, privacy, personal data preservation, and ethical concerns. Some studies show that chatbots can sometimes repeat or reveal personal information from prompts, which increases the risk of privacy leakage.

Many of the existing works are mainly conceptual or legal in nature. They explain the problem well, but they do not give a full practical architecture for privacy-protecting AI interview systems.

This motivates the need for a system like Bheem, which combines technical privacy controls with interview evaluation functionality.

---

## Slide 5

Literature Survey Continued.

This section further highlights work related to algorithmic hiring, governance, and fairness under the EU AI Act. These papers explain how high-risk AI systems in recruitment must consider risk management, transparency, explainability, human oversight, and monitoring.

They also show that recruitment AI systems must not only be technically efficient, but also legally and ethically responsible.

This reinforces the main idea behind Bheem: the system should support AI-based interview assessment without sacrificing privacy, fairness, or human accountability.

---

## Slide 6

Objectives.

The main objectives of this project are to develop an AI-based interview bot with a privacy filter that detects and masks sensitive user data before processing. We also aim to ensure secure and efficient interview evaluation using AI, while protecting user data through authentication and controlled access.

Another important objective is to minimize personal data before it reaches hosted AI models or privacy logs. We also want to protect interview data through access control, retention, deletion, and candidate-rights workflows, while making sure the project meets the expected privacy and governance standards of regulations like the EU AI Act.

---

## Slide 7

Tools and Technologies.

The project uses a modern full-stack architecture. The application and frontend are built using Next.js 14, React 18, TypeScript, Tailwind CSS, Radix UI, and Lucide React icons.

For the backend and APIs, we use Next.js route handlers, tRPC, Zod validation, Node.js, and WebSocket-based voice relay. For AI and voice processing, the project uses Groq and xAI model providers through OpenAI-compatible APIs, local Faster Whisper for speech-to-text, local Piper for text-to-speech, and custom PII detection and masking utilities.

For storage and security, the system uses Supabase Auth, PostgreSQL, Supabase Storage, Row Level Security, and Supabase Realtime configuration.

---

## Slide 8

Data Flow Diagram.

In the data flow, the candidate first sees the AI and data-use notice and acknowledges it. Then the browser sends interview responses and optional recordings to Bheem.

Before the data reaches a hosted AI provider, personal identifiable information is minimized and filtered. The system stores session data, reports, and protected media files in Supabase. Finally, a human reviewer checks the AI-generated report before any decision is made.

This flow shows that the system is designed to protect privacy while still supporting intelligent evaluation.

---

## Slide 9

Architecture Diagram.

The architecture combines frontend, backend, AI processing, storage, and privacy controls into a multi-layered system. The candidate interacts with the interview interface, and the application processes the data through secure backend services.

The AI layer evaluates the interview content, while storage and access management protect the resulting data. This creates a structured pipeline from interview input to evaluation output.

---

## Slide 10

Data Flow Steps.

The important steps of the data flow are as follows: first, the candidate acknowledges the AI and data-use notice. Second, the browser sends interview responses and optional recordings to Bheem. Third, personal information is minimized before the data is sent to a hosted AI provider. Fourth, Supabase stores sessions, reports, and protected media files. Fifth, a human reviewer checks the AI report before making a decision.

This demonstrates that the system follows a privacy-aware and human-supervised workflow rather than fully autonomous AI evaluation.

---

## Slide 11

Implemented Features.

The system already includes chat and voice interviews with configurable AI interviewers, question generation, resume parsing, summaries, and candidate scoring. It also includes candidate onboarding with microphone, camera, and screen checks.

The platform also implements AI-use, data-use, recording, and sensitive-data notices. It has PII detection and masking, access control, signed URLs, authentication, and rate limiting. These features together build a strong privacy-aware foundation for AI interviewing.

---

## Slide 12

Expected Implementations.

The next steps focus on completing the privacy boundary around AI interview processing. We need to persist candidate acknowledgement and privacy-notice versioning so that consent is explicitly recorded. We also need to apply shared PII minimisation to every AI request and remove raw PII from privacy logs.

We also plan to disable emotion, personality, confidence, and sentiment analysis in recruitment scenarios because they can be unfair or unrelated to job requirements. AI scores should be advisory and require human review, correction, and override. We also need to improve storage access controls, ownership checks, retention, deletion, export, and appeal workflows, along with AI invocation logs, model tracking, incident handling, and reviewer training.

---

## Slide 13

Conclusion.

Bheem already provides the core AI interview experience and has useful privacy foundations, including PII utilities, access controls, signed URLs, tests, and candidate-facing notices. The next focus is to complete the privacy boundary around the AI interview.

The highest-priority work is to persist candidate acknowledgement, apply minimisation consistently to every AI request, remove unsafe emotion-style evaluation, secure storage and privacy-event access, define retention and deletion, and require human review of AI-generated scores.

After these controls are implemented, Bheem will have a clearer, safer, and more transparent foundation for further EU AI Act, GDPR, security, and governance work.

---

## Slide 14

Work Distribution.

The project work was divided across several technical and managerial responsibilities. One team member focused on planning, documentation, and overall project direction, while another handled frontend development and user interface design for the interview platform. The backend and data architecture were managed by a team member responsible for APIs, database integration, authentication, and session management.

AI and interview workflow development were handled by a team member focused on automated questioning, scoring, summaries, and evaluation logic. Privacy and security responsibilities were assigned to ensure PII minimisation, consent handling, access control, and data protection. Finally, testing, validation, and refinement were carried out to verify functionality, resolve issues, and improve the overall quality of the system.

This balanced distribution ensured that the project covered architecture, privacy, AI intelligence, user experience, and evaluation in a structured and efficient manner.

---
