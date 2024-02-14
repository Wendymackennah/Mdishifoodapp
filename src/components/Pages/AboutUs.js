
import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="page-container">
      <section className="about-section">
        <h2>About Us</h2>
        <div className="paragraph-container">
  <p className="paragraph-text">
    Welcome to Mdishi, where culinary innovation meets delightful experiences! At Mdishi, we take pride in curating a culinary journey that transcends traditional dining. Our commitment to quality ingredients, expert craftsmanship, and a passion for flavor ensures each dish is a masterpiece.

    Discover a symphony of tastes as our chefs artfully blend diverse cuisines, creating a menu that caters to every palate. Mdishi isn't just a restaurant; it's an exploration of culinary excellence, a place where food becomes an experience.
<br /><span>
    Join us at Mdishi, where every dish tells a story, and every meal is a celebration. Your extraordinary dining adventure awaits!
    </span>
  </p>
</div>
      </section>

      <section>
      <div className="team-container">
  <div className="team-member">
    <img src="team-member1.jpg" alt="Team Member 1" />
    <p>John Doe<br />CEO</p>
  </div>

  <div className="team-member">
    <img src="team-member2.jpg" alt="Team Member 2" />
    <p>Jane Smith<br />Lead Developer</p>
  </div>

  <div className="team-member">
    <img src="team-member3.jpg" alt="Team Member 3" />
    <p>Mark Johnson<br />Chef</p>
  </div>

  <div className="team-member">
    <img src="team-member4.jpg" alt="Team Member 4" />
    <p>Emily White<br />Marketing Specialist</p>
  </div>

  <div className="centered-team-member">
    <img src="team-member5.jpg" alt="Team Member 5" />
    <p>Michael Brown<br />Designer</p>
  </div>
</div>
      </section>

      {/* Section 3: Food App Image and Paragraph */}
      <section className="food-app-section">
        <img src="food-app-image.jpg" alt="Food App" />
        <div>
          <h2>About Our Food App</h2>
          <div className="header-container">
  <h3 className="vision">Vision:</h3>
  <p>
    To revolutionize the culinary landscape by delivering an unparalleled digital dining experience.
  </p>

  <h3 className="mission">Mission:</h3>
  <p>
    To empower food lovers with a seamless and delightful journey of culinary exploration. We commit to providing a user-friendly platform that not only offers a diverse range of cuisines but also fosters a sense of community and discovery.
  </p>

  <h3 className="motto">Motto:</h3>
  <p>
    Elevating Tastes, Connecting Hearts.
  </p>
</div>
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-container">
          <div className="achievement">
            <img src="achievement1.jpg" alt="Achievement 1" />
            <p>Achievement 1 Description</p>
          </div>
          <div className="achievement">
            <img src="achievement2.jpg" alt="Achievement 2" />
            <p>Achievement 2 Description</p>
          </div>
          {/* Add more achievements as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
