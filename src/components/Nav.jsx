import { NavLink } from 'react-router-dom'

// desktop view
function NavDesktop({endpoints}) {
  return (
    <>
      <nav className='nav-desk ff-sans-cond fs-300 uppercase'>
        {endpoints.map(({title, path}, idx) => (
          <NavLink key={idx} to={path}
          className='text-light nav-link  letter-spacing-2'
          >
            <span>0{idx}</span>
            {title}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

// mobile view
function NavMobile({endpoints, toggle}) {
  return (
    <nav className={`nav-mobile ${toggle ? 'show' : 'hide'}`}>
      {endpoints.map(({title, path}, idx) => (
          <NavLink key={idx} to={path}
            className='text-light nav-link  letter-spacing-2'
          >
            <span>0{idx}</span>
            {title}
          </NavLink>
        ))}
    </nav>
  )
}

export { NavDesktop, NavMobile }
