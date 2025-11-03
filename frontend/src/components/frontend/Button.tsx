interface ButtonProps {
    label: string,
    onClick?: () => void,
    className?: string,
    size?: 'small' | 'standard' | 'large',
    color?: "orange" | "blue" | "red" | "green";
}

export default function Button(
    { label,
        onClick,
        className,
        size = "standard",
        color = "orange",

    }: ButtonProps) {
    const sizeButton = {
        small: "px-2 py-1 text-sm",
        standard: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    }

    const colorButton = {
        orange: "bg-orange-500 hover:bg-orange-600",
        blue: "bg-blue-500 hover:bg-blue-600",
        red: "bg-red-500 hover:bg-red-600",
        green: "bg-green-500 hover:bg-green-600",
    };

    return (
        <button onClick={onClick} className={`text-white rounded-lg focus:none transition duration-200 ease-in-out cursor-pointer ${colorButton[color]} ${className} ${sizeButton[size]}`}>
            {label}
        </button>
    );
}