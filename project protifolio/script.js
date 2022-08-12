console.log('this is my website');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hangbar').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('Gosidebar');
    if(document.querySelector('.sidebar').classList.contains('Gosidebar')
    ){
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.hang').style.display = 'inline';
    }
    else{
         
           document.querySelector('.hang').style.display = 'none';
            document.querySelector('.cross').style.display = 'inline';
    }
})

