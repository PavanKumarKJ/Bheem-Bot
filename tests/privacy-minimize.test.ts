import assert from "node:assert/strict";
import test from "node:test";

import { buildSummaryPrompt } from "../src/lib/ai/prompts/summary";
import { minimizePii } from "../src/lib/privacy/minimize";

test("minimizePii removes common direct identifiers before hosted LLM calls", () => {
  const result = minimizePii(
    "Email me at candidate@example.com or call +1 (555) 123-4567. See https://example.com."
  );

  assert.equal(
    result.text,
    "Email me at [EMAIL] or call [PHONE]. See [URL]."
  );
  assert.equal(result.redactions, 3);
});

test("summary prompt requires privacy minimization and human review before final decisions", () => {
  const messages = buildSummaryPrompt(
    "Privacy-first interview",
    [{ role: "user", content: "My email is candidate@example.com and phone is +1 (555) 123-4567." }],
    "Assess role fit while protecting candidate privacy.",
    [{ name: "Communication", description: "Clarity and communication ability." }],
    [{ text: "Tell me about yourself.", order: 1 }],
    "en-US",
  );

  const systemPrompt = messages.find((m) => m.role === "system")?.content ?? "";

  assert.match(systemPrompt, /privacy/i);
  assert.match(systemPrompt, /minimi[sz]e|mask/i);
  assert.match(systemPrompt, /advisory/i);
  assert.match(systemPrompt, /human review|human reviewer/i);
});