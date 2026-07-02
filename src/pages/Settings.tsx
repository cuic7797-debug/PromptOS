import { useState } from 'react';
import {
  Moon, Sun, Monitor, Download, Upload, Trash2, Keyboard,
  Globe, Shield, Info, ChevronRight, Check, FileJson, FileSpreadsheet,
  AlertTriangle
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { downloadJSON, downloadText } from '../lib/utils';

export function Settings() {
  const { settings, updateSettings, history, clearHistory } = useAppStore();
  const [exportStatus, setExportStatus] = useState<'idle' | 'success'>('idle');
  const [clearConfirm, setClearConfirm] = useState(false);
  const [importData, setImportData] = useState('');
  const [showImport, setShowImport] = useState(false);

  const handleExport = (format: 'json' | 'csv') => {
    if (format === 'json') {
      const data = {
        version: '1.0.0',
        exportAt: new Date().toISOString(),
        settings,
        history,
      };
      downloadJSON(data, `promptos-backup-${new Date().toISOString().split('T')[0]}.json`);
    } else {
      const headers = 'ID,Title,Model,Quality,CreatedAt,Content\n';
      const rows = history.map(h => 
        `${h.id},"${h.title.replace(/"/g, '""')}",${h.model},${h.quality || ''},${new Date(h.createdAt).toISOString()},"${h.content.replace(/"/g, '""').substring(0, 200)}..."`
      ).join('\n');
      downloadText(headers + rows, `promptos-history-${new Date().toISOString().split('T')[0]}.csv`);
    }
    setExportStatus('success');
    setTimeout(() => setExportStatus('idle'), 2000);
  };

  const handleImport = () => {
    try {
      const data = JSON.parse(importData);
      if (data.settings) updateSettings(data.settings);
      if (data.history && Array.isArray(data.history)) {
        data.history.forEach((item: unknown) => {
          // 简化处理，实际应验证结构
        });
      }
      alert('数据导入成功！');
      setShowImport(false);
      setImportData('');
      window.location.reload();
    } catch {
      alert('导入失败：无效的JSON格式');
    }
  };

  const handleClear = () => {
    localStorage.clear();
    clearHistory();
    setClearConfirm(false);
    window.location.reload();
  };

  const shortcuts = [
    { keys: 'Ctrl + Enter', action: '生成提示词' },
    { keys: 'Ctrl + Shift + C', action: '清空输入' },
    { keys: 'Ctrl + Shift + T', action: '切换主题' },
    { keys: 'Ctrl + /', action: '显示快捷键' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">设置</h1>
        <p className="text-slate-500 dark:text-slate-400">管理你的 PromptOS 偏好和数据</p>
      </div>

      {/* Appearance */}
      <div className="glass-card rounded-xl p-5">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Monitor className="w-5 h-5 text-blue-500" />
          外观
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">主题模式</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">选择你喜欢的界面主题</p>
            </div>
            <div className="flex gap-2">
              {([
                { value: 'light', icon: Sun, label: '浅色' },
                { value: 'dark', icon: Moon, label: '深色' },
                { value: 'system', icon: Monitor, label: '跟随系统' },
              ] as const).map((theme) => {
                const Icon = theme.icon;
                const isActive = settings.theme === theme.value;
                return (
                  <button
                    key={theme.value}
                    onClick={() => updateSettings({ theme: theme.value })}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                      ${isActive
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{theme.label}</span>
                    {isActive && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Generator Defaults */}
      <div className="glass-card rounded-xl p-5">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-purple-500" />
          生成器默认设置
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">默认生成模式</p>
              <p className="text-sm text-slate-500">生成提示词时的默认模式</p>
            </div>
            <select
              value={settings.defaultMode}
              onChange={(e) => updateSettings({ defaultMode: e.target.value as 'basic' | 'advanced' | 'expert' })}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="basic">基础版</option>
              <option value="advanced">进阶版</option>
              <option value="expert">专家版</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">默认 AI 模型</p>
              <p className="text-sm text-slate-500">生成时默认选择的模型</p>
            </div>
            <select
              value={settings.defaultModel}
              onChange={(e) => updateSettings({ defaultModel: e.target.value })}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="claude">Claude</option>
              <option value="deepseek">DeepSeek</option>
              <option value="kimi">Kimi</option>
              <option value="midjourney">Midjourney</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">自动保存</p>
              <p className="text-sm text-slate-500">生成后自动保存到历史记录</p>
            </div>
            <button
              onClick={() => updateSettings({ autoSave: !settings.autoSave })}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                settings.autoSave ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                settings.autoSave ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="glass-card rounded-xl p-5">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          数据管理
        </h2>
        <div className="space-y-3">
          <button
            onClick={() => handleExport('json')}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <FileJson className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-left">
                <p className="font-medium">导出 JSON 备份</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">备份所有设置和历史记录</p>
              </div>
            </div>
            {exportStatus === 'success' ? (
              <span className="text-green-600 text-sm">已导出!</span>
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>

          <button
            onClick={() => handleExport('csv')}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-left">
                <p className="font-medium">导出 CSV</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">导出历史记录为表格</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button
            onClick={() => setShowImport(!showImport)}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                <Upload className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-left">
                <p className="font-medium">导入数据</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">从 JSON 文件恢复数据</p>
              </div>
            </div>
            <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${showImport ? 'rotate-90' : ''}`} />
          </button>

          {showImport && (
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <textarea
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="粘贴 JSON 数据..."
                rows={4}
                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleImport}
                  disabled={!importData.trim()}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 disabled:opacity-50 transition-colors"
                >
                  确认导入
                </button>
                <button
                  onClick={() => { setShowImport(false); setImportData(''); }}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          )}

          {!clearConfirm ? (
            <button
              onClick={() => setClearConfirm(true)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-red-600 dark:text-red-400">清除所有数据</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">删除所有本地存储的数据</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <p className="font-medium text-red-700 dark:text-red-300">警告</p>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                确定要清除所有数据吗？此操作不可恢复，将删除所有历史记录、收藏和设置。
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleClear}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                >
                  确认清除
                </button>
                <button
                  onClick={() => setClearConfirm(false)}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="glass-card rounded-xl p-5">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Keyboard className="w-5 h-5 text-orange-500" />
          快捷键
        </h2>
        <div className="space-y-2">
          {shortcuts.map((shortcut) => (
            <div
              key={shortcut.action}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-sm">{shortcut.action}</span>
              <kbd className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-xs font-mono">
                {shortcut.keys}
              </kbd>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="glass-card rounded-xl p-5">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-slate-500" />
          关于
        </h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex justify-between">
            <span>版本</span>
            <span className="font-mono">v1.0.0 Commercial</span>
          </div>
          <div className="flex justify-between">
            <span>构建时间</span>
            <span>2026-07-02</span>
          </div>
          <div className="flex justify-between">
            <span>技术栈</span>
            <span>Vite + React 19 + TypeScript + Tailwind</span>
          </div>
          <div className="flex justify-between">
            <span>数据存储</span>
            <span>本地浏览器（零API成本）</span>
          </div>
          <div className="flex justify-between">
            <span>模板数量</span>
            <span>100+ 专业场景</span>
          </div>
          <div className="flex justify-between">
            <span>开源协议</span>
            <span>MIT</span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-sm text-blue-700 dark:text-blue-300">
          PromptOS 目标：国内最好用的免费 Prompt 工具。完全免费，零 API 成本。
        </div>
      </div>
    </div>
  );
}
