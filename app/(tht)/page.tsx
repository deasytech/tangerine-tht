import Link from 'next/link'
import { ArrowRight, Heart, LinkIcon, MessageCircle } from 'lucide-react'
import Slider from '@/components/tht/Slider'
import AwardSection from '@/components/tht/AwardSection'

const TangHealthPage = () => {
  return (
    <>
      <Slider />

      <section className="relative w-full min-h-[481px] bg-cover bg-center mt-11" style={{
        backgroundImage: "url('/images/tht/city-scape.svg')",
        overflow: 'hidden',
      }}>
        <div className="h-full flex flex-col justify-start items-center mt-6 w-full gap-6">
          <h1 className="bold-32 lg:bold-56 items-center text-center text-blue-950 w-full md:w-2/3">
            Access to Comprehensive and robust healthcare is what we do
          </h1>
          <p className="regular-24 text-center text-blue-950 w-full p-4 md:p-0 md:w-1/2">
            We are the preferred and trusted health insurance and well-being partner to over 400 multinationals, large local corporates, MSMEs and individuals.
          </p>
        </div>
      </section>

      <section className="relative flex w-full items-center justify-center min-h-[624px] bg-blue-950 -mt-3" style={{
        backgroundImage: "url('/images/tht/white-rope.svg')",
        backgroundPosition: "center center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        overflow: 'hidden',
      }}>
        <div className="relative h-full bg-white min-h-[372px] px-12 py-16 max-w-3xl rounded-3xl flex flex-col justify-center items-center gap-6 mx-10">
          <h5 className='absolute px-4 py-2 border border-generic-800 rounded-full -top-4 w-fit small-medium uppercase text-blue-950 bg-white'>Who we are</h5>
          <p className='text-center regular-20 text-blue-950'>Total Health Trust (THT), a Tangerine company is the foremost Health Maintenance organisation (HMO) with 26 years of experience providing in-and-out-of-country healthcare access and wellness services. The brand leverages expertise and technology in delivering world-class healthcare and wellness user experiences.</p>
          <Link href="/about" className="flex items-center gap-2 rounded-lg btn_dark_orange w-fit">
            <span>Learn more</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <AwardSection />

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4 px-10">
          <h2 className="bold-40 text-blue-950">
            Our Plans
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