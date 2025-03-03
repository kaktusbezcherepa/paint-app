import React, { useCallback, useEffect, useState, InputHTMLAttributes } from "react";
import { debounce } from "lodash";
import { validateInput, ValidationType } from "../helpers/validateInput";

interface UseControlledInputProps<T> {
  initialValue: string;
  onValueChange: (value: T) => void;
  validationType: ValidationType;
  min?: number;
  max?: number;
}

interface UseControlledInputReturn extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useControlledInput = <T extends number | string>(
  props: UseControlledInputProps<T>
): UseControlledInputReturn => {
  const { initialValue, onValueChange, validationType, min, max } = props;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Создаем debounced функцию внутри useEffect
  const [debouncedValidate, setDebouncedValidate] = useState<
    (newValue: string) => void
  >(() => () => {});

  useEffect(() => {
    const validate = (newValue: string) => {
      const validationResult = validateInput(newValue, validationType, min, max);

      if (validationResult.isValid && validationResult.formattedValue !== undefined) {
        onValueChange(validationResult.formattedValue as T);
        if (validationType === "number") {
          setValue(validationResult.formattedValue.toString());
        } else if (validationType === "hexColor") {
          setValue(validationResult.formattedValue as string);
        }
      }
    };

    const debounced = debounce(validate, 600);
    setDebouncedValidate(() => debounced);

    return () => {
      debounced.cancel();
    };
  }, [onValueChange, validationType, min, max]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedValidate(newValue);
    },
    [debouncedValidate]
  );

  return { value, onChange };
};

export default useControlledInput;