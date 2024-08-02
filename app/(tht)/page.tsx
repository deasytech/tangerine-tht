import Link from 'next/link'
import { ArrowRight, Heart, LinkIcon, MessageCircle } from 'lucide-react'
import Slider from '@/components/tht/Slider'
import AwardSection from '@/components/tht/AwardSection'
import Image from 'next/image'

const TangHealthPage = () => {
  return (
    <>
      <Slider />

      <section className="relative max-container padding-container mt-11 mb-12">
        <div className="flex flex-col items-center md:flex-row gap-6">
          <h1 className="bold-32 lg:bold-56 items-start text-blue-950 w-full md:w-2/3 text-wrap md:pr-20">
            Access to Comprehensive and robust healthcare is what we do
          </h1>
          <div className="w-full md:w-1/4 flex-1">
            <p className="w-full text-2xl text-generic-950 leading-8 mb-3">We are the preferred and trusted health insurance and well-being partner to over 400 multinationals, large local corporate, MSMEs and individuals.</p>
            <div className="bg-orange-50 rounded-xl flex items-center gap-5 p-6">
              <Image src="/images/tht/users.png" alt="enrollees" width={112} height={48} className="object-contain" />
              <div className="space-y-1">
                <h4 className="text-orange-base font-semibold text-2xl">240,000+</h4>
                <p className="text-generic-950 text-base font-normal">Enrollees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-11 mb-12">
        <div className="flex flex-col items-center md:flex-row gap-8 bg-blue-950 text-white p-8 rounded-3xl">
          <Image src="/images/tht/home-wwa.png" alt="who we are" width={456} height={384} className="w-full object-cover" />
          <div className="flex flex-col gap-4 p-8">
            <h3 className="bold-40">Who we are</h3>
            <p className="text-xl"> Total Health Trust (THT), a Tangerine company is the foremost Health Maintenance organisation (HMO) with 26 years of experience providing in-and-out-of-country healthcare access and wellness services. The brand leverages expertise and technology in delivering world-class healthcare and wellness user experiences.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className='bg-orange-base text-white flex flex-col p-8 w-full rounded-3xl gap-2'>
            <h4 className='bold-36'>Mission</h4>
            <p className='regular-20'>To help people access excellent healthcare services through robust health plans.</p>
          </div>
          <div className='bg-blue-50 flex flex-col p-8 w-full rounded-3xl gap-2'>
            <h4 className='bold-32 text-blue-950'>Vision</h4>
            <p className='regular-20 text-generic-950'>To be the provider of choice in Africa for comprehensive health insurance solutions.</p>
          </div>
        </div>
      </section>

      <section className='relative max-container padding-container mt-16'>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <Image src="/images/tht/award-photo.png" alt="award" width={598} height={316} className="w-full object-cover" />
          <div className='bg-orange-base flex items-center justify-center p-8 w-full rounded-3xl gap-8'>
            <Image src="/images/tht/award.svg" alt="award" width={119} height={101} />
            <div className='flex flex-col gap-4'>
              <p className='regular-18 !leading-7 !font-gilroy-medium text-white'>4-time winner</p>
              <p className='bold-36 text-white'>NHEA HMO of the Year Award.</p>
            </div>
          </div>
        </div>
        <div className='bg-blue-50 w-full flex flex-col md:flex-row rounded-2xl p-4 gap-4'>
          <div className='w-full bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>240,000+</p>
            <p className='regular-16 text-generic-950'>Enrollees</p>
          </div>
          <div className='w-full bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>186+</p>
            <p className='regular-16 text-generic-950'>Staff strength</p>
          </div>
          <div className='w-full bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>9</p>
            <p className='regular-16 text-generic-950'>Locations across Nigeria</p>
          </div>
          <div className='w-full bg-white flex flex-col px-6 py-10 justify-center rounded-2xl'>
            <p className='bold-40 text-blue-950'>1700+</p>
            <p className='regular-16 text-generic-950'>Provider network</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4 px-10">
          <h2 className="bold-40 text-blue-950">
            Our Offerings
          </h2>
          <p className="regular-18 !leading-[26px] max-w-md">Our diverse healthcare products are tailored to every Health and budget need.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-blue-950 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-white">
              Corporate & MSMEs Plans
            </h2>
            <p className='regular-18 !leading-[26px] text-white'>Budget-friendly and carefully designed healthcare plans for corporate organisations and businesses.</p>
            <Link href="/corporate-msmes" className="flex gap-2 items-center rounded-lg btn_white w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-blue-950' />
            </Link>
          </div>
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-blue-950 font-gilroy-semibold'>plans</p>
            <h2 className="bold-48 text-blue-950">
              Individual Plans
            </h2>
            <p className='regular-18 !leading-[26px] text-blue-950'>Flexible and affordable individual plans covering a wide range of healthcare services.</p>
            <Link href="/individuals" className="flex gap-2 items-center rounded-lg btn_blue w-fit mt-10">
              <span>Explore plans</span>
              <ArrowRight size={18} className='text-white' />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[264px] flex justify-start items-center border border-blue-200 rounded-3xl no-bg-mobile" style={{
          backgroundImage: "url('/images/tht/wellness-mat.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start px-10 gap-6 flex w-full md:w-1/2">
            <h3 className="bold-32 md:bold-48 text-blue-950">Our Wellness Offerings</h3>
            <p className="regular-18 text-blue-950">
              Bespoke solutions tailored to help you achieve your physical and psychological well-being goals.
            </p>
            <Link href="/wellness" className="flex gap-2 items-center rounded-lg btn_red w-fit">
              <span>Learn more</span>
              <ArrowRight size={18} className='text-white' />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container flex flex-col md:flex-row gap-6 mt-10 min-h-[552px]">
        <div className='flex flex-col gap-4 w-full border border-blue-200 rounded-3xl p-10 no-bg-mobile' style={{
          backgroundImage: "url('/images/tht/network-providers.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}>
          <h3 className="bold-32 md:bold-48 text-blue-950">Our Provider Network</h3>
          <p className="regular-18 text-blue-950">
            THT partners with 1700+ healthcare and related providers in Nigeria and over 7000 provider networks across Africa and in India. We have provided answers to some of the questions you might have in mind.
          </p>
          <Link href="/provider-network" className="flex gap-2 items-center rounded-lg btn_blue w-fit">
            <span>Learn more</span>
            <ArrowRight size={18} className='text-white' />
          </Link>
        </div>
        <div className='flex flex-col gap-4 w-full border border-blue-200 rounded-3xl p-10 no-bg-mobile' style={{
          backgroundImage: "url('/images/tht/partnership.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}>
          <h3 className="bold-32 md:bold-48 text-blue-950">Partnership Offerings</h3>
          <p className="regular-18 text-blue-950">
            We believe in the power of collaboration to drive positive change in healthcare. Whether you're a healthcare provider, employer, broker, or service provider, we can design a partnership plan to meet your unique needs.
          </p>
          <Link href="/partnership" className="flex gap-2 items-center rounded-lg btn_blue w-fit">
            <span>Learn more</span>
            <ArrowRight size={18} className='text-white' />
          </Link>
        </div>
      </section>
    </>
  )
}

export default TangHealthPage