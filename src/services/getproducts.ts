import { productsType } from "@/types/productsType";
import { products } from "@/data/products";

export const getAllProducts = async (): Promise<productsType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}