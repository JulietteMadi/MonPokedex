import { useState } from "react"
import { ListItems } from "./ListItems";


const MySandBox = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    const [basket, setBasket] = useState([]);

    const addToBasket = (itemToAdd) => {
        setBasket([
            ...basket,
            itemToAdd
        ]);
        setItem(item + 1);
        setCount(count + itemToAdd.Price);
    }

    const removeFromBasket = (itemToRemove) => {
        const index = basket.findIndex((itemInBasket) => itemInBasket.Name === itemToRemove.Name);
        if(index === -1) {
            // the item is not in the basket
            // do nothing
            return;
        }
        const basketCopy = [...basket];
        basketCopy.splice(index, 1);
        setBasket(basketCopy);
        setCount(count - itemToRemove.Price)
        setItem(item - 1)
    }

    return (
        <div>
            <p>Votre panier est de {count}€ pour un total de {item} articles</p>
            <button onClick={() => {setCount(0); setItem(0); setBasket({})}}>Vider mon panier</button>
            <h2>Encore en stock :</h2>
            <diV>
                {ListItems.map((list) =>
                    <ul>
                        <li>{list.Name}</li>
                        <li>Note : {list.Rate}/5</li>
                        <li>Prix : {list.Price}€</li>
                        <li>
                            <button onClick= {() => {addToBasket(list)}}>Ajouter au panier</button>
                            <button onClick= {() => {removeFromBasket(list)}}>Enlever du panier</button>
                        </li>
                    </ul>
                )}
            </diV>
        </div>
    )
}

export default MySandBox