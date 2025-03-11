import { Outlet, Link } from "react-router-dom";

export const Layout = ()=>{
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
            </ul>
        </nav>
        </>
    )
}