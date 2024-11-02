'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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

        {/* Main Section */}
        <main className="flex flex-col md:flex-row gap-8 p-8 max-w-7xl mx-auto">
          {/* Left Column: Profile and Recent Posts */}
          <section className="flex-1 text-center">
            <Image
              src="/Image.jpeg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-4">Sri Balaji Matheshu</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-400">Software Engineer & Full-Stack Developer</h2>
            <p className="mt-2 italic text-gray-600 dark:text-gray-400">
              "Building clean and efficient solutions with modern technologies."
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {['/linkedin.svg', '/instagram.svg', '/mail.svg', '/github.svg', '/x.svg'].map((icon, idx) => (
                <Link key={idx} href="/" target="_blank" rel="noopener noreferrer">
                  <Image src={icon} alt="" width={20} height={20} className="hover:opacity-80" />
                </Link>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="mt-8 p-4 rounded-lg shadow-md text-gray-600 dark:text-gray-400">
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Recent Posts</h2>
              {[
                { date: 'October 18, 2024', title: 'U.S. Engineers’ Salaries Rise by 5% in 2023', href: '/blog/salaries-2023' },
                { date: 'October 30, 2024', title: 'EU Increases Investment in Deep Tech to Boost Innovation', href: '/blog/deep-tech-investment' },
                { date: 'November 1, 2024', title: 'India’s Open-Source Cloud Initiative', href: '/blog/open-source-cloud' },
              ].map((post, idx) => (
                <article key={idx} className="mb-4">
                  <p className="text-sm">{post.date}</p>
                  <h3 className="font-semibold">{post.title}</h3>
                  <Link href={post.href} className="text-blue-600 dark:text-blue-400 hover:underline">
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Right Column: Sidebar */}
          <aside className="flex-1 space-y-6">
            <div className="p-6 rounded-lg shadow-md text-gray-600 dark:text-gray-400">
              <h3 className="font-semibold mb-2 text-black dark:text-white">Stay up to date</h3>
              <p className="text-sm mb-4">Get notified when I publish something new, and unsubscribe at any time.</p>
              <input type="email" placeholder="Email address" className="w-full p-2 rounded-md border border-gray-300" />
              <button className="w-full mt-2 p-2 bg-blue-600 text-white rounded-md">Join</button>
            </div>
            <div className="p-6 rounded-lg shadow-md text-gray-600 dark:text-gray-400">
              <h3 className="font-semibold mb-2 text-black dark:text-white">Work Experience</h3>
              {[
                { name: 'Ensign College', date: 'Jan 2024 - Present', icon: '/ensign.svg' },
                { name: 'Uber India', date: 'Sep 2020 - Sep 2022', icon: '/Uber.svg' },
                { name: 'Expedia India', date: 'Oct 2016 - Oct 2017', icon: '/expedia.svg' },
              ].map((job, idx) => (
                <div key={idx} className="flex items-center gap-4 mt-4">
                  <Image src={job.icon} alt={job.name} width={30} height={30} />
                  <div>
                    <p className="text-sm font-medium">{job.name}</p>
                    <p className="text-xs">{job.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-lg shadow-md text-gray-600 dark:text-gray-400">
              <h3 className="font-semibold mb-2 text-black dark:text-white">Skills</h3>
              {[
                { name: 'JS', level: 50, icon: '/javascript.svg' },
                { name: 'HTML', level: 80, icon: '/html.svg' },
                { name: 'CSS', level: 45, icon: '/css.svg' },
                { name: 'React', level: 40, icon: '/react.svg' },
                { name: 'Python', level: 50, icon: '/python.svg' },
                { name: 'SSMS', level: 80, icon: '/SSMS.png' },
                { name: 'Linux', level: 80, icon: '/linux.svg' },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center my-2">
                  <Image src={skill.icon} alt={skill.name} width={20} height={20} className="mr-2" />
                  <span className="flex-1 text-sm">{skill.name}</span>
                  <div className="w-2/3 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center border-t text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 Sri Balaji Matheshu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
