export const Increment = (nbr) => {
    return {
        type:"INCREMENT",
        payload:nbr
    }
}

export const Decrement = (nbr) => {
    return {
        type:"DECREMENT",
        payload:nbr
    }
}
