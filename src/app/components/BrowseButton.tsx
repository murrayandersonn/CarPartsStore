"use client";

import { useRouter } from 'next/navigation';

function BrowseButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/browse')}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
    >
      Start Browsing
    </button>
  );
}

export default BrowseButton;
