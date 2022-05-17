function moveSlides(){
    let memTexts = ['День получки','skills you are proud of',"because at heart I'm cat", 'when you got a pet', 'Russian IT development']
const pictureItem = document.querySelector(".picture"),
    imageText = document.querySelector(".image-text"),
    window = document.querySelector('.window-open'),
    navigation = document.querySelector(".navigation-points");
    let navItems = document.querySelectorAll(".custom-nav-item")
    let navLinkItems = document.querySelectorAll(".link-button-item")
let position = 0;


navigation.addEventListener('click', (e) => {
    navLinkItems.forEach((item)=> {
        item.classList.remove('checked')
    })
    e.target.classList.remove('checked')
    // console.log(e.target.classList)
    // console.log(e.target)
    if(e.target.id == 'link-0'){
       
        position = 0;
        imageText.textContent = `${memTexts[0]}`
        window.style = `transform:translateX(${position}px)`
    }else if(e.target.id == 'link-1'){
        position =-`${(pictureItem.getBoundingClientRect().width)}`;
        imageText.textContent = `${memTexts[1]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'link-2'){
        position =-`${(pictureItem.getBoundingClientRect().width)*2}`;
        imageText.textContent = `${memTexts[2]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'link-3'){
        position =-`${(pictureItem.getBoundingClientRect().width)*3}`;
        imageText.textContent = `${memTexts[3]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'link-4'){
        position =-`${(pictureItem.getBoundingClientRect().width)*4}`;
        imageText.textContent = `${memTexts[4]}`
        window.style = `transform:translateX(${position}px)`

    }

})

navigation.addEventListener('click', (e)=> {
    
    // console.log(pictureItem.getBoundingClientRect().width)


    navItems.forEach(item => {
        item.classList.add("slidein")
        item.classList.remove('checked')
    })
  
        e.target.classList.add('checked')
  
 
   
        navLinkItems.forEach((item)=> {
            item.classList.remove('checked')
        })


    if(e.target.id == 'nav-0'){
        position = 0;
        imageText.textContent = `${memTexts[0]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'nav-1'){
        position =-`${(pictureItem.getBoundingClientRect().width)}`;
        imageText.textContent = `${memTexts[1]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'nav-2'){
        position =-`${(pictureItem.getBoundingClientRect().width)*2}`;
        imageText.textContent = `${memTexts[2]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'nav-3'){
        position =-`${(pictureItem.getBoundingClientRect().width)*3}`;
        imageText.textContent = `${memTexts[3]}`
        window.style = `transform:translateX(${position}px)`

    }else if(e.target.id == 'nav-4'){
        position =-`${(pictureItem.getBoundingClientRect().width)*4}`;
        imageText.textContent = `${memTexts[4]}`
        window.style = `transform:translateX(${position}px)`
    }
    navigation.classList.remove('checked')

    imageText.classList.toggle('animation-text')
})
}
moveSlides()