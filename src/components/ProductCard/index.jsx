import { useEffect, useState } from 'react';
import styles from './productCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/cartSlice';

const ProductCard = ({ image, name, nairaPrice, dollarPrice }) => {

    const currency = useSelector((state) => state.currency.preferredCurrency)
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()


    const getPrice = () => currency === 'naira' ? nairaPrice : dollarPrice

    function priceToNum(val) {
        const newVal = parseFloat(val.slice(1).replace(/,/g, ''))
        return newVal
    }

    // const priceToSend = priceToNum(price)

    useEffect(() => {
        setPrice(getPrice())
    }, [currency])




    return (
        <div className={ styles.ProductCard }>
            <div className={ styles.productImg }>
                <img src={ image } alt={ name } />
            </div>
            <hr />
            <div className={ styles.productInfo }>
                <p>{ name }</p>
                <p>{ price }</p>
                <button
                    onClick={ () => dispatch(addItem({ val: priceToNum(price), name: name })) }
                    className={ styles.addToCart }>🛒 Add to cart </button>
            </div>
        </div>
    )
}
export default ProductCard