var rowsData = $("td.KeyField").map(function(index, cell) {
    var actionText = $(cell).next("td").text().trim();
    return {
        row_index: index + 1,
        date: $(cell).text().trim(),
        action: actionText
    };
}).get();

console.log(rowsData);
