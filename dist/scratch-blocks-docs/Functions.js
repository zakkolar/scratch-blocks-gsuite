
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


function getText(type){
    var text = {
        "insert_blocks": "Insert blocks",
        "show_generator": "Show generator",
        "edit_blocks": "Edit blocks",
        "preview_blocks": "Preview blocks",
    };

    return text[type];
}

function showSidebar() {
    var ui = HtmlService.createTemplateFromFile('Sidebar').evaluate()
        .setTitle('Scratch blocks generator');
    getUi().showSidebar(ui);
}

function showInstructions(){
    var ui = HtmlService.createTemplateFromFile('Instructions')
        .evaluate()
        .setWidth(500);
   getUi().showModelessDialog(ui, "Scratch blocks instructions");
}


function showSyntax(){
    var ui = HtmlService.createTemplateFromFile('Syntax')
        .evaluate()
        .setWidth(625);
    getUi().showModelessDialog(ui, "Block syntax guide");
}

function createMenu(){
    var menus = [getUi().createAddonMenu(), getUi().createMenu("Scratch blocks")];

    for(var i=0; i<menus.length; i++){
        var menu = menus[i];
        menu.addItem(getText('show_generator'), "showSidebar")
            .addSeparator()
            .addItem("Block syntax guide", "showSyntax")
            .addItem("Instructions", "showInstructions")
            .addToUi();
    }

}