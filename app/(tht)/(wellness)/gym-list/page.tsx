import { GYM_LIST } from '@/constants/tht'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GymListPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-40">
        <div className="h-[540px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/tht/gym-banner.png')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-8 md:ml-32 h-full flex flex-col justify-center items-start w-full md:w-[40%]">
            <h1 className="bold-32 lg:bold-56 items-center mb-3 lg:mt-10 text-white">
              Gym Network
            </h1>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <table className="w-full border-separate" style={{ borderSpacing: "0 0.5rem" }}>
          <thead className="bg-blue-950 text-white">
            <tr className="w-full">
              <td className="p-4 max-w-[50%]">Name of Gym</td>
              <td className="p-4 max-w-[50%]">Address</td>
              <td className="p-4 max-w-[50%]">Location</td>
              <td className="p-4 max-w-[50%]">State</td>
            </tr>
          </thead>
          <tbody>
            {GYM_LIST.map((gym) => (
              <tr key={gym.name} className="w-full">
                <td className="w-full p-2 max-w-[50%] regular-14 text-generic-800 align-top">{gym.name}</td>
                <td className="w-full p-2 max-w-[50%] regular-14 text-generic-800 align-top">{gym.address}</td>
                <td className="w-full p-2 max-w-[50%] regular-14 text-generic-800 align-top">{gym.location}</td>
                <td className="w-full p-2 max-w-[50%] regular-14 text-generic-800 align-top">{gym.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default GymListPage