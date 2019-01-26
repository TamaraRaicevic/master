// function getTag() {
//     const tag = document.getElementById("tag").value;
//
//     if (tag === '<h1>' || tag === 'h1') {
//         document.getElementById("result").innerHTML = "London";
//     } else if (tag === '<p1>'|| tag==='p1') {
//         document.getElementById("result").innerHTML = "London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants";
//     } else if (tag === '<p2>' || tag ==='p2') {
//         var p = document.getElementsByTagName("<p>")
//         document.getElementById("result").innerHTML = p;
//     } else {
//         document.getElementById("result").innerText = "no text for that tag";
//     }// }

const htmlString = "<article><h1>London</h1><p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p><p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p></article>";
let newHtmlString = "";
function getTag1(htmlString, htmlTag) {

        if (htmlTag === "<h1>" || htmlTag === "h1") {
            newHtmlString = htmlString.split("<h1>")[1];
            console.log(newHtmlString.split("</h1>")[0]);

        } else if (htmlTag === "<p>" || htmlTag === "p") {
            newHtmlString = htmlString.split("<p>")[1];
            console.log(newHtmlString.split("</article>")[0]);
            console.log(newHtmlString);

        } else if (htmlTag === "<article>" || htmlTag === "article") {
            newHtmlString = htmlString;
            console.log(newHtmlString);

        } else {
            console.log("No text wraped in that tag");

        }

}

// function htmlShow(htmlString, htmlTag) {
//
//
//             newHtmlString.split("<h1>")[1].toString();
//                         console.log(newHtmlString);
//
//
//
// }

// console.log(getTag(htmlString,"article"));


console.log(getTag1(htmlString, "<article>"));
// console.log(getTag2(htmlString, "<h2>"));
