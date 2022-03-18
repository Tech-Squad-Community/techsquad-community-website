window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector('body').classList.add('loaded');
    }, 300);
});

let animatedCount = document.getElementsByClassName("counter");

const animatedCounter = () => {
    for (i = 0; i < animatedCount.length; i++) {
            let count = parseInt(animatedCount[i].innerText);
            let finalCount = animatedCount[i].getAttribute('final-count'); 
            if(count < finalCount){
                    animatedCount[i].innerText = count + 1;
            }else{
                    animatedCount[i].innerText = finalCount;
            }           
        }
    var x=setTimeout(animatedCounter,90);   
}
window.addEventListener("load", animatedCounter);