import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Body from "./body";

const AppLayout=()=>{
    return (
    <div className="bg-[#27314A]">
        <Header></Header>
        <Body></Body>
    </div>)
};

const root=ReactDOM.createRoot(document.querySelector('.main'));

root.render(<AppLayout></AppLayout>);





