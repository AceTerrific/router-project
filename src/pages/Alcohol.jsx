import barImage from "../assets/home-alcohol.jpg";

function Alcohol() {
  return (
    <div className="alcohol">
      <h2>Pubs and Bars</h2>
      <div className="main-section">
        <img src={barImage} alt="bar" />
        <div className="slogan">
          <h3>Where good friends and good times meet</h3>
          <h3>Craft beer and artisanal cocktails</h3>
          <h3>Bottoms up is the way to go</h3>
          <h3>Party the night away</h3>
          <h3>Make your Fondest Memories with Friends</h3>
          <h3>Bar and pub where you get alcohol</h3>
          <h3>Best alcohol with our best service is our ultimate goal</h3>
          <h3>For your enjoyment, we are here</h3>
          <h3>Perfect drinks for extraordinary people</h3>
        </div>
      </div>
    </div>
  );
}

export default Alcohol;
