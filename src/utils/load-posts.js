export const getPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos', {method: 'GET'});

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
    return {...post, imagem: photosJson[index].url}
    })

    return postsAndPhotos;
}

