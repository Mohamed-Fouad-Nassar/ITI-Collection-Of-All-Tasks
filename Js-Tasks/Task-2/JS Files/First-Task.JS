var dt = new Date();
switch (dt.getDay()) {
    case 0:
        console.log("Sunday - الاحد");
        document.write("<h1 class = 'sty'> Sunday - الاحد </h1>");
        break;
    case 1:
        console.log("Monday - الاتنين");
        document.write("<h1 class = 'sty'> Monday - الاتنين </h1>");
        break;
    case 2:
        console.log("Tuseday - الثلاثاء");
        document.write("<h1 class = 'sty'> Tuseday - الثلاثاء <h1>");
        break;
    case 3:
        console.log("Wendesday - الاربعاء");
        document.write("<h1 class = 'sty'> Wendesday - الاربعاء </h1>");
        break;
    case 4:
        console.log("Thursday - الخميس");
        document.write("<h1 class = 'sty'> Thursday - الخميس </h1>");
        break;
    case 5:
        console.log("Friday - الجمعه");
        document.write("<h1 class = 'sty'> Friday - الجمعه </h1>");
        break;
    case 6:
        console.log("Saterday - السبت");
        document.write("<h1 class = 'sty'> Saterday - السبت </h1>");
        break;
    default:
        console.log("Invalid Data");
        document.write("<h1 class = 'sty'> Invalid Data </h1>");
}