import { ChangeEvent, useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(value);
    }

    return {
        value,
        onChange
    }
}

export default useInput;