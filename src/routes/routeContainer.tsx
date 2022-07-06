import { Route, Routes } from "react-router-dom"

import FastCard from "../pages/fast-card-pages/fastCard"
import FastCardInvoice from "../pages/fast-card-pages/fastCardInvoice"

import { RoutesList } from "./routesList"

const RouteContainer = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesList.fastCard} element={<FastCard />} />
        <Route path={RoutesList.invoice} element={<FastCardInvoice />} />
      </Routes>
    </>
  );
}


export default RouteContainer