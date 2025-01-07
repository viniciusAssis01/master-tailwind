import { ComponentProps } from "react";

export interface ITextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: ITextAreaProps) {
	return (
		<textarea
			className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
			{...props}
		/>
	);
}
