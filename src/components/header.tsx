import { Logo } from "@/components/logo";
import { ModeToggleTheme } from "@/components/theme-toggle";
import { SiderbarCart } from "@/components/cart/siderbar";

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo />
                <ModeToggleTheme />
            </div>
            <div className="">
                <SiderbarCart />
            </div>
        </header>
    );
}
