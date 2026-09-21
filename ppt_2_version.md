# Bheem Bot - Project Explanation Version 2

## Project Summary

Bheem is a privacy-focused AI interview bot designed to conduct interviews while minimizing the amount of personal data collected and processed. The project aims to make AI interview systems more responsible by using data minimization, secure storage, candidate transparency, and human oversight.

Instead of storing everything that is captured during an interview, the system is designed to keep only what is necessary for evaluation and decision-making. This reduces privacy risk and builds trust with candidates.

---

## Why this project matters

Recruitment interviews often involve a large amount of personal information. Interview bots can collect transcripts, audio, screenshots, and other sensitive data. If not managed properly, this can create privacy concerns, compliance issues, and unfair evaluation practices.

This project addresses those concerns by ensuring that:
- only necessary data is collected,
- sensitive information is minimized before AI processing,
- candidate notices are shown and acknowledged,
- access to stored data is restricted,
- AI-generated reports are reviewed by humans before decisions are made.

---

## Key idea

The key idea of Bheem is to combine AI-driven interviewing with privacy-preserving system design. It does not treat privacy as an afterthought; it is built into the architecture and workflow of the product.

This means the system is not only useful for evaluating candidates but also safe, explainable, and more aligned with responsible AI practices.

---

## Main features

- AI-based interview conversation flow
- Structured questions and evaluation criteria
- Candidate notices and consent flow
- PII detection and minimization before AI processing
- Secure storage and access controls
- Human review of AI-generated evaluations
- Final decision support with transparent review

---

## Technical implementation

The system is built using Next.js, React, TypeScript, Supabase, and AI APIs. The frontend handles the interview and reporting experience, while the backend manages session flow, privacy checks, storage, and AI processing. The application also includes privacy utilities for masking sensitive data and controlling access to protected media.

The project uses a privacy boundary between the candidate input layer and the hosted AI model layer so that raw sensitive data is reduced before being sent for model processing.

---

## Business and ethical value

This project is important because it reflects real-world needs in AI hiring and interview automation. Organizations increasingly need AI tools that improve efficiency, but they also require compliance, explainability, and candidate trust.

Bheem contributes to that by proving that AI-based interviews can be both useful and privacy-aware. It demonstrates a responsible approach to AI in recruitment and evaluation.

---

## Final statement

Bheem is a privacy-first AI interview bot meant to make interview evaluation smarter without compromising candidate privacy. It focuses on minimization, consent, secure handling, and human oversight, creating a safer and more transparent foundation for AI-driven recruitment.
