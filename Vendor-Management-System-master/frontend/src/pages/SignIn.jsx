import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputBox} from "../components/InputBox.jsx";
import {Button} from "../components/Button.jsx";
import {BottomWarning} from "../components/BottomWarning.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {BottomNavBar} from "../components/BottomNavBar.jsx";

export const SignInPage = () => {
    const [vendorCode, setVendorCode] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const response = await axios.post("http://localhost:3000/api/vendors/signin", {
            vendorCode,
            password
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("name", response.data.name);
        if(response.data.role === "User") {
            navigate("/user_dashboard");
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
                <h2>Vendor Management System</h2>
            </div>

            <div className="flex-1">
                <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center pr-28">
                            <Heading label="Welcome! Sign in to continue." color="text-white"/>
                            <img src="src/assets/Vendor Management System.webp" alt="Vendor Management System GIF"
                                 className="mt-20 mx-auto h-40 w-auto mb-10"/>
                        </div>
                        <div className="pl-28">
                            <div className="rounded-lg bg-white w-80 text-center p-1 h-max px-4">
                                <Heading label="Sign In" color="text-blue-500"/>
                                <SubHeading label="Enter your credentials to sign in"/>
                                <InputBox label="Vendor Code" placeholder="VND123" type="text" onChange={(e) => {
                                    setVendorCode(e.target.value);
                                }}/>
                                <InputBox label="Password" placeholder="vendor@12345" type="password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }}/>
                                <div className="pt-4">
                                    <Button label="Sign In" onClick={handleSignIn}/>
                                </div>
                                <BottomWarning label={"Dont have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomNavBar />
        </div>
    )
}
