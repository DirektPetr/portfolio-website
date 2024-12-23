import {Socials} from "@/app/constants";
import Image from "next/image";


const Navbar = () => {
    return (
        <div className={"fixed top-0 z-[10] w-full flex gap-5 md:justify-around p-5 bg-black/50"}>
            <h1 className={"text-white text-[25px] md:text-[45px] min-w-[250px]"}>
                Petr <span className={"font-thin"}>Anisimov</span>
                <span className={"text-yellow-200"}>.</span>
            </h1>
            <div className={"flex flex-row gap-5"}>
                {Socials.map((social) => (<Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                /> ))}
            </div>
        </div>
    );
};

export default Navbar;