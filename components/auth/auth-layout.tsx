'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, Code2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  illustrationQuote?: string;
  illustrationAuthor?: string;
  illustrationRole?: string;
}

export function AuthLayout({ 
  children, 
  title, 
  subtitle,
  illustrationQuote = "ForgeDocs has completely transformed how we build and deploy our internal tools.",
  illustrationAuthor = "Alex Chen",
  illustrationRole = "Lead Engineer, TechCorp"
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-ink dark:text-[#fdf8f1] font-display">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative z-10 bg-background-light dark:bg-background-dark">
        <header className="p-6 sm:p-8">
          <Link href="/" className="inline-flex items-center gap-2 text-ink-light hover:text-primary transition-colors font-bold">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center p-6 sm:p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="w-12 h-12 bg-primary/10 rounded-xl border-2 border-primary flex items-center justify-center text-primary mb-6 shadow-sketch-sm"
              >
                 <Sparkles className="w-6 h-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">{title}</h1>
              <p className="text-ink-light dark:text-gray-400 text-lg font-medium">{subtitle}</p>
            </div>
            {children}
          </motion.div>
        </main>
      </div>
      
      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex w-1/2 bg-primary/5 border-l-2 border-ink dark:border-primary/30 p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-desert-yellow/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-desert-teal/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#3c2f2a 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 bg-paper dark:bg-paper-dark border-2 border-ink p-3 rounded-xl shadow-sketch-sm rotate-[-10deg]"
        >
          <Code2 className="w-6 h-6 text-desert-teal" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 bg-paper dark:bg-paper-dark border-2 border-ink p-3 rounded-xl shadow-sketch-sm rotate-[15deg]"
        >
          <Zap className="w-6 h-6 text-desert-yellow" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 max-w-lg w-full"
        >
          <div className="bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-10 shadow-sketch-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary text-primary mb-8 shadow-sketch-sm group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold mb-8 leading-tight">&quot;{illustrationQuote}&quot;</h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-desert-teal/20 rounded-full border-2 border-ink flex items-center justify-center text-xl font-black text-desert-teal shadow-sketch-sm">
                {illustrationAuthor.charAt(0)}
              </div>
              <div>
                <p className="font-extrabold text-lg">{illustrationAuthor}</p>
                <p className="text-ink-light dark:text-gray-400 font-medium">{illustrationRole}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
