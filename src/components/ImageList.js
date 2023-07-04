import ImageShow from "./ImageShow";
function ImageList({images}){
    const renderedImages = images.map((image) => {
        return <ImageShow image = {image} /> //take each element, turn it into another form.
        
    })  

    return <div>{renderedImages}</div>
}


export default ImageList;