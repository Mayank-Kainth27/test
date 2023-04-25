import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesData from "../constants/routesData";
import { Login } from "../screens";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    RoutesData.map((data, index) => {
                        const {Component, IsPublic, path} = data;
                        return (
                            <Route path={path} key={index} element={
                                <Component />
                            }>
                            </Route>
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;