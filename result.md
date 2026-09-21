# Selection and Rejection Evaluation Design

This is the recommended way to handle selection when only a few candidates are chosen after an interview round.

## The problem with the current AI-only flow

The current codebase evaluates candidates primarily through AI-generated summary and score logic:

- [src/lib/ai/prompts/summary.ts](src/lib/ai/prompts/summary.ts)
- [src/app/api/ai/summarize/route.ts](src/app/api/ai/summarize/route.ts)
- [src/lib/session-score.ts](src/lib/session-score.ts)
- [src/components/interview/interview-results.tsx](src/components/interview/interview-results.tsx)

This makes the system useful for generating an assessment, but it is not enough for a hiring or selection process where the organizer must reject candidates and explain why.

A candidate will naturally ask:
- Why was I rejected?
- Which part was weak?
- What was the criteria?
- Did the AI decide alone?

If the system only says “AI evaluation is poor,” that is not a fair or explainable rejection.

---

## Correct evaluation model

The evaluation should be done in this order:

1. Organizer reviews the candidate
2. Organizer scores the candidate against a rubric
3. AI generates a second-pass review based on transcript and evidence
4. Final score is calculated by combining both
5. Candidate is selected or rejected using threshold rules
6. Rejection reason is generated from specific weak areas

This creates a transparent system instead of a black-box AI decision.

---

## 1) Review should be based on clear evaluation criteria

Use a standard rubric such as:

- Technical skill
- Problem solving
- Communication
- Domain fit / role relevance
- Confidence / professionalism
- Team fit / attitude

Each criterion is scored from 1 to 10.

Example:

- Technical skill: 30%
- Problem solving: 25%
- Communication: 20%
- Domain fit: 15%
- Attitude / professionalism: 10%

This gives a structured and defensible score.

---

## 2) Organizer review should be primary

The organizer is the person who understands the role, evaluation context, and hiring priorities.

The organizer should produce:

- score for each criterion
- notes and comments
- final recommendation: selected / rejected / waitlist
- explanation of strengths and weaknesses

This is the key human accountability layer.

Example organizer review:

- Technical skill: 8/10
- Problem solving: 6/10
- Communication: 7/10
- Domain fit: 9/10
- Professionalism: 8/10

Final note:
"Strong on role fit, but weak on structured problem solving. Candidate struggled with edge cases and did not provide a clear step-by-step approach."

---

## 3) AI review should be a second opinion

AI should not decide the final result alone. It should provide supporting evidence.

AI review should produce:

- summary of performance
- key strengths
- weak areas
- confidence / uncertainty notes
- transcript-based evidence

Example AI output:

- Strong communication and domain knowledge
- Missed several edge cases in problem-solving answers
- Struggled to explain trade-offs clearly

This gives the organizer a validation layer, but not the final decision.

---

## 4) Final score should be weighted

Use a formula like:

final score = (organizerScore × 0.7) + (aiScore × 0.3)

Or if you want the organizer to be strongly prioritized:

final score = (organizerScore × 0.8) + (aiScore × 0.2)

This is better than using AI score alone.

Example:

- Organizer score = 8.2
- AI score = 6.8
- Final score = (8.2 × 0.8) + (6.8 × 0.2) = 7.88

This is fair, transparent, and stable.

---

## 5) Selection should use thresholds, not just ranking

When selecting only 2 candidates from 4, do not decide based only on the highest total.

Use rules like:

- Minimum overall score: 7.0
- Minimum technical skill: 6.0
- Minimum communication: 6.0
- Minimum role fit: 6.0
- No critical missing requirement

Decision rules:

- Selected if total score >= 7.0 and all minimum criteria pass
- Waitlist if total score is acceptable but not strong enough
- Rejected if score < 7.0 or any mandatory criterion is below threshold

This makes the decision objective and explainable.

---

## 6) Rejection reasons should be specific

This is the most important piece for candidate communication.

Do not reject with a generic label like:

- “not selected”
- “AI evaluation failed”
- “performance below expectation”

Instead, generate a reason based on rubric values.

Example rejection reasons:

- “Rejected because problem-solving score was below threshold. The candidate could not explain a clear approach and missed edge cases.”
- “Rejected because communication score was below threshold. Responses were not structured and lacked clarity.”
- “Rejected because role fit was low. The candidate did not show relevant experience for this role.”
- “Rejected because technical depth was insufficient for the required job level.”

This gives a real answer to the candidate.

---

## 7) Recommended project flow

### Flow

1. Candidate completes interview
2. System stores transcript and responses
3. Organizer reviews and scores each category
4. Organizer adds comments and approval/rejection note
5. AI analyzes transcript and adds second assessment
6. Final score calculated using weighted formula
7. System applies qualification thresholds
8. Top candidates are selected
9. Remaining candidates receive rejection reasons based on weak criteria

---

## 8) Best data model

Add separate fields in the session/candidate record:

- organizerScore
- organizerFeedback
- organizerRecommendation
- aiScore
- aiSummary
- finalScore
- selectionStatus
- rejectionReason
- selectedRank

This allows the system to store:

- what the organizer decided
- what the AI said
- what the final result is
- why the candidate was rejected

---

## 9) What this means for your current code

Today the project is still AI-first. To move to the correct selection workflow, the project should change from:

- AI score only

To:

- organizer score + AI support + weighted final decision

This will require updates in:

- [src/lib/session-score.ts](src/lib/session-score.ts)
- [src/lib/ai/prompts/summary.ts](src/lib/ai/prompts/summary.ts)
- [src/app/api/ai/summarize/route.ts](src/app/api/ai/summarize/route.ts)
- [src/components/interview/interview-results.tsx](src/components/interview/interview-results.tsx)
- Supabase schema for organizer review and final verdict

---

## Final conclusion

For a real selection process, the system should not say: “AI evaluated and rejected you.”

It should say:

- The organizer reviewed your performance against the role criteria.
- Your score was based on technical skill, communication, problem solving, and role fit.
- You were rejected because your score in X category was below the required threshold.
- The AI review supported this assessment but did not replace the human decision.

This is fair, explainable, and acceptable in a recruitment or selection workflow.
