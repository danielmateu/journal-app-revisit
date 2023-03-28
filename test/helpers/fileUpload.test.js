import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas sobre fileUpload', () => {

    // test('Debe subir el archivo correctamente a cloudinary', () => {
    //     const file = new File([], 'foto.jpg');
    //     fileUpload(file).then(url => {
    //         expect(typeof url).toBe('string');
    //     })
    // })

    test('Debe subir el archivo correctamente a cloudinary', async() => {
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');  
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
    })

})