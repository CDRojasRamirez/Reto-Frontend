import "./App.css";
import { ContainerGlobal } from "./StylesGlobal";
import { OrderList } from "./components/OrderList/OrderList";

function App() {
  return (
    <>
      <OrderList />
      <ContainerGlobal />
    </>
  );
}

export default App;
