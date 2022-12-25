import { FC, ReactNode, useRef, ChangeEvent } from 'react';
import FileTypes from './enums/FileTypes';

interface FileUploaderProps {
	children: NonNullable<ReactNode>;
	fileType: FileTypes;
	setFile: (e: any) => void;
}

const FileUploader: FC<FileUploaderProps> = (props) => {
	const ref = useRef<HTMLInputElement>(null);

	const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			props.setFile(e.target.files[0]);
		}
	};

	return (
		<div onClick={() => ref.current?.click()}>
			<input
				type="file"
				accept={props.fileType}
				style={{ display: 'none' }}
				ref={ref}
				onChange={changeFile}
			/>
			{props.children}
		</div>
	);
};

export default FileUploader;
