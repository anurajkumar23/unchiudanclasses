import AdBanner from "../AdBanner";
import CurrentAffairsCard from "./components/CurrentAffairsCard";

export const metadata = {
  title: "Daily Current Affairs/ कर्रेंट अफेयर्स",
  description:
    "Current Affairs for UPSC, BPSC, बिहार दारोगा, SI, BSSC, Railway, JSSC, SSC, BANKING, Defence..",
    alternates:{
      canonical: `/currentaffairs`
    },
};

function Currentaffairs() {
  return (
    <div className="w-full py-[6rem] md:py-[8rem]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center text-center">
          <span className="mr-2">All Current Affairs</span>
        </h1>
      </div>
      <CurrentAffairsCard />
      <AdBanner
       data-ad-slot="1848801465"
       data-ad-format="auto"
       data-full-width-responsive="true"
      />
    </div>
  );
}

export default Currentaffairs;
