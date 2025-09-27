import Link from "next/link";
import React from "react";

const Tryin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-50 p-4">
        <nav className="w-full h-10 ">
          <ul className="flex space-x-4 justify-center gap-3.5">
            <li>
              <Link href="/try2">try2</Link>
            </li>
            <li>
              <Link href="/gamess">games</Link>
            </li>
            <li>
              <Link href="/gamess">games</Link>
            </li>
            <li>
              <Link href="/gamess">games</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-72 bg-gray-100 p-4">
          <ul>
            <li>
              <Link href="/tryin/try">try2</Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Tryin;
