import React from 'react'
import { Order, Product } from '../../ModelsTypes/ModelsTypes'
import { useDispatch } from 'react-redux'
import { addStatusToProcess, addStatusToCompleted, addStatusToCancelled } from '../../redux/store/orderSlice'
import { Button, Card } from '../../StylesGlobal'
import { ORDERSTATUS } from '../../Data/Data'
import { OrderItemStatus, OrderItemButtonContainer, OrderItemIconContainer, OrderItemImage, OrderItemProductContainer, OrderItemProductName, OrderItemText, OrderItemTextContainer, OrderItemTitle } from './OrderItemStyles'
import { Fade } from 'react-awesome-reveal'
import { MdDescription, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";



interface OrderItemProps {
  order: Order
}

export const OrderItem: React.FC<OrderItemProps> = ({ order }) => {

  const dispatch = useDispatch()

  return (
    <Fade triggerOnce={true} style={{ margin: "20px auto" }}>
      <Card>
        <OrderItemTitle>{order.name}</OrderItemTitle>
        <OrderItemImage src={order.image} alt={order.name} />
        <OrderItemTextContainer>
          <OrderItemText>
          <OrderItemIconContainer>
              <MdDescription />
            </OrderItemIconContainer>
            {order.description}
          </OrderItemText>

          <OrderItemText>
          <OrderItemIconContainer>
              <MdOutlineProductionQuantityLimits />
            </OrderItemIconContainer>
            {order.quantity}
          </OrderItemText>

          <OrderItemText>
          <OrderItemIconContainer>
              <SiCashapp />
            </OrderItemIconContainer>
            {order.price + '.00'}
          </OrderItemText>

          <OrderItemStatus>
            <OrderItemIconContainer>
              <svg color={`${order.status === ORDERSTATUS.PENDING ? '#15803d' : order.status === ORDERSTATUS.IN_PROCESS ? '#f97316' : order.status === ORDERSTATUS.COMPLETED ? '#056896' : '#dc2626'}`} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inner-shadow-bottom-left-filled" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm-6 9a1 1 0 0 0 -1 1a7 7 0 0 0 7 7a1 1 0 0 0 0 -2a5 5 0 0 1 -5 -5a1 1 0 0 0 -1 -1z" fill="currentColor" /></svg>
            </OrderItemIconContainer>
            {order.status === 'pending' ? `PENDIENTE` : order.status === 'in process' ? `EN PROCESO` : order.status === 'completed' && `COMPLETADO`}
          </OrderItemStatus>
          <OrderItemText>
            <OrderItemIconContainer>
            <FaRegUser />
            </OrderItemIconContainer>
            {`${order.user.name} ${order.user.lastname}`}
          </OrderItemText>
        </OrderItemTextContainer>
        {/* {
          order.products.map((product: Product) => (
            <OrderItemProductContainer key={product.id}>
              <OrderItemIconContainer>
                <svg color='#ea580c' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right text-yellow-400" width="15" height="15" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>
                <OrderItemProductName>{product.name}</OrderItemProductName>
              </OrderItemIconContainer>
            </OrderItemProductContainer>

          ))
        } */}
        {
          order.status === 'pending' &&
          <OrderItemButtonContainer>
            <Button $buttonstyle={`${ORDERSTATUS.IN_PROCESS}`} onClick={() => dispatch(addStatusToProcess(order.id))}>En proceso</Button>
            <Button $buttonstyle={`${ORDERSTATUS.CANCELLED}`} onClick={() => dispatch(addStatusToCancelled(order.id))}>Cancelar</Button>
          </OrderItemButtonContainer>

        }
        {
          order.status === 'in process' &&
          <OrderItemButtonContainer>
            <Button $buttonstyle={`${ORDERSTATUS.COMPLETED}`} onClick={() => dispatch(addStatusToCompleted(order.id))}>Completar</Button>
            <Button $buttonstyle={`${ORDERSTATUS.CANCELLED}`} onClick={() => dispatch(addStatusToCancelled(order.id))}>Cancelar</Button>
          </OrderItemButtonContainer>
        }
      </Card>
    </Fade>

  )
}


export default OrderItem