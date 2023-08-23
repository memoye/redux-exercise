import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import { selectDollars, selectNaira } from './features/currencySlice';
import { addItem } from './features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const products = [
    {
      image: "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "signature briefcase",
      dollarPrice: "$234",
      nairaPrice: "₦130,000"
    },
    {
      image: "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$134",
      nairaPrice: "₦80,000"
    },
    {
      image: "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$334",
      nairaPrice: "₦230,000"
    },
    {
      image: "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "red briefcase",
      dollarPrice: "$364",
      nairaPrice: "₦730,000"
    },
  ]

  const dispatch = useDispatch()

  const { total, numOfItems } = useSelector((state) => state.cart)

  useEffect(() => {
    console.log(total, numOfItems)
  })

  return (
    <div className='App'>

      <div className='items'>
        {
          products.map((product, index) => {
            return (
              <ProductCard
                key={ product.dollarPrice }
                { ...product }
              />
            )
          })
        }
      </div>
      <aside>
        <div className='btnsContainer'>
          <button onClick={ () => dispatch(selectNaira()) } className={ `btn` } >NGN</button>
          <button onClick={ () => dispatch(selectDollars()) } className={ `btn` } >USD</button>
        </div>

        <p>Number of Items: { numOfItems }</p>
        <p>Total: { total }</p>
      </aside>
    </div>
  )
}

export default App
