import { Suspense } from "react";
import AppRouter from "./router/AppRouter"
import Loading from "@components/handlers/Loading";

const App = () => (
  <Suspense fallback={<Loading />}>
    <AppRouter />
  </Suspense>
)

export default App