import { PromptInput } from "./types";

export class PromptEngine {

  static build(input: PromptInput): string {

    const sections = [
      `# Role\n${input.role}`,
      `# Goal\n${input.goal}`,
      `# Context\n${input.context}`,
      `# Task\n${input.task}`,
      `# Constraints\n${input.constraint}`,
      `# Output Format\n${input.outputFormat}`,
      `# Quality Check\n${input.qualityCheck}`,
      `# AI Adapter\n${input.aiAdapter}`,
    ];

    return sections
      .filter(s => !s.includes("\nundefined") && !s.endsWith("\n"))
      .join("\n\n");
  }

  static optimize(prompt: string): string {
    return `
You are a professional prompt engineer.

Rewrite and improve the following prompt:

---
${prompt}
---

Requirements:
- Make it more structured
- Make it more specific
- Improve AI comprehension
- Remove ambiguity
- Add missing constraints if needed

Return only the improved prompt.
`.trim();
  }
}