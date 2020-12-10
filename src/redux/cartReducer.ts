const initStore = []
//{productId:string,count:number}
  
  export default function reducer(state = initStore, action) {
    let newState=[...state]
    switch (action.type) {
      case "INCREMENT":
        // if (newState.length ==0){
        //   result.push ({product: action.payload, quantity: 1})
        // }
        // else {
        //   newState.map ((item,index)=>{
        //     productIds.push(item.product.id)
        //     if(item.product.id === action.payload.id) {
              
        //     }
        //   })
        // }
        const productIndex=newState.findIndex(value=>value.productDetail.name===action.payload.name)
        //Check is productId exist =>index=>state[index].count++
        if(productIndex<0){
          newState.push({productDetail:action.payload,count:1})
        } else newState[productIndex].count++
        //If productId not exist => create new one {productId:string,count:1}
        // console.log(newState)
        return newState
      case "DECREMENT":
        return 
      default:
        return state
    }
  }