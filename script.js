let libgenUrl = 'http://libgen.rs/search.php?req={{TITLE}}&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def';

function createURL(title) {
    title = title.replaceAll(' ', '+');
    title = title.replaceAll(/\(.*\)/g, '')
    title = title.replace('…', '');
    title = title.trim()
    let url = libgenUrl.replace("{{TITLE}}", title)
    return encodeURI(url);
}

function addDownloadLink(bookElem) {
    if (bookElem == null) {
        return;
    }
    let bookTitle = bookElem.innerText;
    let link = document.createElement('a');
    link.href =  createURL(bookTitle)
    link.innerHTML = "<img src=\""+chrome.extension.getURL("icons")+"/download-button.png\" style='width: 18px' />"
    bookElem.appendChild(link)
}

let selectors = [
    "h1#bookTitle",
    "div.gr-book__title",
    "div.bookTitle",
    "a.bookTitle",
];

for (let selector of selectors) {
    let books = document.querySelectorAll(selector)
    for(let book of books) {
        addDownloadLink(book)
    }
}