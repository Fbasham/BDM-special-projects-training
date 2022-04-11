const header = document.querySelector('header')
const main = document.querySelector('main')
const submitBtn = document.querySelector('[type=submit]')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const questionInput = document.querySelector('#question')
const cover = document.querySelector('.cover')
const receipt = document.querySelector('.receipt')
const closeBtn = document.querySelector('.close')


submitBtn.addEventListener('click', e=>{
    e.preventDefault()
    let name = nameInput.value,
        email = emailInput.value,
        question = questionInput.value
        
    if ([name,email,question].some(e=>/^$/.test(e.trim()))){
        return
    }

    receipt.innerHTML = `
        <div class="receipt">
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Question: ${question}</p>
        </div>
    `
    cover.classList.toggle('hide')
    main.style.opacity = .2
    closeBtn.focus()

    recursiveSetTabIndex(header,-1)
    recursiveSetTabIndex(main,-1)
})

closeBtn.addEventListener('click', e=>{
    receipt.innerHTML = ''
    cover.classList.toggle('hide')
    main.style.opacity = 1
    nameInput.value = ''
    emailInput.value = ''
    questionInput.value = ''

    recursiveSetTabIndex(header,0,true)
    recursiveSetTabIndex(main,0,true)
})

function recursiveSetTabIndex(elem,n,remove=false){
    if (remove) elem.removeAttribute('tabindex')
    else elem.tabIndex = n
    if (elem.children.length) [...elem.children].forEach(e=>recursiveSetTabIndex(e,n,remove))
}