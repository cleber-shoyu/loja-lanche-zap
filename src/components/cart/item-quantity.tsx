import { cartStore } from "@/stores/cartStore-zuastand";
import { Cart } from "@/types/cart"
import { Button } from "../ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

type Props ={
    cartItem: Cart;
}

export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCart } = cartStore(state => state); //acessa o estado do carrinho

    const handlePlusButton = () => {
        upsertCart(cartItem.product, 1); //adiciona o item ao carrinho com quantidade 1
    }
    const handleMinusButton = () => {
        upsertCart(cartItem.product, -1); //remove o item do carrinho com quantidade 1
    }

    return(
        <div className="flex items-center gap-2">
            <Button
            onClick={handlePlusButton}
            variant="outline"
            size="icon"
            className="size-6"
            > 
                <PlusCircleIcon className="size-6" />
            </Button>

            <div className="text-xs">{cartItem.quantity}</div>

            <Button
            onClick={handleMinusButton}
            variant="outline"
            size="icon"
            className="size-6"
            > 
                <MinusCircleIcon className="size-6" />
            </Button>
            
        </div>
    )
}