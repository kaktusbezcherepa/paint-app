export type ValidationType = "number" | "hexColor";

export interface ValidationResult<T> {
  isValid: boolean;
  message?: string;
  formattedValue?: T;
}

const expandShortHex = (colorHex: string): string => {
  const color = colorHex.replace("#", "");
  if (color.length === 3) {
    return `#${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
  }
  return `#${color}`;
};

const formatColorInput = (colorHex: string): string => {
  let color = colorHex.trim().toUpperCase();
  if (!color.startsWith("#")) {
    color = `#${color}`;
  }
  const colorWithoutHash = color.replace("#", "");
  if (colorWithoutHash.length === 3) {
    return expandShortHex(color);
  }
  if (colorWithoutHash.length !== 6) {
    throw new Error("Неправильная длина HEX-кода. Допустимые форматы: #FFF или #FFFFFF.");
  }
  return color;
};

export const validateInput = (
  value: string,
  validationType: ValidationType,
  min?: number,
  max?: number
): ValidationResult<number | string> => {
  // Если значение пустое, возвращаем ошибку
  if (value.trim() === "") {
    return {
      isValid: false,
      message: "Значение не может быть пустым.",
    };
  }

  switch (validationType) {
    case "number": {
      const numValue = parseInt(value, 10);
      if (isNaN(numValue)) {
        return {
          isValid: false,
          message: "Значение должно быть числом.",
        };
      }
      if (min !== undefined && max !== undefined) {
        const clampedValue = Math.min(Math.max(numValue, min), max);
        return {
          isValid: true,
          formattedValue: clampedValue,
        };
      }
      return {
        isValid: true,
        formattedValue: numValue,
      };
    }

    case "hexColor": {
      const hexPattern = /^#?[0-9A-Fa-f]*$/; // Изменили паттерн, чтобы разрешить пустую строку после #
      const colorWithoutHash = value.replace("#", "");

      // Проверяем, что введены только допустимые символы
      if (!hexPattern.test(value.replace("#", ""))) {
        return {
          isValid: false,
          message: "HEX-код содержит недопустимые символы. Используйте только 0-9 и A-F.",
        };
      }

      // Если длина меньше 3 или больше 6 (и не равно 6), это промежуточное состояние
      // Разрешаем пользователю продолжать ввод, но не валидируем
      if (
        colorWithoutHash.length < 3 ||
        (colorWithoutHash.length > 3 && colorWithoutHash.length < 6) ||
        colorWithoutHash.length > 6
      ) {
        return {
          isValid: false,
          message: "Продолжайте ввод. Допустимые форматы: #FFF или #FFFFFF.",
        };
      }

      try {
        const formattedColor = formatColorInput(value);
        return {
          isValid: true,
          formattedValue: formattedColor,
        };
      } catch (error) {
        return {
          isValid: false,
          message: error instanceof Error ? error.message : "Ошибка валидации цвета.",
        };
      }
    }

    default:
      return {
        isValid: false,
        message: "Неизвестный тип валидации.",
      };
  }
};