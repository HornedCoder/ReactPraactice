import Phone from "C:/ReactProjects/using-props/src/images/phone-icon.png"
import Email from "C:/ReactProjects/using-props/src/images/mail-icon.png"
export default function Contact(props) {
    return (
        <div className="cat-details">
            <div className="id">
                <img id="Photo" src={props.img}></img>
                <h3>{props.name}</h3>
            </div>
            <div className="details">
                <div className="phone">
                    <img id="Phone-icon" src={Phone}></img>
                    <p>{props.phone}</p>
                </div>
                <div className="mail">
                    <img id="Mail-icon" src={Email}></img>
                    <p>{props.mail}</p>
                </div>
            </div>
        </div>
    )
}