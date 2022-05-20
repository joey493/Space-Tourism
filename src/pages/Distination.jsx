import React from 'react'
import { useParams, NavLink} from 'react-router-dom'
import { PageHeader } from '../components/Header'
import Planet from '../components/Planet'

function Distination({ data }) {
  const {id} = useParams()
  const requiredPlanet = data.filter(ele => ele.name === id)

  return (
    <>
      <main className='dist container flow section-margin'>
        <PageHeader pageNum={1} title='Pick your destination'/>
        <Planet info={requiredPlanet[0]}>
          <nav className='uppercase letter-spacing-3 fs-200 ff-sans-cond'>
            {data.map(({name}) =>
              <NavLink key={name} to={`/dist/${name}`} className='nav-link'>{name}</NavLink>
            )}
          </nav>
        </Planet>
      </main>
    </>
  )
}

export default Distination