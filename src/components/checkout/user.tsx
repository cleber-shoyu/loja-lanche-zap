import { StepCheckout } from "@/types/steps-checkout";
import { Dispatch, SetStateAction } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutStore } from "@/stores/checkout-store";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
    name: z.string().min(2, { message: "Preencha seu nome" }),
});

type Props = {
    setStep: Dispatch<SetStateAction<StepCheckout>>
}


export const StepUser = ({ setStep }:Props) => {
    const { name, setName } = checkoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name);
        setStep("address");
    }

    return(
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField 
            control={form.control} 
            name="name" 
            render={({field}) => (
                <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                        <Input
                             autoFocus
                            placeholder="Digite seu nome"
                            {...field}

                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" variant={"outline"}>Próximo</Button>
            </form>
      </FormProvider>
    )
}