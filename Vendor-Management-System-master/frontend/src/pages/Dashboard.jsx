import {Sidebar} from "../components/Sidebar.jsx";
import {Heading} from "../components/Heading.jsx";
import {Card1, Card2} from "../components/Card.jsx";
import {BottomNavBar} from "../components/BottomNavBar.jsx";
import {TopNavBarWithLogout} from "../components/TopNavBarWithLogout.jsx";
import {useEffect, useState} from "react";

export const UserDashboard = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if(storedName){
            setName(storedName);
        }
    }, []);

    return(
        <div className="flex flex-col min-h-screen">
            <TopNavBarWithLogout />

            <div className="flex-1">
                <Sidebar/>
                <div className="text-center">
                    <Heading label={`Welcome${name ? `, ${name}` : ''}!`} color="text-blue-600"/>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex ml-44 mt-10 mr-32 justify-around">
                        <Card1 label="Create New Purchase Order" to="/create_purchase_order"/>
                        <Card1 label="Update Existing Purchase Order" to="/update_purchase_order"/>
                        <Card1 label="View All Purchase Orders" to="/view_all_purchase_order"/>
                        <Card1 label="View Specific Purchase Order" to="/view_purchase_order"/>
                        <Card1 label="Delete Purchase Order" to="/delete_purchase_order"/>
                    </div>
                    <div className="mt-8 ml-48 mr-36 flex-grow">
                        <Card2 label="Vendor Performance Metrics" to="/vendor_performance_metrics"/>
                    </div>
                </div>
            </div>

            <BottomNavBar/>
        </div>
    )
}
