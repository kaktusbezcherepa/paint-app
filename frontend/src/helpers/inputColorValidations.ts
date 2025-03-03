interface ValidationResult {
    isValid: boolean;
    message?: string;
    formattedColor?: string;
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

const validateHexColor = (colorHex: string): ValidationResult => {
    try {
        if (!colorHex || colorHex.trim() === "") {
            return {
                isValid: false,
                message: "Цвет не может быть пустым.",
            };
        }
        const hexPattern = /^#?[0-9A-Fa-f]+$/;
        if (!hexPattern.test(colorHex.replace("#", ""))) {
            return {
                isValid: false,
                message: "HEX-код содержит недопустимые символы. Используйте только 0-9 и A-F.",
            };
        }
        const formattedColor = formatColorInput(colorHex);
        if (formattedColor.length !== 7) {
            return {
                isValid: false,
                message: "Ошибка форматирования цвета.",
            };
        }
        return {
            isValid: true,
            formattedColor,
        };
    } catch (error) {
        return {
            isValid: false,
            message: error instanceof Error ? error.message : "Ошибка валидации цвета.",
        };
    }
};

export default validateHexColor;