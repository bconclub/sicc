import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
  vimeoId?: string;
  aspectRatio?: '16:9' | '9:16';
  usePreviewVideo?: boolean;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'SICC Project Video',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141959737.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141959737'
  },
  {
    id: 2,
    title: 'SICC Project Video 2',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141962178.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141962178'
  },
  {
    id: 3,
    title: 'SICC Project Video 3',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141962617.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141962617'
  },
  {
    id: 4,
    title: 'SICC Project Video 4',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141978917.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141978917'
  },
  {
    id: 5,
    title: 'SICC Project Video 5',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141979398.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141979398'
  },
  {
    id: 6,
    title: 'SICC Project Video 6',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1141980834.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1141980834'
  },
  {
    id: 7,
    title: 'SICC Project Video 7',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145561752.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145561752'
  },
  {
    id: 8,
    title: 'SICC Project Video 8',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145563003.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145563003',
    usePreviewVideo: true
  },
  {
    id: 9,
    title: 'SICC Project Video 9',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145563600.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145563600',
    aspectRatio: '9:16'
  },
  {
    id: 10,
    title: 'SICC Project Video 10',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145563810.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145563810',
    aspectRatio: '9:16'
  },
  {
    id: 11,
    title: 'SICC Project Video 11',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145564022.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145564022',
    aspectRatio: '9:16'
  },
  {
    id: 12,
    title: 'SICC Project Video 12',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145565464.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145565464',
    aspectRatio: '9:16'
  },
  {
    id: 13,
    title: 'SICC Project Video 13',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145565790.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145565790',
    aspectRatio: '9:16'
  },
  {
    id: 14,
    title: 'SICC Project Video 14',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145570818.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145570818',
    aspectRatio: '9:16'
  },
  {
    id: 15,
    title: 'SICC Project Video 15',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145582253.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145582253',
    usePreviewVideo: true
  },
  {
    id: 16,
    title: 'SICC Project Video 16',
    description: 'Watch our construction projects and company overview',
    category: 'Construction Process',
    thumbnail: `https://vumbnail.com/1145582649.jpg`,
    duration: '5:30',
    views: '12.5K',
    vimeoId: '1145582649'
  },
];

export default function ProjectVideos() {
  useEffect(() => {
    document.title = 'Project Videos - South India Civil Contractors';
  }, []);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [loadedVideoId, setLoadedVideoId] = useState<number | null>(null);
  const [previewVideoId, setPreviewVideoId] = useState<number | null>(null);
  const [shuffledVideos, setShuffledVideos] = useState<Video[]>([]);
  const iframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({});
  const previewIframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({});

  // Shuffle videos on component mount
  useEffect(() => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Vimeo sends messages from player.vimeo.com
      if (event.origin !== 'https://player.vimeo.com') return;
      
      const data = event.data;
      // Handle Vimeo event messages - check for ended event
      if (data && typeof data === 'object') {
        // Vimeo sends events in different formats
        // Format 1: { event: 'ended' }
        // Format 2: { event: 'finish' }
        // Format 3: { event: 'playProgress', data: { seconds: ..., percent: ... } }
        if (data.event === 'ended' || data.event === 'finish') {
          // Video ended, reset to thumbnail immediately
          setPlayingVideoId(null);
          setLoadedVideoId(null);
        }
        // Also check for playProgress near the end (99%+) as fallback
        if (data.event === 'playProgress' && data.data && data.data.percent >= 0.99) {
          // Video is at the end, reset to thumbnail
          setTimeout(() => {
            setPlayingVideoId(null);
            setLoadedVideoId(null);
          }, 500);
        }
        // Handle preview video pause at 1-2 seconds
        if (data.event === 'playProgress' && data.data && previewVideoId) {
          const seconds = data.data.seconds;
          if (seconds >= 1.5 && seconds <= 2) {
            // Pause preview video at 1.5-2 seconds
            const iframe = previewIframeRefs.current[previewVideoId];
            if (iframe && iframe.contentWindow && playingVideoId !== previewVideoId) {
              iframe.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), 'https://player.vimeo.com');
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [previewVideoId, playingVideoId]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920"
            alt="Videos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Project <span className="text-cream">Videos</span>
            </h1>
            <p className="text-xl text-gray-200">
              Watch our construction journey through detailed project videos and testimonials
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {shuffledVideos.length > 0 ? shuffledVideos.map((video, index) => {
              const isPlaying = playingVideoId === video.id;
              
              return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                  {...(index === 0 
                    ? { animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 } }
                    : { whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, viewport: { once: true } }
                  )}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow break-inside-avoid mb-8"
              >
                <div className={`relative overflow-hidden ${
                  (video.aspectRatio === '9:16' || video.usePreviewVideo) ? (video.aspectRatio === '9:16' ? 'aspect-[9/16] bg-black' : 'aspect-video bg-black') : 'aspect-video'
                }`}>
                  {(video.aspectRatio === '9:16' || video.usePreviewVideo) && video.vimeoId ? (
                    <>
                      {/* Preview video showing first 1-2 seconds */}
                      <iframe
                        ref={(el) => {
                          previewIframeRefs.current[video.id] = el;
                        }}
                        src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&loop=0&muted=1&title=0&byline=0&portrait=0&controls=0&background=0&api=1&start=0`}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                          isPlaying && loadedVideoId === video.id ? 'opacity-0' : 'opacity-100'
                        }`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                        onLoad={() => {
                          setPreviewVideoId(video.id);
                          // Auto-pause at 1.5 seconds
                          setTimeout(() => {
                            const iframe = previewIframeRefs.current[video.id];
                            if (iframe && iframe.contentWindow && playingVideoId !== video.id) {
                              iframe.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), 'https://player.vimeo.com');
                            }
                          }, 1500);
                        }}
                      />
                      {/* Pause button overlay - always visible */}
                      {!isPlaying && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 bg-black/10"
                          onClick={() => {
                            setPlayingVideoId(video.id);
                            setLoadedVideoId(null);
                          }}
                        >
                          <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm hover:scale-110 transition-transform opacity-80 group-hover:opacity-100">
                            <Play className="text-cream ml-1" size={28} fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <img
                        src={
                          video.vimeoId 
                            ? `https://vumbnail.com/${video.vimeoId}.jpg`
                            : video.thumbnail
                        }
                      alt={video.title}
                        className={`w-full h-full transition-opacity duration-300 ${
                          video.aspectRatio === '9:16' ? 'object-contain' : 'object-cover'
                        } ${
                          isPlaying && loadedVideoId === video.id ? 'opacity-0' : 'opacity-100'
                        }`}
                        onError={(e) => {
                          // Fallback chain: vumbnail -> vimeocdn -> placeholder
                          const target = e.target as HTMLImageElement;
                          if (video.vimeoId) {
                            if (target.src.includes('vumbnail.com')) {
                              // Try Vimeo CDN
                              target.src = `https://i.vimeocdn.com/video/${video.vimeoId}_640.jpg`;
                            } else if (target.src.includes('vimeocdn.com')) {
                              // Try different Vimeo thumbnail size
                              target.src = `https://i.vimeocdn.com/video/${video.vimeoId}_1280.jpg`;
                            } else {
                              // Final fallback to placeholder
                              target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=640';
                            }
                          }
                        }}
                      />
                  )}
                    {isPlaying && video.vimeoId ? (
                      <>
                        <iframe
                          ref={(el) => {
                            iframeRefs.current[video.id] = el;
                          }}
                          src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&background=0&api=1`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                          onLoad={() => setLoadedVideoId(video.id)}
                        />
                        {loadedVideoId === video.id && (
                          <div 
                            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => {
                              setPlayingVideoId(null);
                              setLoadedVideoId(null);
                            }}
                          >
                            <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm hover:scale-110 transition-transform">
                              <Pause className="text-cream" size={28} fill="currentColor" />
                    </div>
                  </div>
                        )}
                      </>
                    ) : (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          setPlayingVideoId(video.id);
                          setLoadedVideoId(null);
                        }}
                      >
                        <div className="w-16 h-16 border-2 border-cream rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="text-cream ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
                    )}
                </div>
              </motion.div>
              );
            }) : videos.map((video) => (
              <div key={video.id} className="break-inside-avoid mb-8">
                <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-mystic-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-4">
              Want to See Your Project Here?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss your construction needs and bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-inferno text-white font-semibold rounded-lg hover:bg-red-inferno/90 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
