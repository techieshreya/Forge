'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialAuth } from '@/components/auth/social-auth';

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  
  // Simple password strength calculation
  const strength = Math.min(
    ((password.length > 5 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[0-9]/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0)) * 25,
    100
  );

  const getStrengthColor = () => {
    if (strength <= 25) return 'bg-desert-red';
    if (strength <= 50) return 'bg-desert-yellow';
    if (strength <= 75) return 'bg-primary';
    return 'bg-desert-teal';
  };

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Start building with Forge today. Join thousands of developers."
      illustrationQuote="ForgeDocs is the gold standard for how developer documentation should look and feel."
      illustrationAuthor="Marcus Wei"
      illustrationRole="CTO, DevTools Inc."
    >
      <form className="space-y-6">
        <div className="space-y-5">
          <Input 
            label="Full Name" 
            id="name" 
            type="text" 
            icon={<User className="w-5 h-5" />}
            placeholder="Jane Doe" 
            required 
          />
          <Input 
            label="Email address" 
            id="email" 
            type="email" 
            icon={<Mail className="w-5 h-5" />}
            placeholder="you@example.com" 
            required 
          />
          <div>
            <Input 
              label="Password" 
              id="password" 
              type="password" 
              icon={<Lock className="w-5 h-5" />}
              placeholder="Create a strong password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            {/* Password Strength Meter */}
            {password.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 space-y-2"
              >
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-ink-light">Password strength</span>
                  <span className={
                    strength <= 25 ? 'text-desert-red' : 
                    strength <= 50 ? 'text-desert-yellow' : 
                    strength <= 75 ? 'text-primary' : 'text-desert-teal'
                  }>
                    {strength <= 25 ? 'Weak' : strength <= 50 ? 'Fair' : strength <= 75 ? 'Good' : 'Strong'}
                  </span>
                </div>
                <div className="h-2 w-full bg-ink/10 dark:bg-white/10 rounded-full overflow-hidden flex">
                  <motion.div 
                    className={`h-full ${getStrengthColor()}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${strength}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {strength === 100 && (
                  <p className="text-xs text-desert-teal font-bold flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready to go!
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>

        <Button type="button" fullWidth>
          Create Account
        </Button>
        
        <p className="text-xs text-ink-light dark:text-gray-500 font-medium text-center mt-4">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
        </p>
      </form>

      <div className="mt-8">
        <SocialAuth />
      </div>

      <div className="mt-10 text-center">
        <p className="text-ink-light dark:text-gray-400 font-medium">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-primary-dark font-bold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
