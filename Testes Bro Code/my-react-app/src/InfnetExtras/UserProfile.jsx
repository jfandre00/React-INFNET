export default function UserProfile(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.idade}</p>
            <div>
                <strong>Hobbies</strong>
                <ul>
                    <li>{props.hobby1}</li>
                    <li>{props.hobby2}</li>
                    <li>{props.hobby3}</li>
                </ul>
            </div>
        </div>
    );
}