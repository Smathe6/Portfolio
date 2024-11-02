'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''} font-sans min-h-screen`}>
      <div
        className={`bg-gradient-to-br ${darkMode ? 'from-gray-900 to-gray-800 text-white' : 'from-white to-gray-100 text-black'} min-h-screen`}
      >
        {/* Header */}
        <header className={`flex justify-between p-5 shadow-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Link href="/" passHref>
            <div className="flex items-center space-x-4 cursor-pointer">
              <Image src="/logo.webp" alt="SBM Logo" width={80} height={80} />
            </div>
          </Link>
          <nav className="flex space-x-6 text-lg">
            {['Home', 'About', 'Projects', 'Uses'].map((link) => (
              <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                <span className="hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer transition">
                  {link}
                </span>
              </Link>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            style={{
              padding: '12px',
              borderRadius: '50%',
              backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
              color: darkMode ? '#FFFFFF' : '#000000',
              border: darkMode ? 'none' : '1px solid #D1D5DB',
              transition: 'all 0.3s ease',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto p-8 text-center">
          <p className="text-xl font-semibold my-8">
            Below are the projects I am yet to work on. Please feel free to look at my code on my GitHub portfolio:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((project) => (
              <div
                key={project}
                className="w-48 p-4 rounded-lg text-left shadow-md dark:shadow-gray-800"
              >
                <Image src="/YTD.webp" alt="Project Logo" width={40} height={40} />
                <h3 className="text-lg font-medium mt-2">Project {project}</h3>
                <p className="text-gray-600 dark:text-gray-400">Yet to Develop.</p>
                <a
                  href="https://yettodevelop.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  https://yettodevelop.com
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center border-t text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 Sri Balaji Matheshu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
