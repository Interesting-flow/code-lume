import { User } from "@/types/user";
import UserListClient from "@/app/UserList/UserListClient";

export default async function UserList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
    const users: User[] = await res.json();
    
    return <UserListClient users={users} />;
}
    
//     return (
//         <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-2xl font-bold mb-6">用户列表</h2>
//             <div className="mb-4">
//                 <button 
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     onClick={handleAddUser}
//                 >
//                     添加用户
//                 </button>
//             </div>
            
//             <div className="mb-4">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     添加用户
//                 </button>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                                     <button 
//                                         className="text-indigo-600 hover:text-indigo-900 mr-4"
//                                         onClick={() => handleEditUser(user)}
//                                     >编辑</button>
//                                     <button 
//                                         className="text-red-600 hover:text-red-900"
//                                         onClick={() => handleDeleteUser(user.id)}
//                                     >删除</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }