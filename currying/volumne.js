const calculateRectangularVolume = (length) => {
    return (width) => {
        return (height) => {
            return length * width * height;
        }
    }
};
const length = 10;
const width = 20;
const height = 30;
const result = calculateRectangularVolume(length)(width)(height);
console.log(result);