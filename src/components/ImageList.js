import './ImageList.css'
import ImageShow from "./ImageShow";
function ImageList({images}){
    const renderedImages = images.map((image) => {
        return <ImageShow key = {image.id} image = {image} /> //take each element, turn it into another form.

    })  

    return <div className='image-list'>{renderedImages}</div>
}


export default ImageList;