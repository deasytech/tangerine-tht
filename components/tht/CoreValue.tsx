import { cn } from '@/lib/utils';
import Image from 'next/image'

interface CoreValueProps {
  title: string;
  icon: string;
  text: string;
  textTheme?: string;
}

const CoreValue = ({ title, icon, text, textTheme }: CoreValueProps) => {
  return (
    <div className="space-y-2">
      <Image src={icon} alt={title} width={48} height={48} />
      <h4 className={cn("bold-20 text-blue-950 pt-2", textTheme)}>{title}</h4>
      <p className="regular-16 text-generic-700">{text}</p>
    </div>
  )
}

export default CoreValue