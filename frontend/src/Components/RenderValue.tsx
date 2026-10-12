// A recursive function to read nested values inside arrays where another array with objects 
// can appear inside a array
export default function RenderValue(value:unknown ): React.ReactNode{
            if (typeof value === "string" || typeof value === "number")
            {
                return value;
            }

            if (Array.isArray(value))
            {
                value.map((val, index) => {
                    return (
                        <div key={index}>
                            {RenderValue(val)}
                        </div>
                    )    
                })
            }
            if (typeof value === "object" && value !== null)
            {   
                return (
                    Object.entries(value).map(([key, val]) => {
                        return (
                            <div key={key}>
                                <strong>{key.replace(/([a-z])([A-Z])/g, "$1 $2")
                                        .replace(/([a-zA-Z])(\d)/g, "$1 $2")
                                        .replace(/(\d)([a-zA-Z])/g, "$1 $2")}</strong>: {RenderValue(val)}
                            </div>
                        )
                    })
                )
            }
        return null;
    }