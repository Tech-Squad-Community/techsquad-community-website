window.onload = function(){
var contributor, issues, pull_requests;

fetch("https://api.github.com/repos/Tech-Squad-Community/techsquad-community-website/contributors")
.then(response => response.json())
.then(data => {
    document.querySelector(".cont-value").innerHTML = data.length + "+";
});

fetch("https://api.github.com/repos/Tech-Squad-Community/techsquad-community-website/issues")
.then(response => response.json())
.then(data => {
    document.querySelector(".issue-value").innerHTML = data.length+"+";
});

fetch("https://api.github.com/repos/Tech-Squad-Community/techsquad-community-website/pulls?state=all")
.then(response => response.json())
.then(data => {
    document.querySelector(".branch-value").innerHTML = data[0].number+"+";
});

};