export default function Dices(nrOfDices:number, nrSideDices:number) {

        let diceArray = [];
        for (let i = 0; i < nrOfDices; i++)
        {
            const diceThrow = Math.floor(Math.random() * nrSideDices) + 1
            diceArray.push(diceThrow)
        }

        return diceArray
    }