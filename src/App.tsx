
import './App.css'
import { ContainerGlobal, Name } from './StylesGlobal'
import { OrderList } from './components/OrderList/OrderList'

function App() {

  return (
    <ContainerGlobal>
      {/* <Name>Sistema de pedidos - Chifa Ding Dong</Name> */}
      <OrderList />
    </ContainerGlobal>
  )
}

export default App
