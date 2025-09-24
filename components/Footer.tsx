import Link from "next/link";

const footerLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Investor Relations", href: "#investors" },
  { label: "Jobs", href: "#jobs" },
  { label: "Legal", href: "#legal" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-white/40">© {currentYear} DiLa TV. Stream stories that move you.</p>
      </div>
    </footer>
  );
}
