# Project Progress: Privacy and Data Minimization

This project includes a growing set of privacy-focused safeguards aimed at reducing exposure of personal data and minimizing unnecessary data handling before it is sent to hosted AI systems.

## 1. PII detection and masking

Implemented in `src/lib/privacy/pii-detector.ts`.

### What it does
- Detects common direct identifiers such as:
  - email addresses
  - phone numbers
  - SSNs
  - credit card numbers
  - names
  - addresses
  - dates of birth
- Uses a confidence threshold of `0.7` before masking content.
- Replaces detected values with `[REDACTED]` using the `maskPII()` method.

### Why this matters
This helps prevent sensitive information from being stored or forwarded in raw form when interviews or chat messages contain personal identifiers.

---

## 2. Pattern-based minimization before AI calls

Implemented in `src/lib/privacy/minimize.ts`.

### What it does
- Replaces direct identifiers with minimal placeholders such as:
  - `[EMAIL]`
  - `[PHONE]`
  - `[NUMBER]`
  - `[URL]`
- Applies to common patterns for:
  - email addresses
  - phone numbers
  - card-like numeric sequences
  - URLs
- Returns a count of redactions performed.

### Example
Input:
> Email me at candidate@example.com or call +1 (555) 123-4567. See https://example.com.

Output:
> Email me at [EMAIL] or call [PHONE]. See [URL].

This is used to keep outbound AI prompts smaller and safer by removing obvious identifiers before sending text to external LLM providers.

---

## 3. Privacy-event tracking for accountability

Implemented via `supabase/migrations/007_privacy_events.sql`.

### What it does
- Creates a `privacy_events` table to record when PII is detected.
- Stores:
  - session ID
  - message ID
  - list of detected PII types
  - number of detections
  - original content
  - masked content
  - confidence threshold
  - timestamp
  - metadata JSON
- Enables row-level security (RLS) on the table.
- Adds indexes for session/message/timestamp access patterns.

### Purpose
This provides traceability for privacy-relevant incidents and makes it easier to audit where data minimization happened.

---

## 4. Privacy-aware AI chat route

Implemented in `src/app/api/ai/chat/route.ts`.

### What it does
- Detects PII in incoming chat messages.
- Masks the content before building the prompt history.
- Inserts a record into `privacy_events` when PII is found.
- Continues with sanitized prompt content instead of raw user content.

### Privacy impact
The chat route avoids sending raw personal identifiers to the model while still permitting the conversation flow to continue.

---

## 5. Privacy-aware voice save path

Implemented in `src/app/api/voice/save/route.ts`.

### What it does
- Detects PII in recorded or saved voice transcript content.
- Masks the content before persisting it in `messages`.
- Logs the event into `privacy_events` when matches are found.

### Privacy impact
This reduces the risk of storing sensitive personal data in plain text while continuing to retain enough information for interview analysis.

---

## 6. Local voice relay minimizes data before Groq calls

Implemented in `server/local-voice-relay.ts`.

### What it does
- Applies `minimizePii()` to:
  - the user’s latest text input
  - conversation history
  - the current question text
- Sends sanitized content to the Groq API instead of raw transcript text.
- Prompts explicitly instruct the model to never reveal or repeat private identifiers.

### Privacy impact
This is a strong data minimization step for the local voice interview flow, where speech transcripts and conversation data are forwarded to an external hosted model.

---

## 7. Testing coverage for minimization behavior

Implemented in `tests/privacy-minimize.test.ts`.

### What it does
- Verifies that email, phone number, and URL values are replaced with minimal placeholders.
- Confirms that the redaction count matches expectation.

### Privacy impact
This helps prevent regressions in the privacy sanitization logic.

---

## 8. Path-specific privacy enforcement

The project uses privacy protection in a targeted way rather than as one global middleware.

### Current model
- Some AI paths run `PIIDetector` before sending data to the model.
- The local voice relay runs `minimizePii()` on transcripts and history before sending them to Groq.
- Privacy events are inserted only when a detection occurs.

### Observed status
This is a practical, path-specific privacy model rather than a fully centralized data-protection layer across every route.

---

## 9. Current implemented privacy progress summary

Completed implementation includes:
- PII detection with masking logic
- Data minimization for common personal identifiers
- Redaction before hosted LLM calls
- Logging of privacy incidents via `privacy_events`
- Privacy-aware handling in chat and voice save APIs
- Local voice relay sanitization for Groq prompts
- Automated test coverage for core minimization logic

## 10. Remaining improvement opportunities

The project still has room to strengthen privacy and data minimization further, for example:
- add consistent privacy enforcement across all AI endpoints
- centralize sanitization in shared middleware or reusable wrappers
- review retention and deletion flows for voice/audio recordings and transcripts
- expand PII detection to additional categories and edge cases
- validate that all external AI calls consistently use minimized payloads

Overall, the project has already implemented meaningful privacy safeguards focused on reducing PII exposure before external model calls and maintaining an audit trail of detected sensitive data.
