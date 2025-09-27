export default function GreenMind() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-6">
      <div className="w-full max-w-3xl space-y-6 rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">GreenMindAI</h1>
        <p className="text-gray-700">
          GreenMindAI leverages AI to streamline waste management, incentivizing users to recycle through a 
          points-based system. It connects waste collectors with businesses, promoting sustainability and 
          social equity.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-green-600">♻️ AI-Powered Recycling</h2>
            <p className="text-gray-600">Analyze waste & suggest best disposal methods.</p>
          </div>

          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-green-600">🏆 Reward System</h2>
            <p className="text-gray-600">Earn points & redeem rewards for responsible recycling.</p>
          </div>

          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-green-600">🌍 Sustainability Dashboard</h2>
            <p className="text-gray-600">Track carbon footprint & waste impact in real-time.</p>
          </div>

          <div className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-green-600">🤝 Fair Wages for Collectors</h2>
            <p className="text-gray-600">Ensuring fair pay for waste collectors & workers.</p>
          </div>
        </div>

        <button className="mt-4 rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
