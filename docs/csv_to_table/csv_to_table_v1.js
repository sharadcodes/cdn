var complete_table = "";
var thead = "";
var tbody = "";
const pattern = /\/[^\/]+csv$/

function getCSVTable(url, limit) {

    if (pattern.test(url) && isUrlValid(url)) {
        fetch(url)
            .then((resp) => resp.text())
            .then(function (csv) {

                // var table_data = "";
                var lines = csv.split("\n");
                var result = [];
                var headers = lines[0].split(",");

                // we get the table head and foot here
                headers.forEach(heading => {
                    thead += `<th>${heading}</th>`
                })
                complete_table += `<thead><tr> ${thead} </tr></thead>`;
                complete_table += `<tfoot><tr> ${thead} </tr></tfoot>`;
                // end

                for (var i = 1; i < lines.length; i++) {
                    if (i > limit) {
                        break;
                    }
                    var obj = {};
                    var currentline = lines[i].split(",");

                    tbody += "<tr>";

                    for (var j = 0; j < headers.length; j++) {
                        // obj[headers[j]] = currentline[j];
                        tbody += `<td>${currentline[j]}</td>`
                    }

                    tbody += "</tr>";
                    //result.push(obj);
                }
                complete_table += `<tbody> ${tbody} </tbody>`;
                document.getElementById("target_table").innerHTML = complete_table;
                //table_data = JSON.stringify(result);
                //console.log(table_data);
            })
        return complete_table;
    }
}

// check url
function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return false;
    else
        return true;
}
