export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">欢迎使用CodeLume</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">下一代代码管理平台</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          CodeLume 是面向现代开发团队的智能化代码管理解决方案，集成代码审查、版本控制、自动化测试等核心功能，
          通过AI驱动的代码分析帮助团队提升开发效率。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-3 dark:text-white">核心功能</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• AI智能代码审查</li>
            <li>• 实时协作编辑</li>
            <li>• 自动化版本管理</li>
            <li>• 智能冲突解决</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-3 dark:text-white">技术优势</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 分布式架构设计</li>
            <li>• 毫秒级代码检索</li>
            <li>• 端到端加密</li>
            <li>• 多语言支持</li>
          </ul>
        </div>
      </div>
    </div>
  );
}