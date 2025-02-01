import React from 'react';
import '../globals.css'; // Keep or adjust path if globals.css is in a different location
import { ThemeProvider } from "@/components/ThemeProvider"; // Keep this if you use your theme provider


interface AppLayoutProps { // Define props interface
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <html lang="en"> {/* Remove suppressHydrationWarning - not relevant in standard React */}
      <body> {/* Remove next.js font class - handle font in CSS or differently */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default AppLayout;