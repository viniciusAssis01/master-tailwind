import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
	return (
		<div className="grid items-center gap-3 grid-cols-profile">
			<img
				className="w-10 h-10 rounded-full"
				src="https://github.com/viniciusAssis01.png"
				alt=""
			/>

			<div className="truncate flex flex-1 flex-col">
				<span className="text-sm font-semibold text-zinc-700">
					Vinicius Assis
				</span>
				<span className="truncate text-sm text-zinc-500">
					vinicius@cripto.io
				</span>
			</div>

			<Button type="button" variant="ghost">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</Button>
		</div>
	);
}
