const sitemap = [
  
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/SunnyRaj2703" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sunny-raj-a29682281/" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/raj8709800" },
];

const Footer = () => {
  return (
    <footer className="mt-24 relative">
      
      {/* ⭐ NEW SHADOW-LINE SEPARATOR */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-12" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* LEFT — Title */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-white leading-tight">
              <span className="text-primary">Let's</span> work together today!
            </h2>
          </div>

          {/* RIGHT — Links */}
          <div className="flex justify-between lg:justify-end w-full lg:w-2/3 gap-50">
            
            {/* Sitemap */}
            <div>
              <p className="text-lg font-semibold text-white mb-3">Sitemap</p>
              <ul className="space-y-2">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="text-zinc-400 hover:text-zinc-200 transition text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-lg font-semibold text-white mb-3">Social</p>
              <ul className="space-y-2">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-200 transition text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex justify-center pt-10 pb-6">
          <p className="text-zinc-500 text-sm">
            ©2025 <span className="text-zinc-200">Sunny Raj</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
