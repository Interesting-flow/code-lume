export const debounce = () => {
    let timer = null;
    return function (fn, wait) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
            timer = null;   
        }, wait)
    };
}
export const debounceChange = debounce()
// export const debounce = (fn, delay) => {
//     let timer = null;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//             // console.log('执行操作');
//             timer = null;
//         }, delay);
//     }
// }

// let timer = null;
// export const debounce = (fn, wait) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//         fn();
//         timer = null;
//     }, wait)
// }