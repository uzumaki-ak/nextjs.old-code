"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };

  return (
    <div>
      home it is
      {/* <Link href="/users">
        <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          view projects
        </button>
      </Link> */}
      <button
        onClick={() => navigate("users")}
        className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        view projects
      </button>
    </div>
  );
}
