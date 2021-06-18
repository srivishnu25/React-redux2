import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions'

const Contact = ({addProductProp})=> {
    const [item, setItem] = useState('')
    
        return (
            <div>
              <h2>Contact </h2> 
              <input onChange={(e)=>setItem(e.target.value)} value={item}/> 
              <button onClick={()=>{
                  addProductProp({id: Math.random(), name:item})
                  setItem('')
              }}>ADD</button>
            </div>
        )
}

const mapStateToProps = (store) => ({
    productsCount : store.products.length
})

const mapDispatchToProps = (dispatch)=>( {
   addProductProp: (data)=> dispatch(addProduct(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
