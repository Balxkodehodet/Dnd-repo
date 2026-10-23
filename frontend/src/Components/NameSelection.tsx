import { useNavigate, Link } from "react-router-dom";
import x from '../assets/close.png'

export default function NameSelection({ nameId, stage }: { nameId: string | undefined, stage: number }) {

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
            {nameId && <>{stage === 0 && <><Link to={`/home/create-character/`}><img className="x-gender" src={x} /></Link></>}<div className="nameCard"><h2>Chosen Name: </h2><p>{nameId}</p></div></>}
        </>
    )
}