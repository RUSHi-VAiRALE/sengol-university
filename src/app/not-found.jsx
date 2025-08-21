// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-[#f5f5f5]">
      <h1 className="text-6xl font-bold text-[#5b4110] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#5b4110de] hover:bg-[#5b4120] text-white px-6 py-3 rounded-md transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
