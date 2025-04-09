export default function Tutorial() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">教程中心</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">入门指南</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          本节将带您快速掌握CodeLume的基本操作，包含安装配置、项目创建等基础内容。
        </p>
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-4" />
      </div>
    </div>
  );
}