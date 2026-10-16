import { useNavigate } from "react-router-dom";

export default function NameSelection({nameId, stage}:{nameId: string | undefined, stage: number}) {

    const navigate = useNavigate();

        


    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const newForm = new FormData(event.currentTarget);
        const formName = newForm.get("name") as string;
        navigate(`/home/create-character/${formName}`);
    }
    return (
        <>
            {!nameId &&
                <form onSubmit={handleSubmit}>
                    <label>Enter your name here:</label>
                    <input name="name" type="text"></input>
                    <button type="submit">Choose name</button>
                </form>}
            {nameId && <h2>{nameId}</h2>}
        </>
    )
}