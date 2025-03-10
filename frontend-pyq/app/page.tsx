"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-black font-sans p-4 dynamic-gradient">      

      {/* Navbar */}
      <nav className="w-full flex justify-center fixed top-4 z-50">
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-6 py-3 shadow-lg w-[80%] max-w-3xl">
          <h1 className="text-lg font-bold flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2">PyQ</span> Analyzer
          </h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">About Us</Link>
          </div>
        </div>
      </nav>

      {/* Hero Text */}
      <div className="relative z-10 mt-25 text-center cursor-default">
        <h1 className="text-6xl font-bold text-white bg-opacity-70 max-w-5xl">
          Transform Question Papers
        </h1>
        <h1 className="text-6xl font-bold text-white bg-opacity-70 max-w-5xl">
        <span className=" font-thin italic text-6xl">into</span> Your Competitive&nbsp;
        <a href="" target=""
            className="bg-gradient-to-r from-white to-blue-300 bg-[length:100%_6px] bg-no-repeat bg-bottom cursor-default">
            Advantage
        </a> 
        </h1>
        
      </div>

      {/* Content */}
      <div className="relative z-10 mt-10 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Upload Question Paper PDFs</h2>
        <input 
          type="file" 
          accept="application/pdf" 
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))} 
          className="mb-4 p-2 border rounded-md text-black"
        />
        <button
          onClick={async () => {
            if (files.length === 0) {
              alert("Please select at least one PDF file!");
              return;
            }
            setLoading(true);
            setError("");
            setResults([]);

            const formData = new FormData();
            files.forEach((file, index) => {
              formData.append(`file${index}`, file);
            });

            try {
              const res = await fetch("https://pyq-production.up.railway.app/predict/", {
                method: "POST",
                body: formData,
              });

              if (!res.ok) {
                throw new Error(`Server responded with ${res.status}`);
              }

              const data = await res.json();
              if (!data || !Array.isArray(data.results)) {
                throw new Error("Unexpected response format from server.");
              }

              setResults(data.results);
              setFiles([]);
            } catch (error) {
              console.error("Error:", error);
              setError(error.message || "An unexpected error occurred.");
            } finally {
              setLoading(false);
            }
          }}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Analyze PDFs"}
        </button>
      </div>
      
      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      {results.length > 0 && (
        <div className="relative z-10 mt-6 w-full max-w-2xl bg-white text-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Ranked Questions</h2>
          <ul>
            {results.map((item, index) => (
              <li key={index} className="mb-3 p-3 border-b border-gray-300">
                <strong>Q:</strong> {item.question} <br />
                <strong>Appeared in:</strong> {Array.isArray(item.years) ? item.years.filter(y => y).join(", ") : "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer - Ensured Above the Blob */}
      <footer className="relative z-10 mt-30  w-full text-center py-4">
        <p className="text-white">© 2025 PyQ Analyzer. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
