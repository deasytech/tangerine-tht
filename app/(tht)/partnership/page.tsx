import { THIRD_PARTY } from '@/constants/tht'
import LibertyCoverCard from '@/components/tht/LibertyCoverCard'
import Image from 'next/image'

const PartnershipPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/tht/partnership-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-8 md:ml-32 h-full flex flex-col justify-center items-start w-full md:w-[40%]">
            <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-white">
              Partnership Offerings
            </h1>
            <p className="regular-18 text-white">We believe in the power of collaboration to drive positive change in healthcare. Whether you're a healthcare provider, employer, broker, or service provider, we can design a partnership plan to meet your unique needs.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="bold-48 text-blue-950">Telemedicine</h3>
          <p className="regular-16 text-generic-700">We are proud to partner with two leading service providers that leverage technology to bring you convenient and accessible healthcare wherever you are. Our telemedicine partners are committed to delivering top-notch health services to you and connecting you with a board of certified healthcare professionals from the comfort of your home/office or on the go, saving you time and hassle.</p>
        </div>

        <div className="bg-gray-10/50 px-8 py-16 mt-20 rounded-2xl">
          <div className="w-full max-w-sm space-y-2">
            <h3 className="bold-48 text-blue-950">Services</h3>
            <p className="regular-16 text-generic-500">Complete Health care service - from consultation to drug delivery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10">
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-location-arrow.svg" alt="24/7 Access to GPs" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">24/7 Access to GPs</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-user-doctor.svg" alt="Specialist Consultation" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">Specialist Consultation</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-flask-vial.svg" alt="Laboratory Services" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">Laboratory Services</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-prescription.svg" alt="Pharmaceutical services" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">Pharmaceutical services</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-wave-pulse.svg" alt="Monthly medical check-ups" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">Monthly medical check-ups</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/icons/tht/orange-hospital-user.svg" alt="Online and offline services" width={48} height={48} />
              <p className="text-2xl font-gilroy-semibold text-blue-950">Online and offline services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="bold-48 text-blue-950">Third-Party Administration</h3>
          <p className="regular-16 text-gray-600">Partner with THT for reliable and efficient third-party administration services: We understand that some organisations want to curate their medical benefits and have a say as to how medical services are delivered to their employees. This allows you to achieve this. You carry the risk, and we carry the administrative burden allowing you to use our infrastructure for a token.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          {THIRD_PARTY.map((item) =>
            <LibertyCoverCard
              key={item.title}
              name={item.title}
              desc={item.description}
              isCompare={false}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default PartnershipPage