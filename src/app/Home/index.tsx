import Background from "@/components/Background";

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Background />
            <main className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">欢迎来到 CodeLume</h1>
                <p className="text-lg mb-8">这里是一个展示 CodeLume 项目的地方。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md"></div>
                    <h2 className="text-2xl font-bold mb-4">项目介绍</h2>
                    <p className="text-lg">这是一个展示 CodeLume 项目的地方。</p>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md"></div>
                    <h2 className="text-2xl font-bold mb-4">项目介绍</h2>
                    <p className="text-lg">这是一个展示 CodeLume 项目的地方。</p>
                </div>
            </main>
        </div>
    )
}