import { checkoutStore } from "@/stores/checkout-store"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";


export const StepFinish = () => {
    const { name } = checkoutStore(state => state);

    const message = generateMessage();
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido para nosso whatsApp</p>
            <Button variant="outline" className="w-full">
                <Link target="_blank" href={linkZap}>Enviar para o whatsApp</Link>
            </Button>
        </div>
    );
}
