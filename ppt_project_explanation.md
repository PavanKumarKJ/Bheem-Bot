# Bheem Bot Project Explanation Based on the PPT

## Title

Data Privacy and Minimization in AI Interview Bots

Presented by:
- SIDDAGANGA INSTITUTE OF TECHNOLOGY, TUMKURU
- Department of CSE
- Under the guidance of Dr. N R Sunitha
- Team: Manoj P J, Naveen Kumar R, Pavan Kumar K J

---

## 1. Project Overview

Bheem is an AI-powered interview bot designed to support structured recruitment interviews while focusing on privacy, data minimization, and responsible AI usage.

The core idea of the project is to improve the AI interview experience without sending unnecessary personal or sensitive information to external AI providers. In other words, Bheem aims to combine intelligent candidate evaluation with privacy-preserving design.

This project is important because modern AI interview systems often collect a lot of information from candidates, including recordings, transcripts, screenshots, and other sensitive inputs. If not handled carefully, this can create serious privacy, compliance, and trust issues.

Bheem addresses this by introducing structure, privacy-aware data flow, and human oversight into the AI interview process.

---

## 2. Problem Statement

Recruiters often spend significant time conducting repetitive screening interviews and comparing large numbers of candidate responses. At the same time, candidates may not clearly understand:

- when AI is being used,
- what information is collected,
- how their responses are evaluated,
- and how long their data will be retained.

Interview platforms can send unnecessary personal information to AI providers and retain sensitive recordings, transcripts, and screenshots without clear controls. Automated scores can also introduce unfairness when they rely on tone, confidence, personality, or other signals unrelated to the job requirement.

Bheem addresses these challenges through:

- structured AI interviews,
- data minimization,
- privacy notices,
- secure storage,
- and human review of AI-generated results.

This means the product is not only about automation, but also about trust, transparency, and privacy.

---

## 3. Literature Survey Summary

The literature survey highlights several important studies in AI privacy and conversational systems.

### ProxyGPT: Enabling User Anonymity in LLM Chatbots
This paper proposes a proxy-based system to anonymize chatbot users and prevent linking conversations to identities.

Drawback:
- adds extra system complexity and communication delay.

### Trust No Bot: Discovering Personal Disclosures in Human-LLM Conversations
This research studies how users unintentionally disclose sensitive personal information during chatbot conversations.

Drawback:
- focuses more on analysis of leakage risk than on actual privacy-preserving solutions.

### User Privacy Harms and Risks in Conversational AI
This paper provides a framework to identify privacy risks in conversational AI systems.

Drawback:
- mostly conceptual and lacks practical implementation methods.

### Disclose with Care: Designing Privacy Controls in Interview Chatbots
This work proposes privacy controls such as AI-assisted editing to remove personal information from interview transcripts.

Drawback:
- requires user intervention to edit responses, and automation is limited.

### Chatbots: Security, Privacy, Data Protection and Social Aspects
This is a comprehensive study on chatbot security threats and data protection challenges.

Drawback:
- mostly theoretical and lacks a full experimental system implementation.

### Analysis of Personal Data Preservation Policy in AI-Based Chatbot Applications
This paper examines chatbot data protection policies and user awareness of privacy risks.

Drawback:
- limited to a specific regulatory context and not focused on interview bots.

### Are Chatbots Ready for Privacy-Sensitive Applications?
This study notes that some chatbots may copy personal data from prompts and repeat it in outputs.

Drawback:
- does not provide a complete architecture for privacy protection.

### Ethical Considerations in the Deployment of AI Chatbots
This paper discusses ethics issues such as privacy, bias, transparency, and misinformation.

Drawback:
- focuses on ethics rather than direct technical implementation.

### Vertical Standardisation for High-Risk AI Systems under the EU AI Act
This paper proposes a domain-specific framework for algorithmic hiring, covering:
- risk management,
- data governance,
- transparency,
- human oversight,
- explainability,
- post-deployment monitoring.

Drawback:
- mainly governance-oriented and not a complete implementation.

### Governing Fair Algorithmic Hiring Under the EU AI Act
This paper proposes a governance framework for AI-based recruitment systems.

Drawback:
- conceptual architecture, not a full technical implementation.

### Governing AI-Driven Recruitment
This work studies legal and ethical issues in recruitment and policy solutions for fair employment practices.

Drawback:
- stronger focus on legal analysis than on a technical privacy-preserving architecture.

From these studies, the project derives a clear need for both technical and governance-based privacy controls in AI interview systems.

---

## 4. Objectives of the Project

The main objectives are:

1. To develop an AI-based interview bot with a privacy filter that detects and masks sensitive user data before processing.
2. To ensure secure and efficient interview evaluation using AI, along with user authentication for data protection.
3. To minimize personal data before it reaches hosted AI models or privacy logs.
4. To protect interview data through access control, retention, deletion, and candidate-rights workflows.
5. To ensure the project aligns with privacy and governance expectations under policies such as the EU AI Act.

---

## 5. Tools and Technologies Used

### Application and Frontend
- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons

### Backend and APIs
- Next.js route handlers
- tRPC
- Zod validation
- Node.js
- WebSocket voice relay

### AI and Voice Processing
- Groq and xAI model providers through OpenAI-compatible APIs
- OpenAI SDK client
- Local Faster Whisper speech-to-text service
- Local Piper text-to-speech service
- PII detection and masking utilities
- Structured JSON extraction for AI reports

### Database, Authentication, and Storage
- Supabase Auth
- PostgreSQL
- Supabase Storage
- Row Level Security policies
- Supabase Realtime configuration

---

## 6. System Architecture

The architecture of Bheem is built around a privacy-aware AI interview workflow.

### High-level flow
- The candidate starts the interview.
- The browser sends the interview responses and optional recordings to the platform.
- Before sending data to a hosted AI provider, the system minimizes and filters sensitive information.
- The AI evaluates only the relevant content needed for the interview.
- Results are stored securely in Supabase.
- A human reviewer validates the AI report before making any final decision.

This creates a privacy boundary between raw candidate data and the model processing layer.

---

## 7. Data Flow Steps

The PPT highlights the following steps:

1. Candidate sees the AI and data-use notice and acknowledges it.
2. The browser sends interview responses and optional recordings to Bheem.
3. PII is minimized before data is sent to a hosted AI provider.
4. Supabase stores sessions, reports, and protected media files.
5. A human reviewer checks the AI report before making a decision.

This is important because it shows that the project is not fully autonomous AI-driven. Human review remains part of the evaluation pipeline.

---

## 8. Implemented Features

The current implementation already includes:

- Chat and voice interviews with configurable AI interviewers
- Question generation, resume parsing, summaries, and candidate scoring
- Candidate onboarding with microphone, camera, and screen checks
- AI-use, data-use, recording, and sensitive-data notices
- PII detection, masking, access control, signed URLs, authentication, and rate limiting

These features give Bheem a strong foundation for privacy-aware recruitment automation.

---

## 9. Privacy by Design Principles in the Project

The architecture is designed around privacy-first decisions:

### Candidate acknowledgment
Candidates see AI and data-use notices and must acknowledge them before proceeding.

### PII minimization
Private information is minimized before being sent to hosted AI systems.

### Role-based access control
Not everyone has the same access to all records and media.

### Signed URLs and protected storage
Sensitive media and files are stored securely and accessed through controlled links.

### Human review of AI decisions
AI-generated reports are checked by a human before making final decisions.

These principles align closely with modern privacy and AI governance expectations.

---

## 10. Expected Future Implementations

The PPT lists the next major focus areas:

- Persist candidate acknowledgement and privacy-notice version.
- Apply shared PII minimisation to every AI request and remove raw PII from privacy logs.
- Disable emotion, personality, confidence, and sentiment analysis for recruitment.
- Make AI scores advisory and require human review, correction, and override.
- Fix storage access, ownership checks, retention, deletion, export, and appeal workflows.
- Add AI invocation logs, model and prompt tracking, incident handling, and reviewer training.

These are critical because they move the project from a functioning prototype to a safer and more governance-ready system.

---

## 11. Why This Project Matters

The project matters because AI interviewing can create value, but it can also create risk if privacy is not built into the system.

In recruitment, AI can help with screening, transcript analysis, and evaluation, but it must not:

- store unnecessary personal information,
- process irrelevant sensitive data,
- or replace human accountability.

Bheem balances efficiency and privacy by combining AI assistance with responsible data handling and human review.

---

## 12. Conclusion

Bheem already provides the core AI interview experience and has useful privacy foundations, including:

- PII utilities,
- access controls,
- signed URLs,
- tests,
- and candidate-facing notices.

The next implementation focus is to complete the privacy boundary around the AI interview.

The highest-priority work is to:

- persist candidate acknowledgement,
- apply minimisation consistently to every AI request,
- remove unsafe emotion-style evaluation,
- secure storage and privacy-event access,
- define retention and deletion,
- and require human review of AI-generated scores.

After these controls are implemented, Bheem will have a clearer, safer, and more transparent foundation for further EU AI Act, GDPR, security, and governance work.

---

## 13. Final One-Line Summary

Bheem is a privacy-first AI interview bot that aims to make recruiting smarter without compromising candidate privacy, transparency, or human accountability.
