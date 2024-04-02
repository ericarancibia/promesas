const request = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const results = await fetch(url);
        const response = await results.json();
        response.forEach(element => {
            if(element.id <= 20){
                console.log(element.title);
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const message = async () => new Promise ((resolve) => {
    setTimeout(() => {
        resolve("Información Enviada");
    }, 3000)
})

const messageReceived= async (message) => {
    const timeAlbum = await message();
    console.log(timeAlbum);
}

request();
messageReceived(message);