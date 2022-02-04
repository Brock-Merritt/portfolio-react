import React from 'react'
import coverImage from '../../Assets/Screenshot 2022-01-16 190211.jpg'

function About() {
  
  return (
    <section className="my-5" >
        <div>
            <p>
            My name is Brock Merritt, and I am an aspiring dev, coach, and always the 2nd smartest in the room
            </p>

        </div>
      <img src={coverImage} className="my-2" style={{ width: "60%" }} alt="cover" />
      <div className="my-2">

      </div>
    </section>
  )
}

export default About