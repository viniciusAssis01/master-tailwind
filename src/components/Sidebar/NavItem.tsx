import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface INavItemProps {
	title: string;
	icon: ElementType;
}

export function NavItem({ title, icon: Icon }: INavItemProps) {
	// receber icon mas renomeando para Icon pois os componentes no react sempre tem a inicial maiúscula
	return (
		<a
			href=""
			className=" group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-100 dark:hover:bg-zinc-800"
		>
			<Icon className="h-5 w-5 text-zinc-500" />
			<span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
				{title}
			</span>
			<ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
		</a>
	);
}
