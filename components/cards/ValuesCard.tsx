import Image from 'next/image'

interface Props {
  icon: string;
  title: string;
  description: string;
}

const ValuesCard = ({ icon, title, description }: Props) => {
  return (
    <div className="full px-8 py-6 bg-white rounded-lg flex-col justify-start items-start gap-5 inline-flex border">
      <Image src={icon} alt={title} width={48} height={48} />
      <div className="h-full flex-col justify-start items-start gap-2 flex">
        <h3 className="regular-28 text-blue-950">{title}</h3>
        <div className="regular-16" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default ValuesCard