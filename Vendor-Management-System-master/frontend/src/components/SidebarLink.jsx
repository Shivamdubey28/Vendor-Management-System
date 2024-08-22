import {NavLink} from "react-router-dom";

export const SidebarLink = ({label, link}) => {
    return (
        <div className="pt-5 transition-transform transform-gpu hover:scale-110">
            <h2>
                <NavLink to={link} className="text-white text-bold hover:text-blue-300" >{label}</NavLink>
            </h2>
        </div>
    )
}
