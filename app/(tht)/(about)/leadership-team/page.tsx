import TeamCard from "@/components/cards/TeamCard"
import { DIRECTORS, MANAGEMENT } from "@/constants/tht"

const LeadershipTeamPage = () => {
  return (
    <>
      <section className="max-container padding-container mt-40">
        <h1 className="bold-48 text-blue-950 mb-6">Board of Directors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DIRECTORS.map((team) =>
            <TeamCard
              key={team?.name}
              member={{ ...team }}
              width={384}
              height={372}
            />
          )}
        </div>
      </section>
      <section className="max-container padding-container mt-32">
        <h1 className="bold-48 text-blue-950 mb-6">Management Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MANAGEMENT.map((team) =>
            <TeamCard
              key={team.name}
              member={{ ...team }}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default LeadershipTeamPage