import Contact from "./components/Contact";
import JW from "C:/ReactProjects/using-props/src/images/mr-whiskerson.png"
import Aura from "C:/ReactProjects/using-props/src/images/fluffykins.png"
import Ginger from "C:/ReactProjects/using-props/src/images/felix.png"
import Boss from "C:/ReactProjects/using-props/src/images/mr-whiskerson.png"




export default function App() {
    return (
        <div className="main-page">
            <Contact 
                img= {JW}
                name= "Mr. John Wick"
                phone = "(212) K1LL3R"
                mail = "mr.wick@catnap.meow"
            />
            <Contact
                img= {Aura}
                name= "Mr. Aura Monster"
                phone = "(212) 4UR4"
                mail = "mr.aura@monster.meow"            
            />
            <Contact 
                img= {Ginger}
                name= "Mr. Angry Gignge"
                phone = "(212) 0R4NGE"
                mail = "mr.orange@fruitORcolor.meow"
                />
            <Contact 
                img= {Boss}
                name= "Mr. Cat Boss"
                phone = "(212) $B00S"
                mail = "mr.boss@money.meow"
                />
        </div>
    )
}