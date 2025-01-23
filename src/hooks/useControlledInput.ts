import handleInput from "../helpers/handleInput"
import React, { useCallback, useEffect, useState } from "react"

type UseControlledInputType = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const useControlledInput = (
    initialValue : string,
    onValueChange: (value: number) => void
): UseControlledInputType => {
    
    
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(e.target.value, setValue, onValueChange)
    }, [onValueChange])

    return { value, onChange }
}

export default useControlledInput