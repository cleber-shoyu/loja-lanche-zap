import { create } from "zustand";

type States = {
    name: string;
    address: {
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
    }
}

type Actions = {
    setName: (name: string) => void;
    setAddress: (address: States["address"]) => void;
}

const initialState: States = {
    name: "",
    address: {
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: ""
    }
}

export const checkoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({...state, name })),
    setAddress: (address) => set(state => ({...state, address }))
}))