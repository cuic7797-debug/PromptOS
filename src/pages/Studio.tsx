export function Studio() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          🎨 AI 创作中心
        </h1>

        <p className="text-slate-400 mt-2">
          文生图、文生视频、商业内容创作工作台
        </p>
      </div>


      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded-xl border">
          <h2 className="text-xl font-bold">
            🎨 图片 Prompt
          </h2>

          <p className="mt-3 text-sm">
            自动生成 Midjourney、
            Stable Diffusion、
            DALL-E 专业提示词
          </p>
        </div>


        <div className="p-6 rounded-xl border">

          <h2 className="text-xl font-bold">
            🎬 视频 Prompt
          </h2>

          <p className="mt-3 text-sm">
            自动生成短视频分镜、
            运镜、镜头语言
          </p>

        </div>


        <div className="p-6 rounded-xl border">

          <h2 className="text-xl font-bold">
            📦 商业素材
          </h2>

          <p className="mt-3 text-sm">
            电商、广告、品牌内容生成
          </p>

        </div>

      </div>

    </div>
  );
}