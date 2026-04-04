var rowsData = $("td.KeyField").slice(0, 6).map(function(index, cell) {
    var $cell = $(cell);
    var keyText = $cell.text().trim();          // Label from the KeyField
    var valueText = $cell.next("td").text().trim(); // Value from the next TD
    return {
        row_index: index + 1,
        [keyText.replace(/[:]/g, "")]: valueText,
        selector: "td.KeyField",
        jspath: `document.querySelectorAll('td.KeyField')[${index}]`,
        xpath: `//td[@class='KeyField'][${index + 1}]`,
        full_xpath: $cell[0] ? getFullXPath($cell[0]) : ""
    };
}).get();

console.log(rowsData);

// Helper to get full XPath
function getFullXPath(element) {
    if (element.id) return `id("${element.id}")`;
    if (element === document.body) return "/html[1]/body[1]";
    var ix = 0;
    var siblings = element.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        if (sibling === element) {
            return getFullXPath(element.parentNode) + "/" + element.tagName.toLowerCase() + `[${ix + 1}]`;
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
    }
}
