"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Users() {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center">
          {/* User Avatar */}
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-blue-500">
            hey
          </div>

          <div>
            <button
              onClick={() => navigate("/users/projects")}
              className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            >
              view projects
            </button>
          </div>

          {/* User Info */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="mt-2 text-gray-600">
            Software Engineer | Tech Enthusiast
          </p>

          {/* Edit Profile Button */}
          {/* <Link href="/users/projects">
          <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
           view projects
          </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
