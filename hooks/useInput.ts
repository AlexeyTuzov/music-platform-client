import { ChangeEvent, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clear = () => {
        setValue('');
    }

    return {
        value,
        onChange,
        clear
    }
}

export default useInput;