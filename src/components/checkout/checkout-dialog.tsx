"use client"
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepAddress } from "@/components/checkout/address";
import { StepFinish } from "@/components/checkout/finish";
import { StepUser } from "@/components/checkout/user";
import { StepCheckout } from "@/types/steps-checkout";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}



export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<StepCheckout>("user");

    let progress = 0;
    switch (step) {
        case "user":
            progress = 30;
            break;
        case "address":
            progress = 60;
            break;
        case "finish":
            progress = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === "user" && "Dados do usuário"}
                        {step === "address" && "Endereço de entrega"}
                        {step === "finish" && "Envio para whatsapp"}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progress} />
                <div className="flex flex-col gap-3">
                    {step === "user" && <StepUser setStep={setStep}/>}
                    {step === "address" && <StepAddress setStep={setStep}/>}
                    {step === "finish" && <StepFinish/>}
                </div>
            </DialogContent>
        </Dialog>
    )
}