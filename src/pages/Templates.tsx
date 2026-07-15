import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Search, Filter, Flame, Star, BookOpen, X, ChevronRight,
  Copy, Check, Wand2, Tag, Grid3X3, List
} from 'lucide-react';
import { getTemplatesByCategory, searchTemplates, getCategories, getTemplateById } from '../data/templates';
import { copyToClipboard, generateId } from '../lib/utils';
import { useAppStore } from '../store/appStore';
import type { PromptTemplate } from '../types';

function extractField(
  content:string,
  field:string
){

  const regex =
  new RegExp(
    `${field}：\\s*([\\s\\S]*?)(?=\\n\\n|$)`
  );


  const match =
  content.match(regex);


  return match
  ?
  match[1].trim()
  :
  '';

}
export function Templates() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { addHistory } = useAppStore();

  const categories = getCategories();

  useEffect(() => {
    const templateId = searchParams.get('id');
    if (templateId) {
      const template = getTemplateById(templateId);
      if (template) {
        setSelectedTemplate(template);
        setVariableValues({});
      }
    }
  }, [searchParams]);

  const filteredTemplates = useMemo(() => {
    if (searchQuery) {
      return searchTemplates(searchQuery);
    }
    return getTemplatesByCategory(selectedCategory);
  }, [searchQuery, selectedCategory]);

  const handleUseTemplate = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    setVariableValues({});
    setSearchQuery('');
  };

  const handleFillVariable = (varName: string, value: string) => {
    setVariableValues(prev => ({ ...prev, [varName]: value }));
  };

  const getFilledContent = () => {
    if (!selectedTemplate) return '';
    let content = selectedTemplate.content;
    selectedTemplate.variables.forEach(varName => {
      const value = variableValues[varName] || `{${varName}}`;
      content = content.replace(new RegExp(`{${varName}}`, 'g'), value);
    });
    return content;
  };

  const handleCopy = async () => {
    const content = getFilledContent();
    await copyToClipboard(content);
    setCopied(true);

    addHistory({
      id: generateId(),
      title: selectedTemplate?.title || '模板使用',
      content: content,
      model: selectedTemplate?.aiModels[0] || 'gpt-4',
      createdAt: Date.now(),
      tags: [selectedTemplate?.category || ''],
    });

    setTimeout(() => setCopied(false), 2000);
  };

 const handleGoToGenerator = () => {

  if (!selectedTemplate) return;


  navigate('/generator', {

    state: {

      template: {


        role: extractField(
          selectedTemplate.content,
          '角色定位'
        ),


        goal: extractField(
          selectedTemplate.content,
          '任务目标'
        ),


        context: extractField(
          selectedTemplate.content,
          '背景'
        ),


        task: extractField(
          selectedTemplate.content,
          '具体任务'
        ),


        constraint: extractField(
          selectedTemplate.content,
          '约束'
        ),


        outputFormat: extractField(
          selectedTemplate.content,
          '输出格式'
        ),


        qualityCheck: ''

      }

    }

  });


};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-500" />
          模板中心
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          100+ 专业场景模板，覆盖电商、短视频、小红书、Midjourney、代码、办公等21个分类
        </p>
      </div>

      {/* Search & Filter */}
      <div className="glass-card rounded-xl p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索模板标题、描述、标签..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === category && !searchQuery
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-2 ring-green-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {searchQuery && (
          <p className="text-sm text-slate-500">
            搜索 "{searchQuery}" 找到 {filteredTemplates.length} 个结果
          </p>
        )}
      </div>

      {/* Templates Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleUseTemplate(template)}
              className="glass-card rounded-xl p-4 text-left hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {template.category}
                  </span>
                  {template.isHot && (
                    <Flame className="w-3 h-3 text-red-500" />
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-medium text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {template.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                {template.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {template.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-700 text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400">{template.usage}次使用</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleUseTemplate(template)}
              className="w-full glass-card rounded-xl p-4 text-left hover:shadow-lg transition-all flex items-center gap-4 group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600">
                    {template.category}
                  </span>
                  {template.isHot && <Flame className="w-3 h-3 text-red-500" />}
                  <span className="text-xs text-slate-400">{template.usage}次使用</span>
                </div>
                <h3 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                  {template.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{template.description}</p>
              </div>
              <div className="flex flex-wrap gap-1 flex-shrink-0">
                {template.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-700 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </button>
          ))}
        </div>
      )}

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className="font-bold text-lg">{selectedTemplate.title}</h2>
                <p className="text-sm text-slate-500">{selectedTemplate.description}</p>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[60vh] space-y-4">
              {/* Variables */}
              {selectedTemplate.variables.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-500" />
                    变量替换
                  </h3>
                  <div className="space-y-2">
                    {selectedTemplate.variables.map((varName) => (
                      <div key={varName}>
                        <label className="text-xs text-slate-500 block mb-1">{varName}</label>
                        <input
                          type="text"
                          value={variableValues[varName] || ''}
                          onChange={(e) => handleFillVariable(varName, e.target.value)}
                          placeholder={`输入${varName}...`}
                          className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview */}
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-green-500" />
                  预览
                </h3>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
                    {getFilledContent()}
                  </pre>
                </div>
              </div>

              {/* AI Models */}
              <div>
                <h3 className="text-sm font-medium mb-2">适用模型</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTemplate.aiModels.map(model => (
                    <span key={model} className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 p-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={handleCopy}
                className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? '已复制' : '复制提示词'}
              </button>
              <button
                onClick={handleGoToGenerator}
                className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Wand2 className="w-4 h-4" />
                去 Generator 优化
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
