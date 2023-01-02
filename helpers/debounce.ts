const debounce = (callback: Function, timeout: number = 2000): Function => {
    let timer: any;
    return (...args: any[]) => {
        console.log('timer before:', timer);
        clearTimeout(timer);
        console.log('timer after:', timer);console.log('this:', this);
        timer = setTimeout(() => callback(...args), timeout);
    }
}

export default debounce;