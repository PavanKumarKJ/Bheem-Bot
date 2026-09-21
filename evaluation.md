# Evaluation Flow in This Project

## Important note

The current codebase is AI-first. The organizer review step does not exist yet in the current implementation.

Right now, the evaluation is created by the AI model first, and only then the result is displayed and stored. If your intended workflow is:

1. organizer reviews the candidate
2. organizer approves or edits the evaluation
3. AI reviews the organizer's evaluation or compares with it

then that is a different workflow from what is currently implemented.

---

## Current implementation: AI does the evaluation first

### 1) AI evaluation is generated from the interview transcript

Main file:
- [src/lib/ai/prompts/summary.ts](src/lib/ai/prompts/summary.ts)

This file builds the prompt sent to the AI model. It includes:
- interview title
- objective
- assessment criteria
- question list
- transcript messages
- whiteboard content and code snippets

The prompt specifically instructs the model to return structured JSON containing fields like:
- summary
- themes
- sentiment
- keyInsights
- questionEvaluations
- criteriaEvaluations
- researchFindings
- toneAnalysis

This is the actual evaluation step in the current app, because the LLM analyzes the participant’s answers and scores them based on the transcript.

### 2) The summary/evaluation API creates and saves the report

Main file:
- [src/app/api/ai/summarize/route.ts](src/app/api/ai/summarize/route.ts)

This API route does the actual work:
1. loads the session and its messages from Supabase
2. gets interview metadata such as questions and assessment criteria
3. calls buildSummaryPrompt() from [src/lib/ai/prompts/summary.ts](src/lib/ai/prompts/summary.ts)
4. sends the prompt to the AI provider
5. extracts valid JSON
6. stores the result in the sessions table under the insights and summary fields

This is the place where the AI evaluation is generated and persisted.

### 3) Numeric score calculation happens here

Main file:
- [src/lib/session-score.ts](src/lib/session-score.ts)

This file contains the logic that turns the AI-generated evaluations into one final score.

The important functions are:
- averageScore(entries)
- getSessionOverallScore(insights)

The overall score logic is:
- use question evaluations if they exist
- otherwise fall back to criteria evaluations

### 4) The UI displays the evaluation result

Main file:
- [src/components/interview/interview-results.tsx](src/components/interview/interview-results.tsx)

This component reads the saved insights and displays:
- question-by-question evaluations
- criteria scores
- overall score
- summary

So the frontend is only presenting the AI-generated value, not handling organizer review.

---

## Desired workflow you want

Your intended process is:

1. organizer reviews the candidate/session manually
2. organizer gives evaluation or score
3. AI then reviews the organizer's evaluation
4. final decision is based on organizer review plus AI review

This would require new backend and UI logic, such as:
- organizerReview field in session or candidate records
- manual score input by organizer
- AI comparison or second-pass review
- status like: pending_manager_review, reviewed_by_organizer, ai_review_completed

The current code does not yet implement that flow.

---

## If you want to build the organizer-first flow

The likely places to add it are:
- [src/components/interview/interview-results.tsx](src/components/interview/interview-results.tsx) — organizer review UI
- [src/app/api/ai/summarize/route.ts](src/app/api/ai/summarize/route.ts) — AI second-pass review call
- [src/lib/session-score.ts](src/lib/session-score.ts) — final score logic combining human + AI scores
- Supabase session schema — to store organizer review and AI review separately

---

## Short answer

Current code: AI evaluates first.
Your desired flow: organizer evaluates first, then AI reviews.

That organizer-first workflow is not implemented yet in this project.
