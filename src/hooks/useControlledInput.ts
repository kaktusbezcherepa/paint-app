import handleInput from "../helpers/handleInput"
import React, { useCallback, useEffect, useState } from "react"

type UseControlledInputType = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const useControlledInput = (
    initialValue : string,
    onValueChange: (value: number) => void,
    min : number,
    max : number
): UseControlledInputType => {
    
    
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(e.target.value, setValue, onValueChange, min, max)
    }, [onValueChange, min, max])

    return { value, onChange }
}

export default useControlledInput