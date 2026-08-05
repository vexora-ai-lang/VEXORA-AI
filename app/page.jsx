export default function Home() {
  const tools = [
    { icon: "🖼️", title: "Image Prompt Generator" },
    { icon: "🎥", title: "Video Prompt Generator" },
    { icon: "📝", title: "Caption Generator" },
    { icon: "🏷️", title: "SEO Hashtag Generator" },
    { icon: "🎙️", title: "Voice-over Generator" },
    { icon: "📋", title: "Storyboard Creator" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-purple-400">
          VEXORA AI
        </h1>

        <p className="text-gray-400 mt-2">
          Create smarter. Create faster. Powered by AI.
        </p>

        <div className="grid gap-4 mt-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-5"
            >
              <div className="text-3xl">{tool.icon}</div>
              <h2 className="text-lg font-semibold mt-2">
                {tool.title}
              </h2>
              <button className="mt-3 bg-purple-600 px-4 py-2 rounded-xl">
                Open Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
