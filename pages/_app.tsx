import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { MotionPreferenceProvider } from '../context/MotionPreferenceProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MotionPreferenceProvider attribute="class" defaultPreference="system">
        <Component {...pageProps} />
      </MotionPreferenceProvider>
    </ThemeProvider>
  );
}

export default MyApp;
