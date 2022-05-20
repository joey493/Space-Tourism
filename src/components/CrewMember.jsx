import React from 'react'

function CrewMember({children, info: {role, name, images, bio}}) {
  return (
    <div>
        <div className="member flow">
            <div className="ff-serif flow">
                <h4 className="role uppercase">{role}</h4>
                <h2 className="uppercase">{name}</h2>
                <p className="text-accent ff-sans-normal">
                  {bio}
                </p>
            </div>
            {children}
        </div>
        <div className="image">
            <img src={require(`../assets/crew/${images.png}`).default} alt="crew"/>
        </div>
    </div>
  )
}

export default CrewMember