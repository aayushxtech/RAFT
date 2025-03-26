"use client";

import React from "react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <p className="text-2xl font-bold">RAFT</p>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/explore">
              <Button variant="ghost">Explore</Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost">Resources</Button>
            </Link>
            <Link href="/community">
              <Button variant="ghost">Community</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="mr-4">
                  Dashboard
                </Button>
              </Link>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-8 w-8",
                  },
                }}
              />
            </SignedIn>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-foreground transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <Link href="/explore" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Explore
              </Button>
            </Link>
            <Link href="/resources" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Resources
              </Button>
            </Link>
            <Link href="/community" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Community
              </Button>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
