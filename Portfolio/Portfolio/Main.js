function Scroll(targ) {
    // var one = document.getElementById("one");
    // var two = document.getElementById("two");
    // var three = document.getElementById("three");
    // var four = document.getElementById("four");

    // switch (target.id) {
    //     case "sec-1": one.scrollIntoView({ behavior: "smooth" });
    //         break;
    //     case "sec-2": two.scrollIntoView({ behavior: "smooth" });
    //         break;
    //     case "sec-3": three.scrollIntoView({ behavior: "smooth" });
    //         break;
    //     case "sec-4": four.scrollIntoView({ behavior: "smooth" });
    // }

    var element = document.getElementById(targ.attributes.target.nodeValue);
    element.scrollIntoView({ behavior: "smooth" });

}