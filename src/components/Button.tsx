import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
	base: [
		"rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
		"focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
		"active:opacity-80",
	],
	variants: {
		variant: {
			primary: "bg-violet-600 text-white hover:bg-violet-700",
			outline: "text-zinc-700 border border-zinc-300 hover:bg-zinc-50",
			ghost: "rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export interface IButtonProps
	extends ComponentProps<"button">,
		VariantProps<typeof button> {}

export function Button({ variant, className, ...props }: IButtonProps) {
	return (
		<button className={button({ variant: variant, className })} {...props} />
	);
}
