"use client";
import { useCallback, useEffect, useRef } from "react";

export function useSounds() {
  const pressAudio = useRef<HTMLAudioElement | null>(null);
  const releaseAudio = useRef<HTMLAudioElement | null>(null);
  const confettiAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    pressAudio.current = new Audio("/assets/keycap-sounds/press.mp3");
    releaseAudio.current = new Audio("/assets/keycap-sounds/release.mp3");
    confettiAudio.current = new Audio("/assets/sounds/vine-boom.mp3");
    
    pressAudio.current.preload = "auto";
    releaseAudio.current.preload = "auto";
    confettiAudio.current.preload = "auto";
  }, []);

  const playPressSound = useCallback(() => {
    if (pressAudio.current) {
      const clone = pressAudio.current.cloneNode() as HTMLAudioElement;
      clone.volume = 0.6;
      clone.play().catch(() => {});
    }
  }, []);

  const playReleaseSound = useCallback(() => {
    if (releaseAudio.current) {
      const clone = releaseAudio.current.cloneNode() as HTMLAudioElement;
      clone.volume = 0.6;
      clone.play().catch(() => {});
    }
  }, []);

  const playConfettiSound = useCallback((int: number) => {
    if (confettiAudio.current) {
      const clone = confettiAudio.current.cloneNode() as HTMLAudioElement;
      clone.volume = Math.min(1, Math.max(0.1, int));
      clone.play().catch(() => {});
    }
  }, []);

  const startChargeTone = useCallback(() => {}, []);
  const updateChargeTone = useCallback((int: number) => {}, []);
  const stopChargeTone = useCallback(() => {}, []);

  return {
    playPressSound,
    playReleaseSound,
    playConfettiSound,
    startChargeTone,
    updateChargeTone,
    stopChargeTone,
  };
}
