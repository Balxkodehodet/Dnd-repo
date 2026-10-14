// A recursive function to read nested values inside arrays where another array with objects 
// can appear inside a array
import React from "react";
export default function RenderValueAll(value: unknown): React.ReactNode {

    // Hvis value allerede ER et React-element:
    if (React.isValidElement(value)) {
        return;
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
    if (typeof value === "object" && value !== null) {
        return (

            Object.entries(value).map(([key, val]) => {
                return (
                    <div key={key}>
                        <strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2")
                            .replace(/([a-zA-Z])(\d)/g, "$1 $2")
                            .replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: {RenderValueAll(val)}
                    </div>
                )
            })

        )
    }
    return null;
}