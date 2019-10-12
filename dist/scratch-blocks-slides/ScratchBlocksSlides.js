function createMenu() {
    SlidesApp.getUi().createAddonMenu()
        .addItem("Show Generator", "showSidebar")
        .addToUi();

    SlidesApp.getUi().createMenu("Scratch Blocks Slides")
        .addItem("Show Generator", "showSidebar")
        .addToUi();

}
function showSidebar() {
    var ui = HtmlService.createTemplateFromFile('Sidebar').evaluate()
        .setTitle('Scratch Blocks Generator');
    SlidesApp.getUi().showSidebar(ui);
}

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