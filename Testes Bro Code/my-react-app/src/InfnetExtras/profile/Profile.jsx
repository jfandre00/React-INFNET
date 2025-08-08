import "./Profile.css";
import user from "./dados.js";

export default function Profile() {
    return (
        <>
        <h1>Eu sou: {user.name}</h1>
        <img className="avatar" 
        src={user.imageUrl}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }} />
        </>
    );
}