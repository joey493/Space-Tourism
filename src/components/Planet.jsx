function Planet({children, info: {name, images, description, distance, travel}}) {

  return (
    <div>
        <div className='image'>
          <img src={require(`../assets/destination/${images.png}`).default} alt="planet" className='image-fluid'/>
        </div>
        <div className='text'>
          {children}
          <div>
            <h3 className='ff-serif uppercase'>{name}</h3>
            <p className='text-accent'>{description}</p>
          </div>

          <div className='uppercase'>
            <div>
              <span className='ff-sans-cond fs-200 letter-spacing-3 text-accent'>
                distance
              </span>
              <p className='ff-serif fs-500'>{distance}</p>
            </div>
            <div>
              <span className='ff-sans-cond fs-200 letter-spacing-3 text-accent'>
                travel time
              </span>
              <p className='ff-serif fs-500'>{travel}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Planet