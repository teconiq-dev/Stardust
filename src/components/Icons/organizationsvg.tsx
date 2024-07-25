import * as React from "react"
import { SVGProps } from "react"
import {cn} from "@/lib/utils";
const OrgSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className={cn(
            "w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all ",

        )}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 1024 1024"
        {...props}
    >
        <path fill="#EAEAEA" d="M64 96h896v928H64z" />
        <path fill="#434854" d="M416 768h192v256H416z" />
        <path
            fill="#469FCC"
            d="M416 576h192v128H416zm-256 0h192v128H160zm0 192h192v128H160zm512-192h192v128H672zm0 192h192v128H672zM416 384h192v128H416zm-256 0h192v128H160zm512 0h192v128H672zM416 192h192v128H416zm-256 0h192v128H160zm512 0h192v128H672z"
        />
        <path d="M160 192h192v32H160zm256 0h192v32H416zm256 0h192v32H672zM160 384h192v32H160zm256 0h192v32H416zm256 0h192v32H672zM160 576h192v32H160zm256 0h192v32H416zm256 0h192v32H672zM160 768h192v32H160zm512 0h192v32H672zM64 96h896v32H64z" />
        <path
            fill="#EF4D4D"
            d="M1024 64a32 32 0 0 1-32 32H32A32 32 0 0 1 0 64V32A32 32 0 0 1 32 0h960a32 32 0 0 1 32 32v32z"
        />
        <path
            fill="#3AAD73"
            d="M238.24 1024A126.656 126.656 0 0 0 256 960a128 128 0 0 0-256 0c0 23.424 6.752 45.088 17.76 64h220.48zM896 832a127.744 127.744 0 0 0-116.224 75.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32h360.384A126.944 126.944 0 0 0 1024 960a128 128 0 0 0-128-128z"
        />
        <path d="M779.776 907.04A94.848 94.848 0 0 0 736 896a96 96 0 0 0-96 96c0 11.296 2.304 21.952 5.888 32H785.76A126.656 126.656 0 0 1 768 960c0-18.944 4.384-36.768 11.776-52.96z" />
    </svg>
)
export default OrgSvg
