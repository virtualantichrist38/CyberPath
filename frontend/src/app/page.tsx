export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          CyberPath
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          AI-Powered Cybersecurity Learning Platform
        </p>

        <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold">
          Start Learning
        </button>
      </div>
    </main>
  );
}