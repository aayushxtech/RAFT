import Link from "next/link";
import { login, signup } from "../login/actions";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Logo Section */}
      <div className="mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-bold">RAFT</span>
        </Link>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg px-8 py-10 border">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Welcome back
          </h1>

          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-muted-foreground"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="••••••••"
              />
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button
                formAction={login}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-md transition-colors"
              >
                Sign In
              </button>
              <button
                formAction={signup}
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-2.5 px-4 rounded-md transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
