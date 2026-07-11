import { useState } from 'react';
import {
  Wand2, Copy, Download, Sparkles, ChevronDown, ChevronUp,
  Zap, Target, BookOpen, RotateCcw, Check, Star, Share2
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { generatePrompt, AI_MODELS, analyzeQuality } from '../lib/promptEngine';
import { analyzeTask } from '../lib/taskAnalyzer';
import { generateId, copyToClipboard, downloadText, getGradeColor } from '../lib/utils';
import type { GeneratorForm, QualityScore } from '../types';

const defaultForm: GeneratorForm = {
  role: '', goal: '', context: '', task: '', constraint: '',
  outputFormat: '', qualityCheck: '', aiAdapter: '', mode: 'advanced'
};

export function Generator() {
  const [form, setForm] = useState<GeneratorForm>(defaultForm);
  const [result, setResult] = useState('');
  const [taskAnalysis,setTaskAnalysis] = useState<any>(null);
  const [quality, setQuality] = useState<QualityScore | null>(null);
  const [showQuality, setShowQuality] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const { addHistory, settings } = useAppStore();

  const handleGenerate = () => {
    const analysis = analyzeTask(
  form.goal || form.task
);


setTaskAnalysis(analysis);


const enhancedForm = {


...form,


context:`

任务分析：

行业：
${analysis.industry}


目标：
${analysis.goal}


用户：
${analysis.audience}


执行任务：

${analysis.tasks.join('\n')}


输出：

${analysis.outputs.join('\n')}


${form.context}

`

};


const prompt = generatePrompt({
...enhancedForm,
aiAdapter:selectedModel
});
    setResult(prompt);
    const q = analyzeQuality(prompt);
    setQuality(q);

    addHistory({
      id: generateId(),
      title: form.goal || form.task || '未命名提示词',
      content: prompt,
      model: selectedModel,
      createdAt: Date.now(),
      quality: q.overall,
      tags: [form.mode],
    });
  };

  const handleCopy = async () => {
    await copyToClipboard(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    downloadText(result, `prompt-${Date.now()}.txt`);
  };

  const handleReset = () => {
    setForm(defaultForm);
    setResult('');
    setQuality(null);
  };

  const updateField = (field: keyof GeneratorForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const modeLabels = {
    basic: { label: '基础版', desc: '角色 + 任务 + 输出格式', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
    advanced: { label: '进阶版', desc: '+ 能力矩阵 + 执行框架', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
    expert: { label: '专家版', desc: '完整 Prompt Engine 框架', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
  };

  const formFields = [
    { key: 'role' as const, label: '角色定位', placeholder: '例如：你是一位资深电商运营专家', required: true, rows: 2 },
    { key: 'goal' as const, label: '任务目标', placeholder: '例如：为新品撰写小红书种草文案', required: true, rows: 2 },
    { key: 'context' as const, label: '背景上下文', placeholder: '例如：产品是一款针对25-35岁女性的抗老精华', required: false, rows: 2 },
    { key: 'task' as const, label: '具体任务', placeholder: '例如：生成3篇不同风格的种草文案', required: true, rows: 3 },
    { key: 'constraint' as const, label: '约束条件', placeholder: '例如：字数300-500字，避免夸大宣传', required: false, rows: 2 },
    { key: 'outputFormat' as const, label: '输出格式', placeholder: '例如：Markdown格式，分点说明，每篇配emoji标题', required: false, rows: 2 },
    { key: 'qualityCheck' as const, label: '质量控制', placeholder: '例如：确保内容真实可信，避免违禁词', required: false, rows: 2 },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <Wand2 className="w-6 h-6 text-blue-500" />
          Prompt Generator
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          结构化 Prompt 生成引擎：Role → Goal → Context → Task → Constraint → Output Format → Quality Check → AI Adapter
        </p>
      </div>

      {/* Mode Selector */}
      <div className="glass-card rounded-xl p-4">
        <label className="text-sm font-medium mb-3 block">生成模式</label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(modeLabels) as Array<keyof typeof modeLabels>).map((mode) => {
            const config = modeLabels[mode];
            return (
              <button
                key={mode}
                onClick={() => updateField('mode', mode)}
                className={`p-3 rounded-xl text-left transition-all ${
                  form.mode === mode
                    ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-1 ${config.color}`}>
                  {config.label}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">{config.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Model Selector */}
      <div className="glass-card rounded-xl p-4">
        <label className="text-sm font-medium mb-3 block">适配 AI 平台</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {AI_MODELS.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`p-2 rounded-lg text-left text-xs transition-all ${
                selectedModel === model.id
                  ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <p className="font-medium text-sm">{model.name}</p>
              <p className="text-slate-400 mt-0.5 truncate">{model.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="glass-card rounded-xl p-5 space-y-4">
        {formFields.map((field) => (
          <div key={field.key}>
            <label className="text-sm font-medium mb-1.5 flex items-center gap-1">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              value={form[field.key]}
              onChange={(e) => updateField(field.key, e.target.value)}
              placeholder={field.placeholder}
              rows={field.rows}
              className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition-all"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
        >
          <Sparkles className="w-4 h-4" />
          生成提示词
          <span className="text-xs opacity-75">Ctrl+Enter</span>
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl font-medium transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          重置
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4 animate-slide-up">
          {/* Quality Score */}
          {quality && (
            <div className="glass-card rounded-xl p-4">
              <button
                onClick={() => setShowQuality(!showQuality)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-blue-500" />
                  <div>
                    <span className="font-medium">质量评分</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${getGradeColor(quality.grade)}`}>
                      {quality.grade}级 · {quality.overall}分
                    </span>
                  </div>
                </div>
                {showQuality ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showQuality && (
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { label: '清晰度', value: quality.clarity },
                      { label: '具体性', value: quality.specificity },
                      { label: '结构性', value: quality.structure },
                      { label: '完整性', value: quality.completeness },
                      { label: '可执行性', value: quality.executability },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-1">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-500">{item.label}</span>
                        <span className="text-xs font-medium ml-1">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {quality.suggestions.map((suggestion, idx) => (
                      <p key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1">
                        <Zap className="w-3 h-3 mt-0.5 flex-shrink-0 text-yellow-500" />
                        {suggestion}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">

<a
href="https://chat.openai.com/"
target="_blank"
className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
>
打开 GPT
</a>


<a
href="https://www.doubao.com/"
target="_blank"
className="px-3 py-2 rounded-lg bg-purple-600 text-white text-sm"
>
打开豆包
</a>


<a
href="https://chat.deepseek.com/"
target="_blank"
className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm"
>
打开 DeepSeek
</a>


</div>
          {/* Generated Prompt */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-sm">生成的提示词</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="复制"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="下载"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
                {result}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
