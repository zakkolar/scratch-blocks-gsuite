
function getMaxImageSize() {
    return 10;
}
function getDefaultImageSize() {
    return 5;
}

function include(File) {
    return HtmlService.createTemplateFromFile(File).evaluate().getContent();
}

function getBlobFromString(img) {
    img = img.replace("data:image/png;base64,", "");
    var decoded = Utilities.base64Decode(img);
    var blob = Utilities.newBlob(decoded, MimeType.PNG);
    return blob;
}

function onOpen(e) {
    createMenu();

}

function onInstall(e){
    onOpen(e);
}

function getButtonText(){
    return "Insert Blocks";
}