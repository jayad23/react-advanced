import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pagesCollection as pages, pagesCollectionProps } from "./config";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map(({ id, route, Component }: pagesCollectionProps) => (
            <Route key={id} path={route} element={<Component />}  />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter