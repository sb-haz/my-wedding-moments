import './App.css'

function App() {
  const instagram = "https://www.instagram.com/my.wedding.moments";
  const tiktok = "https://www.tiktok.com/@myweddingmoments";

  return (
    <div className="content">
      <div className="text-box">
        <h1><span>💍</span> My Wedding Moments</h1>
        <div className="links">
          <a href={instagram} target="_blank">Instagram</a>
          <p>•</p>
          <a href={tiktok} target="_blank">TikTok</a>
        </div>
      </div>
    </div>
  )
}

export default App
