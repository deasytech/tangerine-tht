import Image from "next/image"
import { HEALTH_PLANS } from "@/constants/tht"
import Link from "next/link"
import GoBackButton from "@/components/tht/GoBackButton"


const LoginPage = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>
      <Image src="/images/tht/login-banner.png" alt="login" width={1216} height={321} />
      <h1 className="bold-48 text-blue-950 py-12 text-center">How would you like to register?</h1>
      <div className="flexCenter">
        <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {HEALTH_PLANS.map((plan) => (
            <div key={plan.text} className="text-center w-full">
              <Link href={`/${plan.link}`}>
                <Image src={plan.image} alt="policy holder" width={176} height={176} className="w-full" />
              </Link>
              <p className="regular-24 text-blue-950 !font-gilroy-semibold mt-3">{plan.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-8">
        <Link href="/login" className="bg-blue-50 py-2 px-6 rounded-full regular-12 text-blue-950">
          Already have an account?
          <span className="!font-gilroy-bold">Login here</span>
        </Link>
      </div>
    </section>
  )
}

export default LoginPage