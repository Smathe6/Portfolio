'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Uses() {
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
        <main className="max-w-4xl mx-auto p-8 mt-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Software, Gadgets, and Other Tools I Use and Recommend
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            I use various tools for development; here are some that I use on a regular basis.
          </p>

          {/* Content Sections */}
          {[
            {
              category: 'Development Tools',
              items: [
                {
                  name: 'Visual Studio Code',
                  description:
                    'Visual Studio Code is my preferred code editor because of its lightweight nature, extensive customization options, and vast marketplace of extensions.',
                },
                {
                  name: 'Git',
                  description:
                    'Version control is essential in software development, and Git is the backbone of all my collaborative projects.',
                },
                {
                  name: 'Docker',
                  description:
                    'Docker has transformed the way I manage application environments. By containerizing applications, I can maintain a consistent setup across development, testing, and production.',
                },
              ],
            },
            {
              category: 'Design & Prototyping',
              items: [
                {
                  name: 'Figma',
                  description:
                    'As a collaborative design tool, Figma bridges the gap between designers and developers. I use it to prototype and design user interfaces.',
                },
                {
                  name: 'Whimsical',
                  description:
                    'Whimsical is a fantastic tool for brainstorming and creating wireframes, flowcharts, and mind maps. When starting a new project or mapping out a workflow, Whimsical helps me visually organize thoughts.',
                },
              ],
            },
            {
              category: 'Productivity',
              items: [
                {
                  name: 'Notion',
                  description:
                    'Notion serves as my all-in-one productivity tool. I use it to organize everything from project timelines to personal goals and study notes.',
                },
                {
                  name: 'Google Calendar',
                  description:
                    'For scheduling and time management, Google Calendar is indispensable. I use it to block out study hours, track deadlines, and schedule meetings.',
                },
                {
                  name: 'Discord',
                  description:
                    'Though traditionally a chat platform for gamers, Discord has become an essential communication tool in the tech community.',
                },
              ],
            },
            {
              category: 'Gadgets',
              items: [
                {
                  name: 'Alienware Windows 11',
                  description:
                    'My Alienware laptop, running Windows 11, is a powerhouse for development. With high-end specs that support fast processing, extensive multitasking, and reliable performance.',
                },
                {
                  name: 'iPad',
                  description:
                    'An iPad is my go-to gadget for quick notes, reading, and sketching ideas on the go. With the Apple Pencil, I can jot down thoughts, sketch wireframes, and annotate documents.',
                },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="mb-4 pl-4 border-l-4 border-blue-500 dark:border-blue-300">
                  <h3 className="text-xl font-medium ml-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 ml-2">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="py-6 text-center border-t text-sm text-gray-500 dark:text-gray-400 mt-8">
          <p>© 2024 Sri Balaji Matheshu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
