import { createContext, useCallback, useEffect, useContext, useState } from 'react';
import { MotionPreferenceProviderProps, UseMotionPreferenceProps } from './MotionPreferenceTypes';

const MEDIA = '(prefers-reduced-motion: reduce)';
const isServer = typeof window === 'undefined';
const MotionPreferenceContext = createContext<UseMotionPreferenceProps>({
  setMotionPreference: (_) => {}
});

export const useMotionPreference = () => useContext(MotionPreferenceContext);

export const MotionPreferenceProvider: React.FC<MotionPreferenceProviderProps> = ({
  enableSystem = true,
  storageKey = 'motion-preference',
  defaultPreference = 'no-preference',
  attribute = 'data-reduce-motion',
  children
}) => {
  const [motionPreference, setMotionPreferenceState] = useState(() => getMotionPreference(storageKey, defaultPreference));
  const [resolvedMotionPreference, setResolvedMotionPreference] = useState(() => getMotionPreference(storageKey));

  const applyMotionPreference = useCallback((motionPreference) => {
    let resolved = motionPreference;

    // If theme is system, resolve it before setting theme
    if (motionPreference === 'system' && enableSystem) {
      resolved = getSystemMotionPreference();
    }

    const d = document.documentElement;
    if (attribute === 'class') {
      d.classList.remove(...['no-preference', 'reduce']);
      d.classList.add(resolved);
    } else {
      d.setAttribute(attribute, resolved);
    }
  }, []);

  const setMotionPreference = useCallback((preference) => {
    setMotionPreferenceState(preference);

    // Save to storage
    try {
      localStorage.setItem(storageKey, preference);
    } catch (e) {
      // Unsupported
    }
  }, []);

  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemMotionPreference(e);
      console.log(resolved);

      setResolvedMotionPreference(resolved);

      if (motionPreference === 'system' && enableSystem) {
        applyMotionPreference('system');
      }
    },
    [motionPreference]
  );

  // Always listen to System preference
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const theme = e.newValue || defaultPreference;
      setMotionPreference(theme);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setMotionPreference]);

  useEffect(() => {
    applyMotionPreference(motionPreference);
  }, [motionPreference]);

  return (
    <MotionPreferenceContext.Provider
      value={{
        motionPreference,
        setMotionPreference,
        resolvedMotionPreference: motionPreference === 'system' ? resolvedMotionPreference : motionPreference
      }}
    >
      {children}
    </MotionPreferenceContext.Provider>
  );
};

// Helpers
const getMotionPreference = (key: string, fallback?: string) => {
  if (isServer) return undefined;
  let motionPreference;
  try {
    motionPreference = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return motionPreference || fallback;
};

const getSystemMotionPreference = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA);
  const prefersAnimation = e.matches;
  const systemAnimation = prefersAnimation ? 'reduce' : 'no-preference';
  return systemAnimation;
};
