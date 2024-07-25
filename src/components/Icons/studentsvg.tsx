import * as React from "react"
import { SVGProps } from "react"
import {cn} from "@/lib/utils";

const StudentSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className={cn(
            "w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all ",

        )}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 64 64"
        {...props}
    >
        <defs>
            <style>
                {
                    ".cls-1{fill:#8065c4}.cls-1,.cls-2,.cls-3,.cls-8{stroke:#54596e}.cls-1,.cls-2,.cls-3,.cls-8,.cls-9{stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}.cls-2,.cls-9{fill:none}.cls-3{fill:#ffd578}.cls-5{fill:#54596e}.cls-8{fill:#fff}.cls-9{stroke:#61c5a8}.cls-10{fill:#ff927d}"
                }
            </style>
        </defs>
        <title>{"student-female"}</title>
        <g id="student-female">
            <path
                d="M47.26 49H17.74C12.91 49 9 52.35 9 56.49V63h46v-7.37C55 52 51.54 49 47.26 49Z"
                className="cls-1"
            />
            <path d="M16 59v3M48 59v3" className="cls-2" />
            <path
                d="M28 42h8v10a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V42h0Z"
                className="cls-3"
            />
            <path
                d="M46.7 16.82C46.2 10.24 40.41 7 32 7h0c-8.41 0-14.2 3.24-14.7 9.82L13 38.61A4.73 4.73 0 0 0 17.51 44h29A4.73 4.73 0 0 0 51 38.61Z"
                style={{
                    fill: "#fff35f",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    stroke: "#54596e",
                }}
            />
            <circle cx={46} cy={27} r={4} className="cls-3" />
            <circle cx={18} cy={27} r={4} className="cls-3" />
            <path
                d="M17 16h30v18a15 15 0 0 1-15 15h0a15 15 0 0 1-15-15V16h0Z"
                className="cls-3"
            />
            <circle cx={23.5} cy={27.5} r={1.5} className="cls-5" />
            <circle cx={40.5} cy={27.5} r={1.5} className="cls-5" />
            <path
                d="M31 39h2"
                style={{
                    strokeWidth: 4,
                    stroke: "#ff927d",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            />
            <path
                d="M28 38h8"
                style={{
                    stroke: "#ff927d",
                    fill: "none",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            />
            <path d="M32 63v-7" className="cls-2" />
            <path d="m28 57-5 2-1-10h6v8zM36 57l5 2 1-10h-6v8z" className="cls-8" />
            <path d="M17 7h30v15H17z" className="cls-1" />
            <path d="M32 1 6 7l26 6 26-6-26-6z" className="cls-1" />
            <path d="M54 18V8M56 21l-2-3-2 3" className="cls-9" />
            <circle cx={40} cy={35} r={1} className="cls-10" />
            <circle cx={23} cy={36} r={1} className="cls-10" />
            <circle cx={21} cy={34} r={1} className="cls-10" />
            <circle cx={25} cy={32} r={1} className="cls-10" />
            <circle cx={38} cy={32} r={1} className="cls-10" />
            <circle cx={42} cy={32} r={1} className="cls-10" />
        </g>
    </svg>
)
export default StudentSvg
