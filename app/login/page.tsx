import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialAuth } from '@/components/auth/social-auth';

export default function LoginPage() {
  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Log in to your Forge account to continue building."
      illustrationQuote="The API reference and webhooks have saved us countless hours of debugging."
      illustrationAuthor="Sarah Jenkins"
      illustrationRole="Backend Developer, StartupX"
    >
      <form className="space-y-6">
        <div className="space-y-5">
          <Input 
            label="Email address" 
            id="email" 
            type="email" 
            icon={<Mail className="w-5 h-5" />}
            placeholder="you@example.com" 
            required 
          />
          
          <div className="space-y-2">
            <Input 
              label="Password" 
              id="password" 
              type="password" 
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••" 
              required 
            />
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm font-bold text-primary hover:text-primary-dark hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        <Button type="button" fullWidth>
          Log In
        </Button>
      </form>

      <div className="mt-8">
        <SocialAuth />
      </div>

      <div className="mt-10 text-center">
        <p className="text-ink-light dark:text-gray-400 font-medium">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary hover:text-primary-dark font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
