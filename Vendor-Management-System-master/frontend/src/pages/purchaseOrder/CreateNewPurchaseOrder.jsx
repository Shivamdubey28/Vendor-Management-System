import {InputBox} from "../../components/InputBox.jsx";
import {useState} from "react";
import {TopNavBarWithLogout} from "../../components/TopNavBarWithLogout.jsx";
import {BottomNavBar} from "../../components/BottomNavBar.jsx";
import {Button} from "../../components/Button.jsx";
import TagInput from "../../components/TagInput.jsx";
import axios from "axios";
import {Sidebar} from "../../components/Sidebar.jsx";
import {Heading} from "../../components/Heading.jsx";
import {useNavigate} from "react-router-dom";

export const CreateNewPurchaseOrder = () => {
    const [poNumber, setPoNumber] = useState("");
    const [vendor, setVendor] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleCreatePurchaseOrder = async () => {
        const itemsObject = items.reduce((acc, item) => {
            const [key, value] = item.split(": ");
            acc[key] = parseInt(value, 10);
            return acc;
        }, {});

        const purchaseOrderData = {
            poNumber,
            vendor,
            orderDate,
            expectedDeliveryDate,
            items: itemsObject,
            quantity: parseInt(quantity, 10)
        }

        try {
            const response = await axios.post("http://localhost:3000/api/purchase_order/", purchaseOrderData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            setMessage(response.data.message);
            if(response.data.message === "Purchase order created successfully"){
                setPoNumber("");
                setVendor("");
                setOrderDate("");
                setExpectedDeliveryDate("");
                setItems([]);
                setQuantity(0);
            }
            setTimeout(() => {
                setMessage("");
                navigate("/user_dashboard");
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
            <TopNavBarWithLogout />

            <Sidebar />
            <div className="flex-1">
                <div className="flex justify-center">
                    <Heading label="Create a New Purchase Order" color="text-blue-500"/>
                </div>
                <div className="flex justify-center">
                    <div className="rounded-lg bg-slate-300 w-96 text-center p-1 h-max px-4 mt-10 mb-10">
                        <InputBox label="PO Number" placeholder="PO Number" type="text" onChange={(e) => {
                            setPoNumber(e.target.value);
                        }}/>
                        <InputBox label="Vendor" placeholder="Vendor Code" type="text" onChange={(e) => {
                            setVendor(e.target.value);
                        }}/>
                        <InputBox label="Order Date" type="date" onChange={(e) => {
                            console.log(e.target.value);
                            setOrderDate(e.target.value);
                        }}/>
                        <InputBox label="Expected Delivery Date" type="date" onChange={(e) => {
                            setExpectedDeliveryDate(e.target.value);
                        }}/>

                        <div>
                            <TagInput tags={items} setTags={setItems}/>
                        </div>

                        <InputBox label="Total Quantity" placeholder="Total Quantity" type="number" onChange={(e) => {
                            setQuantity(e.target.value);
                        }}/>
                        <div className="mt-4">
                            <Button label="Submit" type="submit" onClick={handleCreatePurchaseOrder}/>
                        </div>
                        {message && <div className={`${message === "Purchase order created successfully" ? "p-1 rounded bg-green-200 text-green-500" : "p-1 rounded bg-red-200 text-red-500"}`}>{message}</div>}
                    </div>
                </div>
            </div>

            <BottomNavBar/>
        </div>
    )
}
