import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Full Regression',
  description: 'Comprehensive regression testing platform for modern software teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
