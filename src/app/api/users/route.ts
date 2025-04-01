import { NextResponse } from 'next/server';
import { User } from "@/types/user";

// Mock数据
let users: User[] = [
  { id: 1, name: "张三", email: "zhangsan@example.com" },
  { id: 2, name: "李四", email: "lisi@example.com" },
  { id: 3, name: "王五", email: "wangwu@example.com" },
  { id: 4, name: "赵六", email: "zhaoliu@example.com" },
  { id: 5, name: "钱七", email: "qianqi@example.com" },
  { id: 6, name: "孙八", email: "sunba@example.com" },
  { id: 7, name: "周九", email: "zhoujiu@example.com" },
  { id: 8, name: "吴十", email: "wushi@example.com" },
];

// 获取用户列表
export async function GET() {
  return NextResponse.json(users);
}

// 创建用户
export async function POST(request: Request) {
  const newUser = await request.json();
  newUser.id = users.length + 1;
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// 更新用户
export async function PUT(request: Request) {
  const updatedUser = await request.json();
  const index = users.findIndex(u => u.id === updatedUser.id);
  
  if (index === -1) {
    return NextResponse.json({ error: "用户不存在" }, { status: 404 });
  }
  
  users[index] = updatedUser;
  return NextResponse.json(updatedUser);
}

// 删除用户
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const index = users.findIndex(u => u.id === id);
  
  if (index === -1) {
    return NextResponse.json({ error: "用户不存在" }, { status: 404 });
  }
  
  users = users.filter(u => u.id !== id);
  return NextResponse.json({ success: true });
}