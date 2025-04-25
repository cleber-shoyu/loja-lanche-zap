import { cartStore } from "@/stores/cartStore-zuastand";
import { checkoutStore } from "@/stores/checkout-store";



export const generateMessage = () => {
    const {name, address} = checkoutStore(state => state);
    const {cart} = cartStore(state => state);
    
    let orderProduct = [];
    for(let item of cart){
        orderProduct.push(`Produto: ${item.product.name} - Quantidade: ${item.quantity}x`);
    }

    return`**Dados do cliente:**
 Nome:${name}
 Endereço:${address.street}, ${address.number}, ${address.city}, ${address.state}, ${address.complement}, ${address.district}, 
 ------------
 **Pedido:**
 ${orderProduct.join('\n')}`;
}