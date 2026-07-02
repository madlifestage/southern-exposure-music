"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Send a Message
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Demos, bookings, press inquiries — we&apos;d love to hear from you.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-lg font-semibold text-accent-cyan">
              Message sent!
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;ll get back to you soon. (Placeholder — connect to a form
              backend like Formspree or Resend.)
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-indigo/50 focus:outline-none focus:ring-1 focus:ring-accent-indigo/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-indigo/50 focus:outline-none focus:ring-1 focus:ring-accent-indigo/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-indigo/50 focus:outline-none focus:ring-1 focus:ring-accent-indigo/50"
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or email us directly at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent-cyan hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
