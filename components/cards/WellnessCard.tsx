import { cn } from "@/lib/utils";

interface WellnessCardProps {
  bgColor: string;
  subTitle: string;
  title: string;
}

const WellnessCard = ({ bgColor, subTitle, title }: WellnessCardProps) => {
  return (
    <div className={cn("p-8 rounded-2xl space-y-3 min-h-[208px]", bgColor)}>
      <p className="regular-10 uppercase !font-gilroy-semibold text-white">{subTitle}</p>
      <h3 className="bold-32 text-white pb-10 w-full max-w-[75%]">{title}</h3>
    </div>
  )
}

export default WellnessCard