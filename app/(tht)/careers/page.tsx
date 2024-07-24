import CoreValue from "@/components/tht/CoreValue"
import { Button } from "@/components/ui/button"
import { CORE_VALUES } from "@/constants/tht"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const CareersPage = () => {
  return (
    <>
      <section className="relative flex flex-col gap-4 items-center justify-center mt-44">
        <p className="regular-14 uppercase text-generic-500">join our team</p>
        <h1 className="text-blue-950 text-center bold-56 max-w-xl">Unlock opportunities at THT</h1>
        <p className="max-w-xl regular-18 text-generic-700 text-center">We are looking for passionate individuals who want to join our train in providing affordable, quality and innovative healthcare solutions.</p>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="flex flex-col md:flex-row gap-6">
          <Image src="/images/tht/career_banner1.png" width={312} height={324} alt="career" className="w-full object-contain" />
          <Image src="/images/tht/career_banner2.png" width={269} height={324} alt="career" className="w-full object-contain" />
          <Image src="/images/tht/career_banner3.png" width={270} height={324} alt="career" className="w-full object-contain" />
          <Image src="/images/tht/career_banner4.png" width={269} height={324} alt="career" className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <h3 className="bold-48 text-blue-950 font-gilroy-semibol">Our Core Values</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12">
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

      <section className="relative max-container padding-container mt-20">
        <h3 className="bold-48 text-blue-950 font-gilroy-semibol mb-3">Why Join Us</h3>
        <div className="text-lg text-generic-700 font-gilroy-medium space-y-1 max-w-4xl">
          <p>We offer you an extraordinary career. Once you join us, you will contribute meaningfully to healthcare  and well-being of our enrollees and communities we love and serve.</p>
          <p>We are committed to helping you be all you can be in an innovative and rewarding environment. We believe that a fulfilling career is a two-way street, in return for your dedication and hard work, we provide unique and amazing benefits:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="flex items-center gap-3">
            <Image src="/icons/tht/join1.svg" alt="svg" width={48} height={48} />
            <p className="text-2xl font-gilroy-semibold text-blue-950">An Amazing Team</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/icons/tht/join2.svg" alt="svg" width={48} height={48} />
            <p className="text-2xl font-gilroy-semibold text-blue-950">Flexibility and work life balance</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/icons/tht/join3.svg" alt="svg" width={48} height={48} />
            <p className="text-2xl font-gilroy-semibold text-blue-950">Competitive salary and benefits</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/icons/tht/join4.svg" alt="svg" width={48} height={48} />
            <p className="text-2xl font-gilroy-semibold text-blue-950">Conducive workspaces</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-950 p-3 rounded-5xl flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 items-start p-3 md:ml-16 justify-center">
            <h3 className="bold-56 text-white font-gilroy-semibold">Come Join our team at THT</h3>
            <p className="text-lg text-white font-gilroy-medium">Working at Total Health Trust is more than just a job. Want to come along for the ride?</p>
            <Link href="/">
              <Button variant="secondary" className="gap-2">
                See all Open Positions
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-end">
            <Image src="/images/tht/join-us-bottom.png" alt="bottom image" width={476} height={44} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage