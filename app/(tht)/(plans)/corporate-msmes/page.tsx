import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CoreValue from '@/components/tht/CoreValue'
import { BENEFITS_OFFERED, PLANS } from '@/constants/tht'
import PlansCard from '@/components/cards/PlansCard'
import { Button } from '@/components/ui/button'

const MSMESPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/tht/msmes-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 md:ml-32 h-full flex flex-col gap-3 justify-center items-start w-full max-w-md">
            <p className="regular-14 uppercase text-white">our plans</p>
            <h1 className="bold-32 lg:bold-56 items-center text-white">
              Corporate & MSME Plans
            </h1>
            <Link href="/get-quote">
              <Button size="lg" className="gap-2 w-fit">
                Get a Quote
                <ArrowRight size={18} className="text-violet-100 leading-tight" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">our health plan's benefits</h5>
          <h3 className="bold-48 text-blue-950">The benefits we offer you</h3>
          <p className="regular-16 text-generic-700">Our corporate health plans offer seamless and essential healthcare solutions to your employees.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {BENEFITS_OFFERED.map((benefit) =>
            <CoreValue
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">plans</h5>
          <h3 className="bold-48 text-blue-950">Our Plans</h3>
          <p className="regular-16 text-gray-600">Our diverse healthcare products are tailored to every medical and budgetary need.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {PLANS.map((plan) =>
            <PlansCard
              key={plan.title}
              link={plan.link}
              title={plan.title}
              text={plan.text}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="bold-48 text-blue-950">Frequently Asked Questions</h3>
          <Link href="/frequently-asked-questions" className="flex gap-2 items-center rounded-lg btn_blue w-fit">
            <span>Learn more</span>
            <ArrowRight size={18} className='text-white' />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          <div className="w-full space-y-3 bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 regular-20">
              What health plans does THT have?
            </h5>
            <p className="regular-16 text-generic-800">
              We have health plans designed to provide healthcare services to multinationals, large local corporates, MSMEs, and individuals.
            </p>
          </div>
          <div className="w-full space-y-3 bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 regular-20">
              Why should I get a THT health plan?
            </h5>
            <p className="regular-16 text-generic-800">
              We provide affordable, quality and innovative healthcare solutions through an accessible network of healthcare providers and robust value-added services.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MSMESPage