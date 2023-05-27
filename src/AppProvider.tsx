import { Suspense } from "react";
import AppRouter from "./router/AppRouter"
import Loading from "@components/handlers/Loading";
import {Toaster} from "react-hot-toast";

const App = () => (
  <Suspense fallback={<Loading />}>
    <AppRouter />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </Suspense>
)

export default App