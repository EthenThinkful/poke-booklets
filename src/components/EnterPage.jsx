import { Link } from "react-router-dom"

export default function EnterPage() {
    return (
        <div>
           <h1>Continue as existing user: Josh?</h1>
           <Link to={'/home'} className="m-6">Yes</Link>
           <Link to={'/'}>No</Link>
        </div>
    )
}