import Image from 'next/image'

interface Props {
  image: string;
  name: string;
  position: string;
  width?: number;
  height?: number;
}

const TeamCard = ({ image, name, position, width = 280, height = 296 }: Props) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <div className="relative">
        <Image src={image} alt={name} width={width} height={height}
          className='w-full object-contain h-auto' />
        <div className="absolute rounded-lg bottom-4 left-4 right-4 bg-white p-3">
          <h3 className='text-orange-base font-gilroy-medium'>{name}</h3>
          <p className='regular-12'>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard