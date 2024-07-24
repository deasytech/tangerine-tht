import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BENEFITS_OFFERED, INDIVIDUAL_PLANS } from '@/constants/tht'
import PricingPlanCard from '@/components/cards/PricingPlanCard'
import CoreValue from '@/components/tht/CoreValue'
import { Button } from '@/components/ui/button'

const IndividualsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/tht/individuals-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-8 md:ml-32 h-full flex flex-col justify-center items-start w-full md:w-[40%]">
            <p className="regular-14 uppercase text-white">our plans</p>
            <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-white">
              Retail Plans
            </h1>
            <p className="regular-18 text-white">Healthcare covers are designed for you, so you don't have to part with cash when you need to access care.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h5 className="regular-14 text-orange-base uppercase">our health plan's benefits</h5>
          <h3 className="bold-48 text-blue-950">The benefits we offer you</h3>
          <p className="regular-16 text-generic-700">Our retail healthcare Plans are pocket-friendly, giving you peace of mind and seamless access to the best of care. You may even decide to “pay-on-the-go”(Quarterly and bi-annual payment options are available).</p>
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
          {INDIVIDUAL_PLANS.map((plan) =>
            <PricingPlanCard
              key={plan.planName}
              planName={plan.planName}
              price={plan.price}
              description={plan.description}
              details={plan.details}
              link={plan.link}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="bold-48 text-blue-950">Frequently Asked Questions</h3>
          <Link href="/frequently-asked-questions">
            <Button size="lg" className="mt-4 gap-2">
              Learn more
              <ArrowRight size={16} />
            </Button>
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

export default IndividualsPage