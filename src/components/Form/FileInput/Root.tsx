"use client";

import {
	ComponentProps,
	createContext,
	useContext,
	useId,
	useState,
} from "react";

export interface IRootProps extends ComponentProps<"div"> {}

type FileInputContextType = {
	id: string;
	files: File[];
	onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: IRootProps) {
	const id = useId();

	//File é uma interface do TS.
	const [files, setFiles] = useState<File[]>([]);

	function onFilesSelected(files: File[], multiple: boolean) {
		if (multiple) {
			setFiles((state) => [...state, ...files]);
		} else {
			setFiles(files);
		}
	}

	return (
		<FileInputContext.Provider value={{ id, files, onFilesSelected }}>
			<div {...props} />
		</FileInputContext.Provider>
	);
}

export const useFileInput = () => useContext(FileInputContext);
