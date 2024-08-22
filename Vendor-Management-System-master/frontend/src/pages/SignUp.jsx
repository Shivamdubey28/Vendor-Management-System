import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputBox} from "../components/InputBox.jsx";
import {useState} from "react";
import {BottomWarning} from "../components/BottomWarning.jsx";
import {Button} from "../components/Button.jsx";
import axios from "axios";
import {BottomNavBar} from "../components/BottomNavBar.jsx";

export const SignUpPage = () => {
    const [name, setName] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [address, setAddress] = useState("");
    const [vendorCode, setVendorCode] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignUp = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/vendors/", {
                name,
                contactDetails,
                address,
                vendorCode,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMessage(response.data.message);
            if(response.data.message === "Vendor created successfully"){
                setName("");
                setContactDetails("");
                setAddress("");
                setVendorCode("");
                setPassword("");
            }
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
        catch (e) {
            setMessage(e.message);
            setTimeout(() => {
                setMessage("");
            }, 5000);
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
                            <Heading label="Welcome! Sign up to continue." color="text-white"/>
                            <img src="src/assets/Vendor Management System.webp" alt="Vendor Management System GIF"
                                 className="mt-20 mx-auto h-40 w-auto mb-10"/>
                        </div>
                        <div className="pl-28">
                            <div className="rounded-lg bg-white w-96 text-center p-1 h-max px-4">
                                <Heading label="Sign Up" color="text-blue-500"/>
                                <SubHeading label="Enter your details to sign up"/>
                                <InputBox label="Name" type="text" placeholder="Vendor Name" onChange={(e) => {
                                    setName(e.target.value);
                                }}/>
                                <InputBox label="Contact Details" type="email" placeholder="Vendor Contact Details"
                                          onChange={(e) => {
                                              setContactDetails(e.target.value);
                                          }}/>
                                <InputBox label="Address" type="address" placeholder="Vendor Address" onChange={(e) => {
                                    setAddress(e.target.value);
                                }}/>
                                <InputBox label="Vendor Code" type="text" placeholder="Vendor Code" onChange={(e) => {
                                    setVendorCode(e.target.value);
                                }}/>
                                <InputBox label="Password" type="password" placeholder="Vendor Password"
                                          onChange={(e) => {
                                              setPassword(e.target.value);
                                          }}/>
                                <div className="pt-4">
                                    <Button label="Sign Up" onClick={handleSignUp}/>
                                </div>
                                <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/"}/>
                                {message && <div className="p-1 rounded bg-red-200 text-red-500">{message}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomNavBar />
        </div>
    )
}