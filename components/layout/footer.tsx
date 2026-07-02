"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ContactForm } from "@/components/layout/contact-form";
import { SocialIcon } from "@/components/ui/social-icon";
import { NAV_LINKS, SOCIAL_LINKS, SITE } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleSectionLink = (href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      scrollToSection(href.replace("/#", ""));
    }
  };

  return (
    <footer id="contact" className="border-t border-white/5 bg-[#08080c]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo showFullName />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent electronic music label from Atlanta. House, Techno,
              Trance since 2010.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-accent-cyan/30 hover:text-accent-cyan"
                >
                  <SocialIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <Link
                      href={link.href}
                      onClick={() => handleSectionLink(link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/#listen"
                  onClick={() => handleSectionLink("/#listen")}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
                >
                  Listen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {SITE.email}
              </a>
              <p className="text-sm text-muted-foreground">
                Atlanta, Georgia
              </p>
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Newsletter placeholder */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground">
              Follow us for new releases, events, and label news.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SOCIAL_LINKS.slice(0, 2).map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-accent-indigo/30 hover:text-foreground"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Founded by Raskal · Est. {SITE.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
