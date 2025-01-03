export const generateRandomColor = () => {
    let red, green, blue;

    do {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
    } while (red === 255 && green === 255 && blue === 255); 

    return `rgb(${red}, ${green}, ${blue})`;
}
   