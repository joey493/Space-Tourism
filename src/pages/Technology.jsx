import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { PageHeader } from '../components/Header'
import TechDetail from '../components/TechDetail'

function Technology({data}) {
  const { id } = useParams()
  const reqTech = data.filter(({name}) => name.toLowerCase() === id.split('-').join(' ').toLowerCase())
  return (
    <main className="tech container section-margin flow">
      <PageHeader pageNum={3} title='SPACE LAUNCH 101' />
      <TechDetail info={reqTech[0]}>
        <nav className="numbered-nav">
          {data.map(({name}, idx) => (
            <NavLink to={`/tech/${name.split(' ').join('-')}`} key={name} className={({isActive}) => isActive ? 'active-num' : ''}>
              {idx + 1}
            </NavLink>
          ))}
        </nav>
      </TechDetail>
    </main>
  )
}

export default Technology