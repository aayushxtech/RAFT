import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur bg-gray-600">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <p className="text-sm text-amber-50">
          © {new Date().getFullYear()} RAFT. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm text-white transition-colors"
          >
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-white transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
