"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cartStore } from "@/stores/cartStore-zuastand";
import { CartItem } from "./cartItem";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/checkout-dialog";

export const SiderbarCart = () => {
    const [checkout, setCheckout] = useState(false); 

    const { cart } = cartStore(state => state); //acessa o estado do carrinho

    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.quantity * item.product.price; //calcula o subtotal
    }


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative dark:bg-green-500 dark:text-white bg-green-500 text-white rounded-full ">
                    <ShoppingCart className="mr-3 " />
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className="absolute w-4 h-4 bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 p-3 overflow-y-scroll ">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>

                <Separator className="my-4" />
                {cart.length === 0 && <p className=" w-full text-center">Adicione produtos ao carrinho</p>}
                {cart.length > 0 &&
                    <div className="flex items-center w-full flex-col text-xs p-8 gap-4">
                        <div className="flex justify-around w-full">
                            <div>Subtotal:</div>
                            <div>R${subtotal.toFixed(2)}</div>
                        </div>
                        <Separator className="my-4" />
                        <div>

                            <Button
                            onClick={() => setCheckout(true)}
                             className="dark:hover:bg-amber-50 dark:bg-green-500  bg-green-500 rounded-full w-full">
                                Finalizar compra
                            </Button>
                        </div>
                    </div>}

                    <CheckoutDialog 
                      open={checkout}
                      onOpenChange={setCheckout}
                    />
            </SheetContent>
        </Sheet>
    );
};