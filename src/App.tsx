import './App.css'

function App() {
  const instagram = "https://www.instagram.com/my.wedding.moments";
  const tiktok = "https://www.tiktok.com/@myweddingmoments";
  const app = "https://myweddingmoments.netlify.app/"

  return (
    <div className="outer">
      {/* <div className="top-art">
          <img src="top-art.png" alt="" />
        </div> */}
    <div className="content">
      <div className="top-section">

        {/* <div>
          <img src="couple.png" alt="App Store" /> */}
          {/* https://avatoon.net/wedding-cartoon-photo/ */}
        {/* </div> */}

        {/* <p className="slogan">Make your wedding a memorable one.</p> */}

        <div className="mockup-1">
          <img src="mockup-1.png" alt="iPhone Mockup" />
        </div>

        <h1 className="satisfy-regular">My Wedding Moments</h1>

        <div className="app-images">
          <a href={app} target="_blank"><img src="app_store_image.png" alt="App Store" /></a>
          <a href={app} target="_blank"><img src="play_store_image.png" alt="App Store" /></a>
        </div>

        <div className="coming-soon">
          <img src="coming-soon.png" alt="Coming Soon" />
        </div>

        {/* <div className="mockup-1">
          <img src="mockup-1.png" alt="iPhone Mockup" />
        </div> */}

      </div>

      <div className='feature-section'>
        <div className="feature-cards">

          <div className='feature-card'>
            <img className="icon" src="camera-icon.png" alt="App Store" />
            <h2>Capture the Moment</h2>
            <p>Guests capture disposable photos within the app, which is then printed into a physical album for the couple to cherish.</p>
          </div>

          <div className='feature-card'>
            <img className="icon" src="video-icon.png" alt="App Store" />
            <h2>Send Video Messages</h2>
            <p>Leave heartfelt video messages and best wishes, enhanced with custom filters, for the newlyweds to watch later.</p>
          </div>

          <div className='feature-card'>
            <img className="icon" src="gift-icon.png" alt="App Store" />
            <h2>Send Gifts and Money</h2>
            <p>Guests can contribute directly to the newlyweds through the app, helping kickstart their new life together.</p>
          </div>

          <div className='feature-card'>
            <img className="icon" src="games-icon.png" alt="App Store" />
            <h2>Interactive Games</h2>
            <p>Entertain guests with engaging wedding games, including fun quizzes such as... 'Who knows the Bride the best?'</p>
          </div>

          <div className='feature-card'>
            <img className="icon" src="store-icon.png" alt="App Store" />
            <h2>Find Wedding Vendors</h2>
            <p>Discover and connect with wedding vendors offering services and products, such as chauffeuring, dessert tables, etc.</p>
          </div>

          <div className='feature-card'>
            <img className="icon" src="tools-icon.png" alt="App Store" />
            <h2>Event Planning Tools</h2>
            <p>Access resources, advice, and recommendations for seamless wedding planning, from budgeting to free CV templates.</p>
          </div>

        </div>
      </div>

      <div className="contact-section">
        <h5>Be the First to Know About the App Launch!</h5>
        <form name="myweddingmoments-form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="myweddingmoments-form" />
          <input type="email" name="email" placeholder="Your email" />
          <button type="submit">Notify Me</button>
        </form>
      </div>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="social-links">
            <a href={instagram} target="_blank">Instagram<i className="fab fa-instagram"></i></a>
            <a href={tiktok} target="_blank">TikTok<i className="fab fa-tiktok"></i></a>
          </div>
          <div className="contact-info">
            <p>enquiries@myweddingmoments.com</p>
            <p>© My Wedding Moments 2024</p>
          </div>
        </div>
      </footer>

    </div>
    </div>
  )
}

export default App
