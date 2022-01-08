let chbox = document.createElement('input')
let delbt = document.createElement('button')
let label = document.createElement('label')
let li = document.createElement('li')

// body = document.querySelector('div')
// to = document.querySelector('h1')
// test = document.getElementById('test')
let add = document.getElementsByClassName('add-task')[0]
add.addEventListener('submit', (e)=>{
    e.preventDefault()
    // getting input 
    let to = document.getElementById('inp').value
    console.log(to);
    // getting incomplete task list 
    let ul = document.getElementById('list')
    console.log(ul)

    //getting complete task list
    let uul = document.getElementById('unlist')
    console.log(uul)

    let list = document.createElement('li')

    let lab = document.createElement('label')
        lab.innerHTML = to
    let chb = document.createElement('input')
        chb.type = 'checkbox'
        chb.className= 'box'
    let butn = document.createElement('button')
    butn.innerHTML='Delete'
    butn.className='delt'


    list.appendChild(lab)
    list.appendChild(chb)
    list.appendChild(butn)


    ul.appendChild(list)

 
    console.log(ul)
})


window.addEventListener("load", function(event) {
    let list = document.getElementById('comp')


    list.addEventListener('click', (e)=>{
        
        if (e.target.classList.contains('delt')){
            e.target.parentNode.remove()
        }

        let par = e.target.parentNode.parentNode

        if(par.id == 'list'){
            console.log(e.target);
            if (e.target.classList.contains('box')){

            if (e.target.checked){

                let inpp = e.target.parentNode
                let com = document.getElementById('unlist')
                com.appendChild(inpp)
            }
        }
    }

        else if(par.id == 'unlist')
        {
            if (e.target.classList.contains('box')){

                if(!e.target.checked){
                let incom = document.getElementById('list')
                let inpp = e.target.parentNode
                incom.appendChild(inpp)
                }
            }
        }
        
    })
  });
