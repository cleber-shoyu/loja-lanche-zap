"use client";
import { productsType } from "@/types/productsType";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { cartStore } from "@/stores/cartStore-zuastand";


type Props = {
    item: productsType;
}

export const ProductsItem = ({ item }: Props) => {
    const { upsertCart } = cartStore(state => state);

    const handAddButton = () => {
        upsertCart(item, 1); //adiciona o item ao carrinho com quantidade 1
        toast(`${item.name} foi adicionado ao carrinho`, {
            action: {
                label: "Fechar",
                onClick: () => { },
            },
        });
    };
    return (
        <div className="border  rounded-md p-3">
            <div className=" rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">{item.price.toFixed(2)}</p>
                <Button className="dark:bg-green-500 bg-green-500 text-white" variant="outline" onClick={handAddButton}>
                    Adicionar</Button>

            </div>
        </div>
    );
}

