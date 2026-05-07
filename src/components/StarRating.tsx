import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  showValue?: boolean;
};

export default function StarRating({ rating, showValue = false }: StarRatingProps) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      <span aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={16}
            fill={index < Math.round(rating) ? "currentColor" : "none"}
          />
        ))}
      </span>
      {showValue && <strong>{rating.toFixed(1)}</strong>}
    </div>
  );
}
