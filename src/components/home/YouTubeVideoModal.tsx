'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface YouTubeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string; // YouTube video URL or embed URL
}

const YouTubeVideoModal: React.FC<YouTubeVideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl
}) => {
  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string): string => {
    // Handle different YouTube URL formats
    let videoId = '';
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0] || '';
    }
    // Format: https://youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    }
    // Format: https://www.youtube.com/embed/VIDEO_ID (already embed format)
    else if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // Return embed URL with autoplay and other parameters
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-5xl bg-black rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video Container - 16:9 Aspect Ratio */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title="CDPL Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeVideoModal;
