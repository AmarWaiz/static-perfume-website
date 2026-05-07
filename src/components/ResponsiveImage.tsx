import { SyntheticEvent } from "react";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
};

const placeholder =
  "https://placehold.co/900x700/f3e9dd/2b211d?text=Lumina+Perfume";

export default function ResponsiveImage({
  src,
  alt,
  className,
  fallbackText = "Lumina Perfume",
}: ResponsiveImageProps) {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = `https://placehold.co/900x700/f3e9dd/2b211d?text=${encodeURIComponent(
      fallbackText,
    )}`;
  };

  return (
    <img
      className={className}
      src={src || placeholder}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
}
