import { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%231a1a2e' width='400' height='400'/%3E%3Ctext fill='%23555' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  fallbackSrc = PLACEHOLDER_SVG,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached/loaded
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Shimmer skeleton placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted">
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              backgroundImage:
                'linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground) / 0.08) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      )}

      <img
        ref={imgRef}
        src={hasError ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={cn(
          'transition-all duration-700 ease-out',
          isLoaded || hasError
            ? 'opacity-100 blur-0 scale-100'
            : 'opacity-0 blur-md scale-105',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
