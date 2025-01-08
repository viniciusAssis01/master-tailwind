"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface ISelectProps extends SelectPrimitive.SelectProps {
	children: ReactNode;
	placeholder: string;
}

export function Select({ children, placeholder, ...props }: ISelectProps) {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400">
				<SelectPrimitive.Value
					placeholder={placeholder}
					className="text-black"
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					side="bottom"
					position="popper"
					sideOffset={8} //em px
					className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden shadow-sm animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700"
				>
					<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
}
