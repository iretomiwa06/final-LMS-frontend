import { useState, useMemo, useEffect } from "react";
import logoImage from "../../Images/School Logo.png";
import backgroundImage from "../../Images/Background.png";
import { getAllBooks, searchBooks } from "../../services/api";




export default function BookSearchPage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all books on mount
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getAllBooks();
        setBooks(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (err) {
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };
    fetchAllBooks();
  }, []);

  // Filter books locally based on search query
  const filteredBooks = useMemo(() => {
    if (!query.trim()) return books;
    return books.filter(
      (book) =>
        (book.title && book.title.toLowerCase().includes(query.toLowerCase())) ||
        (book.author && book.author.toLowerCase().includes(query.toLowerCase()))
    );
  }, [books, query]);

  // Group books by their first letter or category
  const groupedBooks = useMemo(() => {
    const groups = {};
    if (!filteredBooks || filteredBooks.length === 0) return groups;
    filteredBooks.forEach((book) => {
      const category = book.category?.trim() || "Uncategorized";
      if (!groups[category]) groups[category] = [];
      groups[category].push(book);
    });
    return groups;
  }, [filteredBooks]);

  return (
    <div className="min-h-screen bg-[#00E5FF] font-sans">
      {/* --- Header with Background --- */}
      <div
        className="relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-cyan-400/80 to-blue-500/30 backdrop-blur-sm"></div>

        <div className="relative z-10 p-6">
          <button className="text-white mb-4">
            {/* <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg> */}
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Image */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-900 overflow-hidden">
                <img
                  src={logoImage}
                  alt="Lead City University Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h1 className="text-4xl font-extrabold text-black tracking-tight">
                Books
              </h1>
            </div>

            {/* Search Bar Pill */}
            <div className="relative w-full max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-lg ml-0 sm:ml-4">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 sm:h-8 bg-white/70 backdrop-blur-md pl-10 pr-10 rounded-full text-sm placeholder-gray-500 focus:outline-none shadow-inner text-black transition-all duration-300 focus:scale-105 focus:shadow-xl focus:bg-white"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none hidden sm:flex">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7-0 11-14 0 7 7-0 0114 0z" />
                </svg>
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7-0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Alphabet Navigation Strip --- */}
      <div className="flex items-center overflow-x-auto py-4 px-4 no-scrollbar whitespace-nowrap">

      </div>

      {loading && <div className="text-center mt-10">Loading books...</div>}
{error && <div className="text-center mt-10 text-red-600">{error}</div>}



      {/* --- Grouped Results --- */}
      <div className="px-4 pb-12">
        {Object.keys(groupedBooks).length > 0 ? (
          Object.keys(groupedBooks)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-8">
                <h2 className="text-5xl font-bold text-white/80 px-2 mb-2">
                  {letter}
                </h2>

                {groupedBooks[letter].map((book) => (
                  <div
                    key={book.id}
                    className="flex justify-between items-end py-5 border-b border-gray-400/40 px-2"
                  >
                    <h3 className="text-xl font-bold text-red-900 underline decoration-red-900 underline-offset-4 cursor-pointer">
                      {book.title}
                    </h3>
                    <p className="text-sm font-bold text-black italic">
                      Available ({book.available})
                    </p>
                  </div>
                ))}
              </div>
            ))
        ) : (
          <div className="text-center mt-20 text-black/50 font-medium">
            No results found
          </div>
        )}
      {Object.keys(groupedBooks).length > 0 ? (
  Object.keys(groupedBooks).sort().map((category) => (
    <div key={category} className="mb-10">
      <h2 className="text-3xl font-bold text-white px-2 mb-4">
        {category}
      </h2>

      {groupedBooks[category].map((book) => (
        <div
          key={book.id}
          className="flex justify-between items-end py-4 border-b border-gray-400/40 px-2"
        >
          <div>
            <h3 className="text-lg font-bold text-red-900 underline cursor-pointer">
              {book.title}
            </h3>
            <p className="text-sm text-black italic">
              {book.author}
            </p>
          </div>

          <p className="text-sm font-bold text-black">
            Available ({book.available})
          </p>
        </div>
      ))}
    </div>
  ))
) : (
  <div className="text-center mt-20 text-black/50 font-medium">
    No books available
  </div>
)}

      </div>
    </div>
  );
}
