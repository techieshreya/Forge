import {
  Menu,
  Home,
  Rocket,
  Lightbulb,
  Code,
  BookOpen,
  Blocks,
  Search,
  Key,
  Webhook,
  Gauge,
  Server,
  ArrowRight,
  Settings,
  Utensils,
  History,
  MessageSquare,
  GraduationCap,
  ExternalLink,
  PlayCircle
} from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-ink dark:text-[#fdf8f1] font-display">
      <header className="sticky top-0 z-50 w-full border-b-2 border-ink dark:border-primary/30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-2 font-bold hover:text-primary transition-colors">
                  <Menu className="w-6 h-6" />
                  <span>Resources</span>
                </button>
                <div className="absolute left-0 top-full mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-paper dark:bg-paper-dark border-2 border-ink rounded-xl shadow-sketch-lg p-4">
                    <div className="flex flex-col gap-1">
                      <div className="mb-2 px-2">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-ink-light">Forge Platform</h2>
                        <p className="text-[10px] font-mono">v2.0.4 - Stable</p>
                      </div>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 border-2 border-primary shadow-sketch-sm font-bold text-primary text-sm" href="#">
                        <Home className="w-5 h-5" />
                        <span>Introduction</span>
                      </Link>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-gray-300 text-sm" href="#">
                        <Rocket className="w-5 h-5" />
                        <span>Quick Start</span>
                      </Link>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-gray-300 text-sm" href="#">
                        <Lightbulb className="w-5 h-5" />
                        <span>Core Concepts</span>
                      </Link>
                      <div className="pt-2 pb-1 px-2 border-t border-ink/10 mt-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-ink-light">Development</p>
                      </div>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-gray-300 text-sm" href="#">
                        <Code className="w-5 h-5" />
                        <span>API Reference</span>
                      </Link>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-gray-300 text-sm" href="#">
                        <BookOpen className="w-5 h-5" />
                        <span>Cookbook</span>
                      </Link>
                      <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-gray-300 text-sm" href="#">
                        <Blocks className="w-5 h-5" />
                        <span>Integrations</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight">Forge<span className="text-primary">Docs</span></h1>
              </div>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <Link className="text-sm font-bold hover:text-primary transition-colors" href="#">Home</Link>
              <Link className="text-sm font-bold hover:text-primary transition-colors" href="#">Guides</Link>
              <Link className="text-sm font-bold hover:text-primary transition-colors" href="#">API</Link>
              <Link className="text-sm font-bold hover:text-primary transition-colors" href="#">Support</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login" className="bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 border-2 border-ink">
                Log in
              </Link>
              <Link href="/signup" className="hidden sm:block bg-paper dark:bg-paper-dark text-ink dark:text-white font-bold py-2 px-6 rounded-lg shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 border-2 border-ink">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight text-ink dark:text-white leading-tight">
            What can we help you <span className="relative inline-block text-primary">
              build?
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"></path>
              </svg>
            </span>
          </h1>
          <div className="relative group max-w-3xl mx-auto mb-12">
            <div className="relative flex items-center w-full h-20 rounded-2xl border-4 border-ink bg-white dark:bg-paper-dark overflow-hidden shadow-[12px_12px_0px_0px_var(--shadow-color)] focus-within:shadow-[16px_16px_0px_0px_var(--shadow-color)] focus-within:-translate-y-1 focus-within:-translate-x-1 transition-all duration-150">
              <div className="pl-6 pr-4 text-ink-light">
                <Search className="w-8 h-8" />
              </div>
              <input className="w-full h-full border-none bg-transparent text-xl px-2 placeholder:text-ink-light focus:ring-0 focus:outline-none text-ink dark:text-white" placeholder="Search guides, API endpoints, or errors..." type="text" />
              <div className="pr-6 hidden sm:flex items-center gap-2">
                <kbd className="px-3 py-1.5 text-sm font-bold text-ink-light bg-background-light border-2 border-ink/20 rounded-lg shadow-sketch-sm">⌘K</kbd>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-ink-light mb-6">Explore by Topic</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link className="group flex items-center gap-2 px-6 py-3 bg-paper dark:bg-paper-dark border-2 border-ink rounded-xl shadow-sketch-sm hover:shadow-sketch hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-150" href="#">
                <Key className="w-5 h-5 text-primary" />
                <span className="font-bold">Authentication</span>
              </Link>
              <Link className="group flex items-center gap-2 px-6 py-3 bg-paper dark:bg-paper-dark border-2 border-ink rounded-xl shadow-sketch-sm hover:shadow-sketch hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-150" href="#">
                <Webhook className="w-5 h-5 text-desert-teal" />
                <span className="font-bold">Webhooks</span>
              </Link>
              <Link className="group flex items-center gap-2 px-6 py-3 bg-paper dark:bg-paper-dark border-2 border-ink rounded-xl shadow-sketch-sm hover:shadow-sketch hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-150" href="#">
                <Gauge className="w-5 h-5 text-desert-yellow" />
                <span className="font-bold">Rate Limits</span>
              </Link>
              <Link className="group flex items-center gap-2 px-6 py-3 bg-paper dark:bg-paper-dark border-2 border-ink rounded-xl shadow-sketch-sm hover:shadow-sketch hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-150" href="#">
                <Server className="w-5 h-5 text-desert-red" />
                <span className="font-bold">Deployments</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-6">
            <Link className="group block bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-8 shadow-sketch-lg hover:shadow-[16px_16px_0px_0px_var(--shadow-color)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-3 active:translate-x-3 active:shadow-none transition-all duration-150" href="#">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary text-primary shrink-0">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Quick Start Guide</h3>
                  <p className="text-ink-light dark:text-gray-300 text-base">Jump straight into the action. Set up your environment and deploy your first automation in under 5 minutes.</p>
                </div>
                <span className="text-primary font-bold text-sm group-hover:underline flex items-center gap-1 whitespace-nowrap">
                  Start building <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link className="group block bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-8 shadow-sketch-lg hover:shadow-[16px_16px_0px_0px_var(--shadow-color)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-3 active:translate-x-3 active:shadow-none transition-all duration-150" href="#">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-desert-teal/10 rounded-2xl flex items-center justify-center border-2 border-desert-teal text-desert-teal shrink-0">
                  <Settings className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">API Reference</h3>
                  <p className="text-ink-light dark:text-gray-300 text-base">Comprehensive details about every endpoint, parameter, and response code in the Forge ecosystem.</p>
                </div>
                <span className="text-desert-teal font-bold text-sm group-hover:underline flex items-center gap-1 whitespace-nowrap">
                  Explore API <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link className="group block bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-8 shadow-sketch-lg hover:shadow-[16px_16px_0px_0px_var(--shadow-color)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-3 active:translate-x-3 active:shadow-none transition-all duration-150" href="#">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-desert-yellow/10 rounded-2xl flex items-center justify-center border-2 border-desert-yellow text-desert-yellow shrink-0">
                  <Utensils className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Cookbook</h3>
                  <p className="text-ink-light dark:text-gray-300 text-base">Real-world recipes for common automation patterns. Copy, paste, and customize for your needs.</p>
                </div>
                <span className="text-desert-yellow font-bold text-sm group-hover:underline flex items-center gap-1 whitespace-nowrap">
                  View recipes <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight">Fresh from the Oven</h2>
              <Link className="text-sm font-bold text-primary hover:underline flex items-center gap-1" href="#">
                View changelog <History className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl overflow-hidden shadow-sketch-sm">
              <div className="grid divide-y-2 divide-ink dark:divide-primary/20">
                <div className="p-8 hover:bg-primary/5 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <span className="px-4 py-1.5 bg-desert-teal/10 text-desert-teal text-xs font-black rounded-full border-2 border-desert-teal uppercase tracking-widest whitespace-nowrap">New Feature</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-1">Webhooks for Deployment Events</h4>
                    <p className="text-ink-light dark:text-gray-400 text-base">You can now subscribe to deployment status changes via webhooks.</p>
                  </div>
                  <span className="text-sm font-mono text-ink-light font-bold">2 days ago</span>
                </div>
                <div className="p-8 hover:bg-primary/5 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black rounded-full border-2 border-primary uppercase tracking-widest whitespace-nowrap">Update</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-1">Python SDK v2.1.0</h4>
                    <p className="text-ink-light dark:text-gray-400 text-base">Improved type hinting and async support for all major endpoints.</p>
                  </div>
                  <span className="text-sm font-mono text-ink-light font-bold">5 days ago</span>
                </div>
                <div className="p-8 hover:bg-primary/5 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <span className="px-4 py-1.5 bg-desert-red/10 text-desert-red text-xs font-black rounded-full border-2 border-desert-red uppercase tracking-widest whitespace-nowrap">Fix</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-1">Rate Limit Headers</h4>
                    <p className="text-ink-light dark:text-gray-400 text-base">Corrected an issue where `X-RateLimit-Reset` was returning milliseconds instead of seconds.</p>
                  </div>
                  <span className="text-sm font-mono text-ink-light font-bold">1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="#" className="relative bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-8 shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 overflow-hidden group block">
              <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12 transition-transform group-hover:scale-110">
                <MessageSquare className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Community Forum</h3>
                <p className="text-ink-light dark:text-gray-300 text-base mb-8 max-w-xs leading-relaxed">Join thousands of developers sharing automation tips and tricks.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-primary-dark transition-colors">
                  Join discussion <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link href="#" className="relative bg-paper dark:bg-paper-dark border-2 border-ink rounded-2xl p-8 shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-150 overflow-hidden group block">
              <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12 transition-transform group-hover:scale-110">
                <GraduationCap className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Forge Academy</h3>
                <p className="text-ink-light dark:text-gray-300 text-base mb-8 max-w-xs leading-relaxed">Video courses and interactive tutorials to master the platform.</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-primary-dark transition-colors">
                  Start learning <PlayCircle className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t-4 border-ink pt-12 pb-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                </svg>
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-ink dark:text-white">Forge Inc.</p>
            </div>
            <p className="text-sm font-medium text-ink-light">© 2023 Forge Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <Link className="text-ink hover:text-primary transition-all hover:-translate-y-1" href="#">
              <img alt="GitHub" className="w-7 h-7 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7g6szUP0vRM6G__omM7A9JPqG84gTqNB-LR2IiNqFAb3wTCpXtH3vGR0xd0OwfWet8KutSkH5UmHplya0D4V0udYGJ0Z4JIEMgeMBdF5y8rHI5Cv7bdMak6DFCnIkf823yFsOTnKRm-CUlGANk_pouDIO0mFb3n3Nwpuqq78Mes7a_RF7zC3gP0AV3hMvC_zA5jj2EEL2LTzCT_a0r6OMIILTMRjbXiyG6MHhMtue1S5sNjYhVLAWAwJksg0rMdtBXVkQEHemYhk" />
            </Link>
            <Link className="text-ink hover:text-primary transition-all hover:-translate-y-1" href="#">
              <img alt="Twitter" className="w-7 h-7 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXee-hTDfyxxMDxrd-40FnnOB1PbCQL14x-AjT8PhAPmYPiQxkP0uVXXprZCcEOFEqleY9fyDssdSI5Pc9ZNOIZ9spgRm6Wb-nW6C7JN7fK7goNOaJX5aK1aPTnExJ8If6c46iEwFnh02tA5uxXYP6anB6LfdYtUtppQyIWkJmb3pWSqmgwmxEa-51RdzqNQW9AKw21vs1qRf1h5WjngWrVIRQMq-fQ0PaHKZ_vZFj1TZ_k6cVJ0KRRQ94IY-ST-wc-Ttwyejs8oQ" />
            </Link>
            <Link className="text-ink hover:text-primary transition-all hover:-translate-y-1" href="#">
              <img alt="Discord" className="w-7 h-7 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepMTdVJ7IZTAHtzYSq_Luvp68ezqbkzJT32bBLu9RP3bdzAnulEzQYAODUsA01EHILCtoCNytJnVK9ktvVprXRr75w-tqr9YHlnPMSKr1DQtghAKd5kgFLFYIh1vDLwjNQRE2eYGE6K7mz6lYO_sNCf0RA4bZDqdCgY1uay4rUpQcDpQ7uj37iuWaYIJ1lf3yuQI6wWrKCdanLrdkp3sfF5wqjm38-KaE6TXxtlbOX8gii2ZaiSsvkyUBBgeto2lK36m8SsXAA00" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
