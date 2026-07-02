import { PromptEngine } from "../../core/prompt-engine";

export class GeneratorPage {

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    this.container.innerHTML = `
      <div style="padding:20px;max-width:800px;margin:auto;">
        <h1>Prompt Generator</h1>

        <textarea id="task" placeholder="输入你的任务..." style="width:100%;height:100px;"></textarea>

        <button id="generateBtn" style="margin-top:10px;padding:10px 20px;">
          生成 Prompt
        </button>

        <pre id="output" style="margin-top:20px;white-space:pre-wrap;background:#111;color:#0f0;padding:10px;"></pre>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const btn = document.getElementById("generateBtn")!;
    const output = document.getElementById("output")!;
    const task = document.getElementById("task") as HTMLTextAreaElement;

    btn.onclick = () => {
      const prompt = PromptEngine.build({
        task: task.value,
        role: "Professional AI Assistant",
        context: "",
        constraints: "Be structured and clear",
        output: "Well formatted answer",
        language: "English"
      });

      output.textContent = prompt;
    };
  }
}