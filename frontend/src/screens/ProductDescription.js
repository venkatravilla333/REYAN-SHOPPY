// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { products } from '../products'

// function ProductDescription() {

//   let { id } = useParams()
//   let productId = id
//   console.log(productId)

//   let productdata = products.find((product) => productId == product.id)
//   console.log(productdata)
  

//   return (
//     <div className='container'>
//       <div className='row my-5'>
//         <div className='col-md-6 text-left card w-50 p-3'>
//           <h2 className='fw-bold mt-3'>{productdata.name}</h2>
//           <img src={productdata.image} alt='' className='img-fluid my-3 w-75' style={{height:'480px'}}/>
//           <p className='my-3 fw-medium'>
//             <span style={{ fontWeight: 'bold',}}>Description: </span>
//             {productdata.description}
//           </p>
//         </div>
//         <div className='col-md-6  text-center'>
//           <p className='fs-5 fw-bold mt-3'>Price: {productdata.price}</p>
//           <button className='btn btn-dark'>Add To Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDescription