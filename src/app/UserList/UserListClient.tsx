'use client';
import { User } from "@/types/user";
import { useState } from "react";

export default function UserListClient({ users }: { users: User[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    // 计算当前页的数据
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    // 改变页码
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const handleAddUser = async () => {
        const name = prompt('请输入用户名');
        const email = prompt('请输入邮箱');
        if (name && email) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email })
            });
            window.location.reload();
        }
    };

    const handleEditUser = async (user: User) => {
        const name = prompt('请输入新用户名', user.name);
        const email = prompt('请输入新邮箱', user.email);
        if (name && email) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: user.id, name, email })
            });
            window.location.reload();
        }
    };

    const handleDeleteUser = async (id: number) => {
        if (confirm('确定要删除这个用户吗？')) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            window.location.reload();
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">用户列表</h2>
            <div className="mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddUser}
                >
                    添加用户
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                        onClick={() => handleEditUser(user)}
                                    >编辑</button>
                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >删除</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 分页组件 */}
            <div className="flex justify-center mt-6">
                <nav className="inline-flex rounded-md shadow">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                        上一页
                    </button>
                    {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 border-t border-b border-gray-300 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
                        className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                        下一页
                    </button>
                </nav>
            </div>
        </div>
    );
}