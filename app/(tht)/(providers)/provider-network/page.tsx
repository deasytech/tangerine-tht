import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SPECIALIST_PANEL } from '@/constants/tht'
import { Button } from '@/components/ui/button'

const ProviderNetworkPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-8 md:flex-row items-center w-full mt-44">
        <div className="flex-none w-full md:w-1/3 space-y-5">
          <h1 className="bold-48 text-blue-900">Provider Network</h1>
          <p className="regular-14 text-generic-950 !leading-[145%]">It’s not just about listing providers but ensuring that our members can access the right care in the right environment in the shortest possible time. We partner with healthcare professionals and world-class healthcare providers in Nigeria, and across Africa and India through our partnership with Liberty Health.</p>
          <Link href="/find-provider">
            <Button size="lg" className="mt-4 gap-2">
              Find a Provider
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <Image src="/images/tht/provider-network-banner.png" alt="Wellness" width={598} height={393} className="w-full h-auto" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-blue-950 bold-32">1700+ providers and still counting!</h5>
            <p className="text-generic-950">With over 1700 providers on our network, you can find the right healthcare professional for your needs, whether it is primary, secondary or tertiary care. We also have well-being centres to promote physical and psychological health.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="space-y-3">
          <h2 className="bold-48 text-blue-950">Our Healthcare Partners</h2>
          <p className="regular-18 text-blue-950">The THT Provider Network comprises the following medical specialities:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          <div className="space-y-3 w-full">
            <Image src="/icons/tht/blue-clinic.svg" alt="clinic" width={48} height={48} />
            <p className="regular-20 text-blue-950 font-gilroy-semibold">Primary Care Clinics</p>
          </div>
          <div className="space-y-3 w-full">
            <Image src="/icons/tht/blue-care-clinic.svg" alt="clinic" width={48} height={48} />
            <p className="regular-20 text-blue-950 font-gilroy-semibold">Secondary/Specialist Care Clinics</p>
          </div>
          <div className="space-y-3 w-full">
            <Image src="/icons/tht/blue-pharmacy.svg" alt="clinic" width={48} height={48} />
            <p className="regular-20 text-blue-950 font-gilroy-semibold">Pharmacies</p>
          </div>
          <div className="space-y-3 w-full">
            <Image src="/icons/tht/blue-gym.svg" alt="clinic" width={48} height={48} />
            <p className="regular-20 text-blue-950 font-gilroy-semibold">Gyms</p>
          </div>
          <div className="space-y-3 w-full">
            <Image src="/icons/tht/blue-ancillary.svg" alt="clinic" width={48} height={48} />
            <p className="regular-20 text-blue-950 font-gilroy-semibold">Ancillary Services (Laboratories, X-ray centres etc.)</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <h3 className="bold-32 text-blue-950 max-w-xl">The THT Specialist panel comprises the following medical specialities:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-20">
          {SPECIALIST_PANEL.map((item) => (
            <div className="flex items-center gap-4" key={item.title}>
              <Image src={item.icon} alt={item.title} width={32} height={32} />
              <h3 className="regular-18 text-blue-950">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          <div className="w-full flex flex-col justify-between bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 bold-32">
              Find a provider
            </h5>
            <Link href="/find-provider">
              <Button size="lg" className="gap-2">
                Explore
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="w-full flex-col justify-between bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 bold-32 mb-4">
              Join our Network of Providers
            </h5>
            <Link href="/join-provider-network">
              <Button size="lg" className="gap-2">
                Get started
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProviderNetworkPage