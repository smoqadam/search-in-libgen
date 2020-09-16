let libgenUrl = 'http://libgen.rs/search.php?req={{TITLE}}&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def';

function createURL(title) {
    title = title.replaceAll(' ', '+');
    title = title.replace('…', '');
    title = title.trim()
    url = libgenUrl.replace("{{TITLE}}", title)
    return encodeURI(url);
}

function addDownloadLink(bookElem) {
    if (bookElem == null) {
        return;
    }
    let bookTitle = bookElem.innerText;
    let link = document.createElement('a');
    link.href =  createURL(bookTitle)
    link.innerHTML = "<img src=\""+chrome.extension.getURL("assets")+"/icons/dl.png\" />"
    bookElem.appendChild(link)
}

let selectors = [
    "h1#bookTitle",
    "div.gr-book__title",
    "div.bookTitle",
    "a.bookTitle",
];

for (selector of selectors) {
    let books = document.querySelectorAll(selector)
    for(book of books) {
        console.log({book})
        addDownloadLink(book)
    }
}