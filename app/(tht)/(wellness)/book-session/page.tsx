import GoBackButton from "@/components/tht/GoBackButton"
import { BookSessionForm } from "@/components/tht/forms/book-session-form"
import Image from "next/image"

const BookSessionPage = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-32">
        <Image
          src="/images/tht/book-session-banner.png"
          alt="network provider"
          width={592}
          height={708}
          className="w-full"
        />

        <div className="flex flex-col w-full gap-6 pb-16">
          <div className="space-y-6 mb-4">
            <h3 className="text-blue-950 text-5xl font-normal font-gilroy-semibold leading-10">Book a session</h3>
            <p className="text-neutral-500 text-lg font-normal font-gilroy-semibold">Please take a minute to provide the required information so we can attend to your request.</p>
          </div>
          <BookSessionForm />
        </div>
      </div>
    </section >
  )
}

export default BookSessionPage