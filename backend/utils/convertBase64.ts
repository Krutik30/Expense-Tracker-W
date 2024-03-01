export function fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1]; // Extract base64 string from data URL
            resolve(base64String);
        };

        reader.onerror = () => {
            reject(reader.error);
        };

        reader.readAsDataURL(file);
    });
}

export function getBase64(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}