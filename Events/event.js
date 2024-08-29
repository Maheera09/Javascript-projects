// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// } provides less features, hence not a recommended aproach 

document.getElementById('owl').addEventListener('click', function(e){
    console.log(e)
    console.log(e.timeStamp)
}, false)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('Clicked inside the ul');
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('Clicked inside the owl');
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click',function(e){
//         e.preventDefault();
//         e.stopPropagation()
//         console.log("google clicked");
//     }, false)


    // document.querySelector('#images').addEventListener('click', function(e){
    // console.log(e.target.parentNode)
    // console.log(e.target.tagName)
    // if (e.target.tagName == 'IMG') {
    // let removeIt = e.target.parentNode
    // console.log(e.target.id);
    //     removeIt.remove()
    // }
    // }, false)