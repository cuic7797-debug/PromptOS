import { useState } from 'react';
import {
  BrainCircuit, Upload, Wand2, Copy, Check, Download,
  Target, Zap, AlertCircle, Lightbulb, TrendingUp
} from 'lucide-react';
import { analyzeQuality, optimizePrompt } from '../lib/promptEngine';
import { copyToClipboard, downloadText, getGradeColor } from '../lib/utils';
import type { QualityScore } from '../types';

export function Optimizer() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [quality, setQuality] = useState<QualityScore | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'analysis' | 'optimized'>('analysis');

  const handleAnalyze = () => {
    if (!input.trim()) return;
    const q = analyzeQuality(input);
    setQuality(q);
    const optimized = optimizePrompt(input);
    setResult(optimized);
  };

  const handleCopy = async (text: string) => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (text: string, filename: string) => {
    downloadText(text, filename);
  };

  const scoreItems = quality ? [
    { label: '清晰度', value: quality.clarity, desc: '表达是否清晰易懂' },
    { label: '具体性', value: quality.specificity, desc: '细节是否充分具体' },
    { label: '结构性', value: quality.structure, desc: '逻辑结构是否清晰' },
    { label: '完整性', value: quality.completeness, desc: '要素是否完整覆盖' },
    { label: '可执行性', value: quality.executability, desc: 'AI能否准确执行' },
  ] : [];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-purple-500" />
          Prompt Optimizer
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          智能优化提示词质量：清晰度、具体性、结构性、完整性、可执行性五维度评分与优化建议
        </p>
      </div>

      {/* Input Section */}
      <div className="glass-card rounded-xl p-5">
        <label className="text-sm font-medium mb-2 block">输入你的提示词</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="粘贴你的提示词，AI将为你分析质量并提供优化建议..."
          rows={8}
          className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none transition-all"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-slate-400">{input.length} 字符</span>
          <div className="flex gap-2">
            <button
              onClick={() => setInput('')}
              className="px-3 py-2 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              清空
            </button>
            <button
              onClick={handleAnalyze}
              disabled={!input.trim()}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              分析并优化
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {quality && (
        <div className="space-y-4 animate-slide-up">
          {/* Overall Score */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-500" />
                <h2 className="text-lg font-semibold">质量分析报告</h2>
              </div>
              <div className={`px-4 py-2 rounded-full text-lg font-bold ${getGradeColor(quality.grade)}`}>
                {quality.grade}级 · {quality.overall}分
              </div>
            </div>

            {/* Score Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {scoreItems.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ${
                        item.value >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        item.value >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-red-500 to-pink-500'
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-2xl font-bold mt-1">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold">优化建议</h3>
            </div>
            <div className="space-y-2">
              {quality.suggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800"
                >
                  <Zap className="w-4 h-4 mt-0.5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex border-b border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('analysis')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'analysis'
                    ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                原始分析
              </button>
              <button
                onClick={() => setActiveTab('optimized')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'optimized'
                    ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                优化版本
              </button>
            </div>

            <div className="p-4">
              {activeTab === 'analysis' ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-500">原始提示词</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(input)}
                        className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg">
                    {input}
                  </pre>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">AI优化后的提示词</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(result)}
                        className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="复制"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleDownload(result, `optimized-prompt-${Date.now()}.txt`)}
                        className="p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="下载"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    {result}
                  </pre>
                  <div className="mt-3 flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                    <AlertCircle className="w-3 h-3" />
                    <span>优化版本已自动补充角色定位、输出格式和约束条件</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
