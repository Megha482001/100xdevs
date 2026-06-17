

function blockEventLoop(ms){
    const start = Date.now();
    let count = 0;
    while(Date.now() - start < ms) {
        //console.log("megha");
        count++;
    }
    console.log(count);

}
blockEventLoop(10);
// this while loop is checking within 10ms how many "megha" my cpu can print