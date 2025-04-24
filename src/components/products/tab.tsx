import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/getproducts";
import { productsType } from "@/types/productsType";
import { ProductsError } from "@/components/products/errosEmpty";
import { ProductsItem } from "./item";

type ProductsTabProps = {
    title: string;
    value: string;
    products: productsType[];
}
export const ProductsTab = async () => {
    const products = await getAllProducts();

    const tabs: ProductsTabProps[] = [
        {
            title: 'sushi',
            value: 'sushi-bom',
            products: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'Temaki-bom',
            products: products.filter(item => item.category === 'Temaki')
        },
        {
            title: 'Combos',
            value: 'packs',
            products: products.filter(item => item.category === 'combo')
        },
        {
            title: 'Bebidas',
            value: 'sushi',
            products: products.filter(item => item.category === 'bebida1')
        },
    ];


    return (
        <Tabs defaultValue="sushi-bom" className="w-full">
            <TabsList className="flex w-full" >
                {tabs.map(item => (
                    <TabsTrigger key={item.value} value={item.value} className="flex-1">
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(item =>(
                <TabsContent value={item.value} key={item.value} className="mt-6">
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product =>(
                                < ProductsItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <ProductsError/>}
                </TabsContent>
            ))}


        </Tabs>
    );
}