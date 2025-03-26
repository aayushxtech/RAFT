import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="relative mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">RAFT</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                card: "bg-transparent shadow-none",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
