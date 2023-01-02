import { ChangeEvent, FC } from 'react';
import styles from './styles/Slider.module.scss';

interface SliderElementProps {
	current: number;
	max: number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	display?: string;
}

const SliderElement: FC<SliderElementProps> = (props) => {
	return (
		<div className={styles.div}>
			<input
				type="range"
				min={0}
				max={props.max}
				value={props.current}
				onChange={props.onChange}
			/>
			<span className={styles.span}>{props.display}</span>
		</div>
	);
};

export default SliderElement;
