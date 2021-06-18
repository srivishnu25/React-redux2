import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions'

export class Home extends Component {
    
    render() {
        
        return (
           
            <div>    
             <h1>Home Component - {this.props.userName}</h1> 
             {this.props.products.length && this.props.products.map((item)=>
                 <>
                 <h3>{item.name}</h3>
                 <button onClick={()=>this.props.removeProduct(item.id)}>DELETE</button>
            </> )} 
            </div>
            // onClick={this.props.removeProduct(item.id)}
        )
    }
}

const mapStateToProps = (state) => ({
    userName: state.userName,
    products: state.products
})

const mapDispatchToProps =(dispatch)=> ({
     removeProduct:(id)=> dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
