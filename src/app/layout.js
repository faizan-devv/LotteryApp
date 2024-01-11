import './globals.css';
export const metadata = {
  title: 'Lottery App',
  description:
    'Sample Lottery App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
