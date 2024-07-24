import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  titleStyle: string;
  subTitle: string;
  subTitleStyle: string;
  description: string;
  link: string;
  linkStyle: string;
  bgStyle: string;
}

const SubsidaryCard = ({ title, titleStyle, subTitle, subTitleStyle, description, link, linkStyle, bgStyle }: Props) => {
  return (
    <div className={`w-full px-5 py-8 rounded-xl flex-col justify-between flex gap-4 ${bgStyle}`}>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className={`regular-12 uppercase ${subTitleStyle}`}>{subTitle}</div>
          <div className={`regular-20 ${titleStyle}`}>{title}</div>
        </div>
        <div className="regular-12">{description}</div>
      </div>
      <div className="flex justify-end mt-10">
        <Link href={link} target="_blank">
          <Button size="icon" className={linkStyle}>
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SubsidaryCard