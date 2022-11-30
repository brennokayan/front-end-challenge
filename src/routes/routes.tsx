import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

export function Routes_Services(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />


                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
    )    
}

