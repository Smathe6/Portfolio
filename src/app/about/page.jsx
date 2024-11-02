'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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

        {/* Main Content Wrapper without Background Box */}
        <div className="max-w-7xl mx-auto p-8 mt-8">
          <main className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Section: Bio */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold">Sri Balaji Matheshu</h1>
              <h2 className="text-xl text-gray-700 dark:text-gray-400 mt-2">
                Software Engineer & Full-Stack Developer
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                I am a passionate software engineer from New Delhi, India, with a focus on building efficient and scalable applications using modern technologies. With a solid foundation in both front-end and back-end development, I enjoy solving complex problems through clean, well-organized code.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Before moving to the United States to further my education, I worked as a Technical Specialist for prominent companies like Uber and Expedia. These experiences allowed me to hone my skills in troubleshooting, technical problem-solving, and building scalable solutions that could meet the demands of a high-performance environment.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                In 2022, I relocated to the U.S. to pursue a degree in Software Engineering at Ensign College. My technical skills span languages and frameworks like JavaScript, React, Node.js, and Docker, allowing me to adapt quickly to new challenges.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Outside of coding, I enjoy reading physics journals and staying active by playing pickleball. I am always looking to expand my skill set, explore new technologies, and build applications that make an impact.
              </p>
            </div>

            {/* Right Section: Profile Image and Social Links */}
            <div className="flex-1 text-center">
              <Image
                src="/Cover.JPG"
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
              <div className="flex justify-center gap-4 mt-4">
                <Link href="http://linkedin.com/in/sri-balaji-matheshu-91895820a" passHref>
                  <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} className="cursor-pointer" />
                </Link>
                <Link href="https://www.instagram.com/sri_bala_ji" passHref>
                  <Image src="/instagram.svg" alt="Instagram" width={30} height={30} className="cursor-pointer" />
                </Link>
                <Link href="mailto:sribalaji.matheshu@outlook.com" passHref>
                  <Image src="/mail.svg" alt="Email" width={30} height={30} className="cursor-pointer" />
                </Link>
                <Link href="https://github.com/Ensign-College/personal-portfolio-Smathe6" passHref>
                  <Image src="/github.svg" alt="GitHub" width={30} height={30} className="cursor-pointer" />
                </Link>
                <Link href="https://x.com/s_Sribalaji" passHref>
                  <Image src="/x.svg" alt="X.com" width={30} height={30} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center border-t text-sm text-gray-500 dark:text-gray-400 mt-8">
          <p>© 2024 Sri Balaji Matheshu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
