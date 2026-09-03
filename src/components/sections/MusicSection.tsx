import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const playlist = [
  { id: 1, title: 'Spring Snow', artist: '10 cm', duration: '4:12', emoji: '🎶', url: '/music/[선재 업고 튀어 (Lovely Runner) OST Part 8] 10CM - 봄눈 (Spring Snow) MV.mp3' },
  { id: 2, title: 'TAGU-TAGUAN', artist: 'Moira Dela Torre', duration: '3:39', emoji: '💞', url: '/music/TAGU-TAGUAN - Moira Dela Torre (Halfway Point)  Lyric Video.mp3' },
  { id: 3, title: '24/7 365', artist: 'Elijah Woods', duration: '3:10', emoji: '⭐', url: '/music/elijah woods - 247, 365 (official lyric video).mp3' },
  { id: 4, title: 'Star', artist: 'Colde', duration: '3:38', emoji: '💫', url: '/music/Colde (콜드) - Star (Lyrics).mp3' },
  { id: 5, title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', emoji: '✨', url: '/music/Ed Sheeran - Thinking Out Loud (Official Music Video).mp3' },
  { id: 6, title: 'Best Part', artist: 'Daniel Caesar & H.E.R.', duration: '3:17', emoji: '💖', url: '/music/H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar.mp3' },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function MusicSection() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { ref, isInView } = useInView(0.1);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const selectTrack = useCallback((index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTrack(index);
    setCurrentTime(0);
    audio.src = playlist[index].url;
    audio.load();
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const prevTrack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = (currentTrack - 1 + playlist.length) % playlist.length;
    setCurrentTrack(next);
    setCurrentTime(0);
    audio.src = playlist[next].url;
    audio.load();
    if (isPlaying) audio.play().catch(() => {});
  }, [currentTrack, isPlaying]);

  const nextTrack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
    setCurrentTime(0);
    audio.src = playlist[next].url;
    audio.load();
    if (isPlaying) audio.play().catch(() => {});
  }, [currentTrack, isPlaying]);

  // Sync audio time
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      const next = (currentTrack + 1) % playlist.length;
      setCurrentTrack(next);
      setCurrentTime(0);
      audio.src = playlist[next].url;
      audio.load();
      audio.play().catch(() => {});
    };
    const onError = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [currentTrack]);

  // Initialize first track src on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !audio.src) {
      audio.src = playlist[0].url;
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden" id="music">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" />

      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="script-text text-lg text-lavender-400 block mb-2">The soundtrack of us</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Love Songs
          </h2>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            Press play and let the music take you back to our most precious moments.
          </p>
        </motion.div>

        {/* Music Player Card */}
        <motion.div
          className="glass-card-strong p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Now Playing */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              {/* Vinyl disc */}
              <motion.div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 mx-auto relative"
                animate={isPlaying ? { rotate: 360 } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                {/* Vinyl grooves */}
                <div className="absolute inset-3 rounded-full border border-gray-600/30" />
                <div className="absolute inset-6 rounded-full border border-gray-600/20" />
                <div className="absolute inset-9 rounded-full border border-gray-600/30" />
                {/* Center label */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-br from-petal-300 to-lavender-300 flex items-center justify-center">
                  <span className="text-xl">{playlist[currentTrack].emoji}</span>
                </div>
              </motion.div>

              {/* Music notes floating */}
              {isPlaying && (
                <>
                  <span className="absolute -top-2 -right-2 text-petal-300 animate-float text-lg">♪</span>
                  <span className="absolute top-0 -left-4 text-lavender-300 animate-float-slow text-sm">♫</span>
                  <span className="absolute -top-4 right-4 text-pink-300 animate-float text-xs">♪</span>
                </>
              )}
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-700 mb-1">
              {playlist[currentTrack].title}
            </h3>
            <p className="font-body text-sm text-gray-400">
              {playlist[currentTrack].artist}
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full h-1.5 bg-pink-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-petal-300 to-lavender-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 font-body">
              <span>{formatTime(currentTime)}</span>
              <span>{playlist[currentTrack].duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={prevTrack}
              className="text-gray-400 hover:text-petal-400 transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
              </svg>
            </button>

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-petal-300 to-lavender-400 flex items-center justify-center text-white shadow-glow-rose hover:shadow-glow-lavender transition-all duration-500 hover:scale-105"
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              )}
            </button>

            <button
              onClick={nextTrack}
              className="text-gray-400 hover:text-petal-400 transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 18h2V6h-2v12zM4 18l8.5-6L4 6v12z" />
              </svg>
            </button>
          </div>

          {/* Playlist */}
          <div className="space-y-2">
            {playlist.map((track, index) => (
              <div
                key={track.id}
                onClick={() => selectTrack(index)}
                className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                  index === currentTrack
                    ? 'bg-gradient-to-r from-pink-50 to-lavender-50 shadow-sm'
                    : 'hover:bg-pink-50/50'
                }`}
              >
                <span className="text-lg">{track.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-body text-sm font-medium truncate ${
                    index === currentTrack ? 'text-petal-500' : 'text-gray-600'
                  }`}>
                    {track.title}
                  </p>
                  <p className="font-body text-xs text-gray-400 truncate">{track.artist}</p>
                </div>
                <span className="text-xs text-gray-400 font-body">{track.duration}</span>
                {index === currentTrack && isPlaying && (
                  <div className="flex items-end gap-0.5 h-4">
                    <motion.div className="w-0.5 bg-petal-400 rounded-full" animate={{ height: [4, 12, 8, 16, 4] }} transition={{ duration: 1, repeat: Infinity }} />
                    <motion.div className="w-0.5 bg-lavender-400 rounded-full" animate={{ height: [8, 4, 16, 8, 8] }} transition={{ duration: 1.2, repeat: Infinity }} />
                    <motion.div className="w-0.5 bg-pink-300 rounded-full" animate={{ height: [12, 16, 4, 12, 4] }} transition={{ duration: 0.8, repeat: Infinity }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
