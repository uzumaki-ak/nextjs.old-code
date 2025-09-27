// import Link from "next/link";

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       name: "GreenMindAI",
//       description: "AI-powered waste management system.",
//     },
//   ];

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow-lg">
//         <h1 className="text-2xl font-semibold text-gray-800">My Projects</h1>

//         {projects.map((kroject) => (
//           <div key={kroject.id} className="rounded-lg border p-4 shadow-sm">
//             <h2 className="text-lg font-medium text-gray-800">
//               {kroject.name}
//             </h2>
//             <p className="text-gray-600">{kroject.description}</p>
//             <Link href="/users/projects/greenmind">
//               <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
//                 View Project
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Greenmind",
      description:
        "this uis green mind project whioch collecys the dusbins ariynd worlsd",
      worth: 10000,
      admin: "whoever",
    },
  ];

  return (
    <div>
      <h1>projecta</h1>

      {projects.map((proj) => (
        <div key={proj.id}>
          <h2>{proj.name}</h2>
          <p>{proj.description}</p>
          <p>worth: {proj.worth}</p>
          <p>admin: {proj.admin}</p>
        </div>
      ))}
    </div>
  );
}
