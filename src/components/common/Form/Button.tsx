import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "danger";
	size?: "sm" | "md" | "lg";
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	loading?: boolean;
	fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "primary",
			size = "md",
			icon,
			iconPosition = "left",
			loading = false,
			fullWidth = false,
			className = "",
			disabled,
			children,
			...props
		},
		ref
	) => {
		const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:ring-1 focus:ring-primary/40";

		const variantStyles = {
			primary: "bg-primary hover:bg-tertiary text-white shadow-md hover:shadow-lg",
			secondary: "bg-secondary hover:bg-quaternary text-white shadow-md hover:shadow-lg",
			tertiary: "bg-tertiary hover:bg-primary text-white shadow-md hover:shadow-lg",
			outline: "border-2 border-gray-300 text-gray-600 hover:bg-gray-50",
			ghost: "text-primary hover:bg-gray-100",
			danger: "bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg"
		};

		const sizeStyles = {
			sm: "px-3 py-1.5 text-sm",
			md: "px-4 py-2.5 text-base",
			lg: "px-6 py-3 text-lg"
		};

		const widthStyles = fullWidth ? "w-full" : "";

		return (
			<button
				ref={ref}
				disabled={disabled || loading}
				className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
				{...props}
			>
				{loading && (
					<svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
					</svg>
				)}

				{icon && iconPosition === "left" && !loading && icon}

				{children}

				{icon && iconPosition === "right" && !loading && icon}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;