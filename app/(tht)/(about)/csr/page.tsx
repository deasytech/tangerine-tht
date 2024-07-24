import { CSR_PHOTOS } from '@/constants/tht'
import Image from 'next/image'
import Link from 'next/link'

const CSRPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 justify-center items-center w-full mt-44">
        <div className="w-full space-y-3 text-center flex flex-col justify-center items-center">
          <h1 className="bold-48 text-blue-950">Corporate Social Responsibility</h1>
          <div className="w-full py-6">
            <iframe height="600" src="https://www.youtube.com/embed/63Max4sEung?si=U0f3lrudCsPc43qQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl object-contain w-full"></iframe>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-orange-base max-w-3xl p-10 space-y-3 rounded-3xl">
              <p className="regular-18 text-white !leading-[145%]">We are committed to making a positive impact on the health and well-being of our community. As a responsible corporate citizen, THT understands the importance of Corporate Social Responsibility (CSR) in contributing to a healthier, happier and sustainable society.</p>
              <p className="regular-18 text-white !leading-[145%]">Our CSR initiatives are designed to address critical health-related issues, promote wellness, and create a lasting positive impact on the communities we serve through advocacy, education and events sponsorship.</p>
            </div>
          </div>
        </div>
      </section>

      {CSR_PHOTOS.map((csr) =>
        <section key={csr.title} className="relative max-container padding-container mt-32">
          <div className="w-full space-y-2 max-w-xl">
            <p className="regular-14 text-generic-950 uppercase">{csr.subTitle}</p>
            <h3 className="bold-40 text-blue-950 font-gilroy-semibold">{csr.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {csr.photos.map((img) =>
              <Image key={img} src={img} alt={csr.title} width={382} height={264} className="w-full object-contain" />
            )}
          </div>
        </section>
      )}

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-blue-50 rounded-3xl" style={{
          backgroundImage: "url('/icons/life/white-logo-icon.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start px-8 md:pl-20 gap-6 flex w-full md:w-1/2">
            <p className="regular-14 text-generic-500 text-center">
              join us to serve our community
            </p>
            <h3 className="bold-56 md:bold-48 text-blue-950">Become a partner</h3>
            <Link href="/partnership" className="w-fit px-8 py-3 bg-blue-950 rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-white text-base font-normal font-gilroy-semibold">Click here</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CSRPage