import {useNavigate} from "react-router-dom";
import {Button} from "./Button.jsx";

export const TopNavBarWithLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    }

    return (
        <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
            <div className="grid grid-cols-10">
                <div className="col-span-9 ml-36 mt-2">
                    <h2>Vendor Management System</h2>
                </div>
                <div className="col-span-1 ml-5">
                    <Button label="Logout" onClick={handleLogout}/>
                </div>
            </div>
        </div>
    )
}
