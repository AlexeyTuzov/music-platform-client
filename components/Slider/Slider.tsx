import { Grid, Slider } from '@material-ui/core';
import { ChangeEvent, FC, useState } from 'react';
import styles from './styles/Slider.module.scss';

interface SliderElementProps {
	left: number;
	right: number;
	onChange: () => void;
}

const SliderElement: FC<SliderElementProps> = (props) => {
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
