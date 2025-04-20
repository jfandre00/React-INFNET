import logoandre from './assets/logoandre.png';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={logoandre} alt="profile picture"></img>
            <h2 className="card-title">André Ferreira</h2>
            <p className="card-text">I am a developer and a marathon runner</p>
        </div>
    );
}

export default Card;