export interface UseMotionPreferenceProps {
  /** Update the motion preference */
  setMotionPreference: (theme: string) => void;
  /** Active motion preference */
  motionPreference?: string;
  /** If `enableSystem` is true and the active motion preference is "system", this returns whether the system preference resolved to "no-preference" or "reduced". Otherwise, identical to `theme` */
  resolvedMotionPreference?: string;
}

export interface MotionPreferenceProviderProps {
  enableSystem?: boolean;
  storageKey?: string;
  defaultPreference?: 'no-preference' | 'reduced' | 'system';
  attribute?: string | 'class';
}
