const tools = [
  { id: 1, name: "Figma", category: "Design tool", image: "../assets/figma.svg" },
  { id: 2, name: "CSS", category: "User Interface", image: "../assets/css3.svg" },
  { id: 3, name: "JavaScript", category: "Interaction", image: "../assets/javascript.svg" },
  { id: 4, name: "TypeScript", category: "Interaction", image: "../assets/ts-logo-128.svg" },
  { id: 5, name: "NextJS", category: "Framework", image: "../assets/Next.js.svg" },
  { id: 6, name: "HTML", category: "Interaction", image: "../assets/html-5-logo.svg" },
  { id: 7, name: "Tailwind CSS", category: "User Interface", image: "../assets/tailwindcss.svg" },
  { id: 8, name: "React", category: "Framework", image: "../assets/react.svg" }
];

export default function Tools() {
  return (
    <div className='w-2/3 mx-auto my-10 mt-10 text-white rounded-2xl'>
      <h1 className='py-5 text-4xl text-white'>Essential Tools I Use</h1>

      <p className="text-sm text-gray-400">
        Discover the powerful tools and technologies I use to create
        exceptional, high-performing websites & applications.
      </p>
      
      <div className="grid grid-cols-1 gap-3 my-10 md:grid-cols-4">
        {tools.map(tool => (
          <div key={tool.id} className="flex items-center p-4 border rounded-2xl border-zinc-700">
            <img src={tool.image} alt={tool.name} className="w-10 h-10 mr-4"/>
            <div>
              <p className="text-lg font-semibold">{tool.name}</p>
              <p className="text-sm text-gray-400">{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 