import { Button } from '@material-ui/core';

const Demo = () => {
	const handler = () => {
		console.log('button click!');
	};

	return <Button onClick={handler}>ButtonText</Button>;
};

export default Demo;
