import Link from 'next/link';
import { Clock4, Palette, MonitorCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-foreground">欢迎使用CodeLume</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Clock4 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">实时动态壁纸</h3>
          </div>
          <p className="text-foreground/80 pl-2">
            智能感知时间、天气和系统主题变化，自动切换匹配的场景壁纸，
            支持日出日落、雨雪天气等500+种动态效果
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-500/10 p-3 rounded-lg">
              <Palette className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">AI场景生成</h3>
          </div>
          <p className="text-foreground/80 pl-2">
            通过自然语言描述生成专属壁纸，支持二次元、赛博朋克等20+种风格，
            每日免费生成10张高清壁纸
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-500/10 p-3 rounded-lg">
              <MonitorCheck className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">多屏同步</h3>
          </div>
          <p className="text-foreground/80 pl-2">
            完美支持Mac多显示器配置，自动识别屏幕分辨率，
            提供横竖屏自适应布局方案
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-500/10 p-3 rounded-lg">
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">性能优化</h3>
          </div>
          <p className="text-foreground/80 pl-2">
            M系列芯片专属优化，内存占用低于100MB，
            4K分辨率下CPU使用率不超过2%
          </p>
        </div>
      </div>

      <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">🎉 即刻体验</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-foreground/80">
              📥 下载最新版本：v2.1.0（专为 Apple Silicon 版本支持）
            </p>
            <p className="text-foreground/80">
              🖥 系统要求：macOS Monterey 12.3 或更高版本
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
              立即下载
            </button>
            <Link href="/tutorial" className="border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
              查看教程
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}