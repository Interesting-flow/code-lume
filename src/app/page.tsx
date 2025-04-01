import Home from "@/app/Home";
import UserList from "@/app/UserList/page";

export default async function Page() {

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <Home />
        <UserList />
      </main>
      <footer className="mt-8 text-center text-gray-500">
        &copy; 2024 CodeLume. All rights reserved.
      </footer>
    </div>
  );
}



