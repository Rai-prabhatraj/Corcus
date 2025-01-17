import { TestimonialsReviewData } from "./testimonialsReview.data";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof TestimonialsReviewData)[number];
}

export const ReviewCards = ({ data, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="border border-main-black py-10 mt-10 rounded-3xl text-main-black p-8 min-h-36">
        <p className="text-main-black font-bold text-lg">{data.name}</p> {/* Name in bold */}
        <p className="text-black text-sm">{data.position}</p> {/* Position */}

        <div className="flex items-center mt-2">
          {/* Golden Star Rating */}
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className="text-gold">&#9733;</span>
          ))}
        </div>

        <p className="mt-4 text-main-black">{data.review}</p> {/* Message */}
      </div>
    </div>
  );
};
