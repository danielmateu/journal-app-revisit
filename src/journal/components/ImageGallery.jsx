
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 2, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const ImageGallery = ({ images }) => {
    // console.log(images);
    return (
        <ImageList
            sx={{ width: '100%', height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {images.map((image) => (
                <ImageListItem key={image}
                    // cols={item.cols || 1} rows={item.rows || 1}
                    >
                    <img
                        src={`${image}?w=160&h=160&fit=crop&auto=format`}
                        srcSet={`${image}?w=160&h=160&fit=crop&auto=format&dpr=2 2x`}
                        // {...srcset(image.img, 121, image.rows, image.cols)}  
                        alt='image Note'
                        loading="lazy"
                        className='animate__animated animate__fadeIn animate__faster'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


