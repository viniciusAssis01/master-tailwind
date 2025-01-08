import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import {
	Bold,
	Italic,
	Link,
	List,
	ListOrdered,
	LogOut,
	Mail,
} from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { TextArea } from "@/components/Form/TextArea";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
				Settings
			</h1>
			<SettingsTabs />

			<div className="mt-6 flex flex-col ">
				<div className="flex flex-col justify-between gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-5 lg:flex-row lg:items-center  ">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
							Personal info
						</h2>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">
							Update your photo and personal details here.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">
							Cancel
						</Button>

						<Button type="submit" form="settings" variant="primary">
							Save
						</Button>
						{/* <button
							type="button"
							className="rounded-lg px-4 py-2 text-sm text-zinc-700 font-semibold shadow-sm border border-zinc-300 hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							form="settings"
							className="rounded-lg px-4 py-2 text-sm  font-semibold shadow-sm border bg-violet-600 text-white hover:bg-violet-700"
						>
							Save
						</button> */}
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
				>
					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
						<label
							htmlFor="FirstName"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Name
						</label>
						<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
							<Input.Root>
								<Input.Control id="firstName" defaultValue="Vinicius" />
							</Input.Root>

							<div className="flex flex-col gap-3 lg:block">
								<label
									htmlFor="lastName"
									className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
								>
									Last Name
								</label>
								<Input.Root>
									<Input.Control defaultValue="Assis" />
								</Input.Root>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Email Address
						</label>

						<Input.Root>
							<Input.Prefix>
								<Mail className="h5- w-5 text-zinc-500" />
							</Input.Prefix>
							<Input.Control
								id="email"
								type="email"
								defaultValue="vinlavin@cripto.io"
							/>
						</Input.Root>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Your photo
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex flex-col lg:flex-row lg:items-star gap-5 ">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="Role"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Role
						</label>

						<Input.Root>
							<Input.Control id="Role" defaultValue="Product Designer" />
						</Input.Root>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Country
						</label>

						<Select placeholder="Select a country...">
							<SelectItem text="Brazil" value="br" />
							<SelectItem text="United States" value="us" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Timezone
						</label>

						<Select placeholder="Select a timezone...">
							<SelectItem
								text="Pacific Standard Time (UTC-08:00)"
								value="utc8"
							/>
							<SelectItem text="America São Paulo (UTC-03:00)" value="utc3" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="bio"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Bio
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								Write a short introduction.
							</span>
						</label>

						<div className="space-y-3">
							<div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
								<Select placeholder="" defaultValue="normal">
									<SelectItem text="Normal Text" value="normal" />
									<SelectItem text="Markdown" value="md" />
								</Select>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<ListOrdered
											className="h-4 w-4 text-zinc-500"
											strokeWidth={3}
										/>
									</Button>
								</div>
							</div>

							<TextArea
								id="bio"
								defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Portfolio projects
							<span className="text-sm mt-0.5 font-normal text-zinc-500 block">
								Share a few snippets of your work.
							</span>
						</label>

						<FileInput.Root>
							<FileInput.Trigger />
							<FileInput.FileList />
							<FileInput.Control multiple />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-3 pt-4">
						<Button type="button" variant="outline">
							Cancel
						</Button>

						<Button type="submit" form="settings" variant="primary">
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
