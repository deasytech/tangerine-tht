import Image from 'next/image'

const AwardSection = () => {
  return (
    <section className='relative max-container padding-container flex flex-col md:flex-row gap-8 mt-16'>
      <div className='bg-orange-base flex items-center justify-center p-8 w-full rounded-3xl gap-8'>
        <Image src="/images/tht/award.svg" alt="award" width={119} height={101} />
        <div className='flex flex-col gap-4'>
          <p className='regular-18 !leading-7 !font-gilroy-medium text-white'>4-time winner</p>
          <p className='bold-36 text-white'>NHEA HMO of the Year Award.</p>
        </div>
      </div>
      <div className='bg-blue-50 w-full grid grid-cols-2 rounded-3xl p-4 gap-4'>
        <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
          <p className='bold-40 text-blue-950'>240,000+</p>
          <p className='regular-16 text-generic-950'>Enrollees</p>
        </div>
        <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
          <p className='bold-40 text-blue-950'>186+</p>
          <p className='regular-16 text-generic-950'>Staff strength</p>
        </div>
        <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
          <p className='bold-40 text-blue-950'>9</p>
          <p className='regular-16 text-generic-950'>Locations across Nigeria</p>
        </div>
        <div className='bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
          <p className='bold-40 text-blue-950'>1700+</p>
          <p className='regular-16 text-generic-950'>Provider network</p>
        </div>
      </div>
    </section>
  )
}

export default AwardSection