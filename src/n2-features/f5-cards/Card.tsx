import {CardType, deleteCardTC} from "./cards-reducer";
import {useDispatch} from "react-redux";


export const Card: React.FC<CardPropsType> = ({card}) => {
    const dispatch = useDispatch()
    return <>
        <div>question: {card.question}</div>
        <div>answer: {card.answer}</div>
        <div>type: {card.type ? card.type : 'no type'}</div>
        <button onClick={() => dispatch(deleteCardTC(card._id))} >DELETE</button>
    </>
}

//styled-components




//types
type CardPropsType = {
    card: CardType
}

