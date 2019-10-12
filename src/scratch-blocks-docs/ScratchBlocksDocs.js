function createMenu(){
    DocumentApp.getUi().createAddonMenu()
        .addItem("Show Generator", "showSidebar")
        .addToUi();

    DocumentApp.getUi().createMenu("Scratch Blocks Docs")
        .addItem("Show Generator", "showSidebar")
        .addToUi();
}

function showSidebar() {
    var ui = HtmlService.createTemplateFromFile('Sidebar').evaluate()
        .setTitle('Scratch Blocks Generator');
    DocumentApp.getUi().showSidebar(ui);
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


function getButtonText(){
    return "Add Blocks to Document";
}