import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CORE_VALUES } from '@/constants/tht'
import AwardSection from '@/components/tht/AwardSection'
import CoreValue from '@/components/tht/CoreValue'
import AboutUsSlider from '@/components/tht/AboutUsSlider'

const AboutUsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full space-y-3">
          <h1 className="bold-48 text-blue-900">Who we are</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Total Health Trust (THT) Ltd, a Tangerine company is the preferred health insurer with 26 years of experience providing in-and-out country healthcare and wellbeing services. The brand leverages its expertise and technology in delivering world-class healthcare and wellness solutions. THT is a 4-time winner of the HMO of the Year Award (2016, 2017, 2019 & 2021).</p>
        </div>
        <div className="w-full">
          <AboutUsSlider />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="bg-blue-950 regular-20 text-white p-14 rounded-3xl space-y-4">
          <h5 className="uppercase text-white regular-14">how it started</h5>
          <h2 className="bold-48 text-white">Our History</h2>
          <p>Total Health Trust is one of the pioneers of health insurance practice in Nigeria and started operations in 1998.</p>
          <p>THT's success as the leading HMO in Nigeria resulted in the company becoming a wholly owned subsidiary of Liberty Holdings of South Africa, a Pan-African financial services provider in 2015.</p>
          <p>THT operated as part of Liberty Holdings until Tangerine's 100% acquisition in January 2023 after regulatory approvals were received in Nigeria and South Africa. Despite the acquisition, THT maintains a strong partnership  with Liberty  and still distributes Liberty Healthcare plans In Nigeria. </p>
        </div>
      </section>

      <AwardSection />

      <section className="relative max-container padding-container mt-32">
        <h2 className="bold-48 text-blue-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {CORE_VALUES.map((value) =>
            <CoreValue
              key={value.title}
              title={value.title}
              icon={value.icon}
              text={value.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-blue-950 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase bg-white text-blue-950 px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>leadership</p>
            <div className="flex items-center gap-3">
              <h2 className="flex-1 bold-48 text-white w-full">
                Our Leadership Team
              </h2>
              <Link href="/leadership-team" className="flex gap-2 items-center rounded-lg btn_white w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-blue-950' />
              </Link>
            </div>
          </div>
          <div className="bg-orange-200 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white bg-orange-base px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>Corporate social responsibilities</p>
            <div className="flex items-center gap-3">
              <h2 className="bold-48 text-orange-base w-full">
                Our CSR Initiatives
              </h2>
              <Link href="/csr" className="flex gap-2 items-center rounded-lg btn_dark_orange w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-white' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage