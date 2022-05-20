import { NavLink, useParams } from "react-router-dom"
import CrewMember from "../components/CrewMember"
import { PageHeader } from "../components/Header"

function Crew({data}) {
  const {id} = useParams()
  const reqMember = data.filter(({name}) => name === id.split('-').join(' '))

  return (
    <main className='crew container section-margin flow'>
      <PageHeader pageNum={2} title='Meet your crew'/>
      <CrewMember info={reqMember[0]}>
        <nav className="bullet-nav">
          {data.map(({name}, idx) =>
            <NavLink key={idx} to={`/crew/${name.split(' ').join('-')}`} className={({isActive}) => isActive ? 'active-bullet bullet': 'bullet'}/>
          )}
        </nav>
      </CrewMember>
    </main>
  )
}

export default Crew
