import { useState } from 'react';
import {
  Languages, ArrowRightLeft, Copy, Check, Globe,
  MessageSquare, Image, Video, Code, Sparkles
} from 'lucide-react';
import { translatePrompt, AI_MODELS } from '../lib/promptEngine';
import { copyToClipboard } from '../lib/utils';

const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  chat: MessageSquare,
  image: Image,
  video: Video,
  code: Code,
};

export function Translator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [targetLang, setTargetLang] = useState<'zh' | 'en'>('en');
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [copied, setCopied] = useState(false);

  const handleTranslate = () => {
    if (!input.trim()) return;
    const model = AI_MODELS.find(m => m.id === selectedModel);
    setResult(translatePrompt(input, targetLang, model?.name || selectedModel));
  };

  const handleCopy = async () => {
    await copyToClipboard(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwap = () => {
    setTargetLang(targetLang === 'zh' ? 'en' : 'zh');
    if (result) {
      setInput(result);
      setResult('');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <Languages className="w-6 h-6 text-orange-500" />
          Prompt Translator
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          多语言提示词翻译与适配：中英互译 + 针对 GPT/Claude/Midjourney 等模型的语言风格优化
        </p>
      </div>

      {/* Language Selector */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-1">
              <span className="text-xs text-slate-500 block mb-1">源语言</span>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="font-medium">{targetLang === 'zh' ? 'English' : '中文'}</span>
              </div>
            </div>

            <button
              onClick={handleSwap}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowRightLeft className="w-5 h-5 text-slate-400" />
            </button>

            <div className="flex-1">
              <span className="text-xs text-slate-500 block mb-1">目标语言</span>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  {targetLang === 'zh' ? '中文' : 'English'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Selector */}
      <div className="glass-card rounded-xl p-4">
        <label className="text-sm font-medium mb-3 block">目标 AI 模型（用于语言风格适配）</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {AI_MODELS.map((model) => {
            const Icon = categoryIcons[model.category] || MessageSquare;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`p-2 rounded-lg text-left text-xs transition-all ${
                  selectedModel === model.id
                    ? 'ring-2 ring-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3 h-3" />
                  <span className="font-medium text-sm">{model.name}</span>
                </div>
                <p className="text-slate-400 truncate">{model.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input */}
      <div className="glass-card rounded-xl p-5">
        <label className="text-sm font-medium mb-2 block">输入提示词</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={targetLang === 'en' ? "输入中文提示词，AI将翻译为英文并适配目标模型..." : "Enter English prompt, AI will translate to Chinese..."}
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none transition-all"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-slate-400">{input.length} 字符</span>
          <button
            onClick={handleTranslate}
            disabled={!input.trim()}
            className="px-5 py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            翻译并适配
          </button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="glass-card rounded-xl overflow-hidden animate-slide-up">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-orange-50 dark:bg-orange-900/10">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-orange-500" />
              <span className="font-medium text-sm">翻译结果</span>
              <span className="text-xs text-slate-400">
                已适配 {AI_MODELS.find(m => m.id === selectedModel)?.name}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="p-4">
            <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
              {result}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
