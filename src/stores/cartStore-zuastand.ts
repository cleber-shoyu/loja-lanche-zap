import { Cart } from "@/types/cart";
import { productsType } from "@/types/productsType";
import { create } from "zustand";

type States = {
    cart: Cart[];
}

type Actions = {
    upsertCart: (product: productsType, quantity: number) => void; //ação de adicionar ou atualizar o carrinho
}

const initialState: States = {
    cart: [], //vai iniciar carrinho vazio 
}

export const cartStore = create<States & Actions>()(set => ({
    ...initialState,
    upsertCart:(product, quantity) => set(state => {
        let newCart = state.cart;

        let productIndex = newCart.findIndex(item => item.product.id === product.id); //verifica se o produto já existe no carrinho
        if (productIndex < 0) {
            newCart.push({
                product,
                quantity: 0,
            });
            productIndex = newCart.findIndex(item => item.product.id === product.id);
        }

        newCart[productIndex].quantity += quantity; //atualiza a quantidade do produto no carrinho

        if (newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id); //remove o produto do carrinho se a quantidade for menor ou igual a zero
        }

        return {...state, cart: newCart};
    })
}));