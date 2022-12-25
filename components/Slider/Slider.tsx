import { Grid, Slider } from '@material-ui/core';
import { ChangeEvent, FC, useState } from 'react';
import styles from './styles/Slider.module.scss';

interface SliderElementProps {
	left: number;
	right: number;
	onChange: () => void;
}

const SliderElement: FC<SliderElementProps> = (props) => {
	/*
    const [value, setValue] = useState<number>(30);

    const onChange = (e: ChangeEvent<any>, newValue: number | number[]) => {
        setValue(newValue as number);
        console.log('state value:', value);
        console.log('slider value:',e.target);
    }
    */

	return (
		<div>
			<input
				type="range"
				min={props.left}
				max={props.right}
				value={props.left}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default SliderElement;
