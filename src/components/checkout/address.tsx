import { StepCheckout } from "@/types/steps-checkout";
import { Dispatch, SetStateAction } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutStore } from "@/stores/checkout-store";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


const formSchema = z.object({
    street: z.string().min(2, { message: "Preencha seu endereço" }),
    number: z.string().min(1, { message: "Preencha o número" }),
    complement: z.string().optional(),
    district: z.string().min(2, { message: "Preencha o bairro" }),
    city: z.string().min(2, { message: "Preencha a cidade" }),
    state: z.string().min(2, { message: "Preencha o estado" }),
});

type Props = {
    setStep: Dispatch<SetStateAction<StepCheckout>>
}


export const StepAddress = ({ setStep }: Props) => {
    const { address, setAddress } = checkoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...address
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setAddress({
            ...values,
            complement: values.complement ?? "",
        });
        setStep("finish");
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Numero</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>complemento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione o estado"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="df">Distrito federal</SelectItem>
                                            <SelectItem value="sp">São paulo</SelectItem>
                                            <SelectItem value="go">Goiânia</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex justify-between mt-4">
                    <Button className="bg-green-500" variant={"link"} onClick={() => setStep('user')}>Voltar</Button>
                    <Button type="submit">Concluir</Button>
                </div>
            </form>
        </FormProvider>
    )
}