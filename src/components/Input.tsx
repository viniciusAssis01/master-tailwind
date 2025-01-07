import { ComponentProps } from "react";

interface IInputPrefixProps extends ComponentProps<"div"> {}
export function Prefix(props: IInputPrefixProps) {
	return <div {...props}></div>;
}

interface IInputControlProps extends ComponentProps<"input"> {}
export function Control(props: IInputControlProps) {
	return (
		<input
			className="flex-1 text-base border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
			{...props}
		/>
	);
}

interface IInputRootProps extends ComponentProps<"div"> {}
export function Root(props: IInputRootProps) {
	return (
		<div
			className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100"
			{...props}
		></div>
	);
}
