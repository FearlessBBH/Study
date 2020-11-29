export default val => {
    return '￥' + (val / 100).toFixed(2);
}