export default function Home() {
  return (
    <div className="card">
      <div className="decorative-element top-left">♥</div>
      <div className="decorative-element bottom-right">♥</div>
      <div className="floating-hearts">
        <span className="floating-heart" style={{left: "10%"}}>♥</span>
        <span className="floating-heart" style={{left: "30%", animationDelay: "1s"}}>♥</span>
        <span className="floating-heart" style={{left: "50%", animationDelay: "2s"}}>♥</span>
        <span className="floating-heart" style={{left: "70%", animationDelay: "3s"}}>♥</span>
        <span className="floating-heart" style={{left: "90%", animationDelay: "4s"}}>♥</span>
      </div>

      <div className="diamond-bg"></div>
      <div className="sparkles">
        <div className="sparkle" style={{top: "20%", left: "10%"}}></div>
        <div className="sparkle" style={{top: "30%", right: "20%"}}></div>
        <div className="sparkle" style={{bottom: "40%", left: "30%"}}></div>
        <div className="sparkle" style={{bottom: "20%", right: "10%"}}></div>
      </div>
      <div className="heart-container">
        <div className="heart-shape"></div>
        <img className="profile-img" src="/assets/chancelle.jpg" alt="Chancelle" />
      </div>
      <h1>✨ Joyeux Anniversaire Chancelle ! ✨</h1>
      <p>
        En ce jour si spécial, je te souhaite tout le bonheur du monde. 
        Que cette nouvelle année de ta vie soit remplie de joie, 
        de succès et de moments inoubliables. 
        Tu es une personne extraordinaire qui mérite le meilleur !
      </p>
      <p style={{fontSize: "1.5rem"}}>🎉 🎂 🎁</p>
      <p>De la part de Isaac Touza</p>
    </div>
  )
}