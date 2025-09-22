const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    let i = 0;
    while (i < size) {
        let row = "";
        let j = 0;
        while (j < size) {
            row += "X";
            j++;
        }
        console.log(row);
        i++;
    }
}
