export const useHeight = (ele: HTMLElement, show: boolean) => {
    let height = 0;
    if (show) {
        ele.style.transition = 'none';
        ele.style.height = 'auto';
        height = ele.offsetHeight;
        ele.style.height = '0px';
        ele.offsetHeight;//强制回流、强制计算高度
        ele.style.transition = '.4s';
        ele.style.height = height + 'px';
    } else {
        ele.style.transition = '.4s';
        ele.style.height = '0px';
    }
};
