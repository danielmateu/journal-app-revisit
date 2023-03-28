import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'daniel-mateu-pardo',
    api_key: '689677211246833',
    api_secret: 'uFjZnQeWP7HuEfSv1cxaQqoiZ50',
    secure: true
})

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
        // console.log(url);
        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');
        // console.log(imageId);
        const cloudResponse = await cloudinary.api.delete_resources(['journal-app/' + imageId], {
            resource_type: 'image'
        });

        // console.log(cloudResponse);
        


    })

    test('Debe retornar un null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })



})