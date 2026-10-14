// A recursive function to read nested values inside arrays where another array with objects 
// can appear inside a array
// *Only renders Arrays
import { isValidElement } from "react";
export default function RenderValueAll(value: unknown): React.ReactNode {

    // Hvis value allerede ER et React-element:
    if (isValidElement(value)) {
        return null;
    }
    if (typeof value === "string" || typeof value === "number") {
        return value;
    }

    if (Array.isArray(value)) {
        value.map((val, index) => {
            return (
                <div key={index}>
                    {RenderValueAll(val)}
                </div>
            )
        })
    }
    return null;
}