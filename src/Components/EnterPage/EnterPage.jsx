import { Link } from "react-router-dom"
import pikachuCard from "../../assets/pikachuCard.gif"

export default function EnterPage() {
    return (
        <div className="enterPage">
           <h1>Continue as existing user: Josh?</h1>
           <Link to={'/home'} className="m-6">Yes</Link>
           <Link to={'/'}>No</Link>
           <div className="flex justify-center text-center"><img src={pikachuCard} alt="pikachu card" className="pikachuCard zoom" /></div>
        </div>
    )
}