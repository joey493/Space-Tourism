

function Home({data: {title, subtitle, description}}) {
  return (
    <main className="home container">
      <div className="content">
        <h4 className="ff-sans-cond text-accent">{subtitle}</h4>
        <h1 className="ff-serif uppercase">{title}</h1>
        <p className="text-accent">{description}</p>
      </div>
      <div className="uppercase ff-serif">
        <div className="explore text-dark bg-light">
          Explore
        </div>
      </div>
    </main>
  )
}

export default Home