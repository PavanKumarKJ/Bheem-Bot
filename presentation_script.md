# 15-Minute Presentation Script

## 1. Opening introduction (0:00 to 1:30)

"Good morning everyone. Today I am presenting my project, an AI-powered interview evaluation and candidate selection platform.

The idea behind this project is to make interviews more structured, more transparent, and more data-driven. In many organizations, hiring still depends on subjective interviewer memory, inconsistent notes, and manual comparisons. This creates unfair evaluation and makes it difficult to compare candidates fairly.

This project addresses that challenge by combining structured interviews, AI-generated analysis, organizer review, and final scoring logic in one system."

---

## 2. Problem statement (1:30 to 4:00)

"The main problem is that traditional interview processes are often inconsistent.

Different interviewers may judge the same candidate differently. Important details get lost in long conversations. Interview notes are often subjective, and there is no standard way to compare multiple candidates fairly.

On top of that, when a company interviews multiple candidates, they need to choose only a few. Without a structured evaluation system, the selection process becomes difficult and sometimes unfair.

So the core challenge is: how do we improve the quality, consistency, and transparency of interview evaluation?"

---

## 3. Project idea and solution (4:00 to 7:00)

"My project solves this through an interview evaluation platform.

The organizer can create an interview with a clear objective, assessment criteria, and questions. Then a candidate takes the interview, and the platform captures the whole session, including conversation transcript, code snippets, whiteboard work, and other response data.

After the interview, the system analyzes the responses using AI. It identifies key themes, strengths, weaknesses, and evaluation points. The organizer can then review the generated analysis, score the candidate based on defined criteria, and make the final decision.

In short, the system supports the complete interview lifecycle: from setup to evaluation to selection."

---

## 4. Why this is valuable (7:00 to 9:00)

"This project is valuable because it reduces manual effort and improves fairness.

It helps organizations save time, standardize evaluation, and compare candidates using the same rubric. It also creates a structured record of the interview, which is useful for review, analysis, and future hiring decisions.

The biggest advantage is that it does not rely only on memory. Instead, it creates evidence-based evaluation."

---

## 5. Full workflow (9:00 to 11:30)

"Let me explain the typical user workflow.

First, the organizer creates an interview. This includes the objective, questions, and criteria used to judge performance.

Second, a candidate enters the interview. The system records the transcript, conversation, code, or whiteboard content if used.

Third, AI processes the session and produces an evaluation summary with insights, themes, and question-by-question analysis.

Fourth, the organizer reviews the result and adds human judgment based on the actual interview context.

Fifth, the system calculates the final score and compares candidates. Based on the score and threshold, the platform either selects, waitlists, or rejects the candidate.

So the product is not only a transcript tool or AI summary tool; it is a full evaluation and decision-support system."

---

## 6. Evaluation logic (11:30 to 13:00)

"The evaluation logic is built around a rubric.

We evaluate candidates based on criteria such as technical skill, communication, problem-solving ability, role fit, and professionalism. Each criterion is scored from 1 to 10, and the final score is derived from a weighted formula.

This is important because the project is designed for fair selection. A candidate should not be rejected based only on a generic AI label. The decision should be tied to clear evaluation criteria and evidence from the interview.

In the current implementation, the AI generates the initial evaluation, but the ideal workflow is organizer review first and AI as a second opinion. The final verdict should be explainable and based on objective criteria."

---

## 7. Architecture and technical implementation (13:00 to 14:00)

"The system is implemented as a full-stack web application.

The frontend is built with Next.js and React, and it handles the dashboard, interview pages, and result views. The backend uses API routes to manage sessions and process AI analysis. Supabase is used for storing interview data, session details, results, and evaluation metadata.

The AI layer uses a prompt-driven evaluation flow to analyze transcript data and generate structured outputs. The scoring logic uses the saved evaluation data to calculate the overall performance score.

So the overall system combines user interface, business logic, AI processing, and data storage into a unified product."

---

## 8. Closing and value proposition (14:00 to 15:00)

"In conclusion, this project is useful because it solves a real-world problem in hiring and evaluation.

It brings structure to interviews, reduces inconsistency, makes candidate comparison easier, and helps organizations make better decisions. More importantly, it creates a transparent evaluation process where the final decision is based on evidence, not just personal intuition.

This is what makes the project strong: it combines AI, structured assessment, human judgment, and decision support into one real-world solution.

Thank you."

---

## Short presentation summary for final closing

"This project is an AI-powered interview evaluation platform that helps organizations run structured interviews, analyze candidate responses, and make informed selection decisions. It combines transcript capture, AI evaluation, organizer review, and score-based comparison to improve fairness, consistency, and efficiency in the hiring process."
