function getUi(){
    return DocumentApp.getUi();
}



function insertImage(img, text) {
    var blob = getBlobFromString(img);
    var cursor = DocumentApp.getActiveDocument().getCursor();
    var image;
    if (cursor) {
        image = cursor.insertInlineImage(blob);
    }
    else {
        image = DocumentApp.getActiveDocument().getBody().appendImage(blob);
    }
    image.setAltDescription(text);
}