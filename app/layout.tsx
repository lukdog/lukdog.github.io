// Root layout: fonts, metadata and the theme script that runs before the first paint.
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Caveat, JetBrains_Mono } from 'next/font/google';
import { site } from '@/content/site';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz'], variable: '--font-bricolage' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-caveat' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    type: 'profile',
    images: [{ url: site.hero.photo.src, width: site.hero.photo.width, height: site.hero.photo.height }],
  },
};

// A choice made in this tab wins, otherwise the system setting; set before paint so dark never flashes light.
const themeScript = `try{var t=sessionStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${hand.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="px-4">{children}</body>
    </html>
  );
}
