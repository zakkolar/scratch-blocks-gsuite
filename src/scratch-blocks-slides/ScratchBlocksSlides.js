function insertImage(img,text) {
    var blob = getBlobFromString(img);
    var presentation = SlidesApp.getActivePresentation();

    var selection = presentation.getSelection();

    var slide;

    if(selection!== null && selection.getCurrentPage()!==null) {
        slide = selection.getCurrentPage();

    }
    else{
        slide = presentation.appendSlide();
    }

    var image = slide.insertImage(blob);
    image.setDescription(text);

}

function getUi(){
    return SlidesApp.getUi();
}