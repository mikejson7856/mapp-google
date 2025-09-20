import { useState } from "react";
import { Search, X } from "lucide-react";

export default function LocationSearch() {
  const [query, setQuery] = useState("40.333453, -102.437074");

  return (
    <div className="flex flex-col items-center justify-center mt-5 h-full">
      {/* Heading */}
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        What's your area?
      </h2>

      {/* Search box */}
      <div className="relative w-96">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-4 pr-20 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          placeholder="Enter coordinates"
        />

        {/* Search icon */}
        <button className="absolute right-10 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800">
          <Search size={20} />
        </button>

        {/* Clear icon */}
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
