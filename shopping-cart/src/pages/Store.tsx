import React from 'react'
import storeItems from '../data/items.json'
import {Row,Col} from "react-bootstrap"
import { StoreItem } from '../components/StoreItem'
const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {storeItems.map((el)=>(
        <Col key={el.id}><StoreItem {...el}/></Col>

      ))}
    </Row>
    </>
  )
}

export default Store