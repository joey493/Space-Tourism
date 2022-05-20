import { useState, useEffect } from 'react'

function TechDetail({children, info: {name, description, images}}) {
  const [imgScale, setImgScale] = useState('portrait')

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setImgScale('landscape')
    } else {
      setImgScale('portrait')
    }
  }
  
  useEffect(() => {
    window.innerWidth < 992
      ? setImgScale('landscape')
      : setImgScale('portrait');

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [imgScale])

  return (
    <div>
      <div className="content">
          {children}
          <div>
            <h4 className='ff-sans-cond text-accent'>THE TERMINOLOGY…</h4>
            <h2 className='ff-serif'>{name}</h2>
            <p className='text-accent'>
            {description}
            </p>
          </div>
      </div>
      <div className="image">
        <img src={require(`../assets/technology/${images[imgScale]}`).default} alt="spaceship"/>
      </div>
    </div>
  )
}

export default TechDetail