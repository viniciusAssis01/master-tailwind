"use client";
import * as Select from "@radix-ui/react-select";
import { Check } from "lucide-react";

export interface ISelectItemProps extends Select.SelectItemProps {
	text: string;
}

export function SelectItem({ text, ...props }: ISelectItemProps) {
	return (
		<Select.Item
			className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
			{...props}
		>
			<Select.ItemText asChild className="text-black ">
				<span className="dark:text-zinc-100">{text}</span>
			</Select.ItemText>
			<Select.ItemIndicator>
				<Check className="h-4 w-4 to-violet-500 dark:text-violet-300" />
			</Select.ItemIndicator>
		</Select.Item>
	);
}
