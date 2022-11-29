console.log(frontEndJobs)
function renderCards(arr){
    
    const ul = document.createElement("ul")
    ul.classList.add("box__jobs--front")

    arr.forEach(element => {
        const li = document.createElement("li")
        const divBoxCard = document.createElement("div")
        const divBoxHeader = document.createElement("div")
        const divBoxHeaderPerfil = document.createElement("div")
        const div = document.createElement("div")
        const tittleBox = document.createElement("h3")
        const spanLocartion = document.createElement("span")
        const textContetnt = document.createElement("p")
        const divBoxFooter = document.createElement("div")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")

        divBoxCard.classList.add("box__card")

        divBoxHeader.classList.add("box__header")

        divBoxHeaderPerfil.classList.add("box__header__perfil")
        divBoxHeaderPerfil.innerText = "G"

        tittleBox.innerText = element.title

        spanLocartion.innerText = element.city

        textContetnt.innerText = element.descrription

        divBoxFooter.classList.add("box__footer")

        span1.innerText = element.modality[0]

        span2.innerText = element.modality[1]

        div.append(tittleBox, spanLocartion)
        divBoxHeader.append(divBoxHeaderPerfil, div)
        divBoxFooter.append(span1, span2)
        divBoxCard.append(divBoxHeader, textContetnt, divBoxFooter)
        li.appendChild(divBoxCard)
        ul.appendChild(li)

    });

    return ul

}

function creatingCards(list){

    const divFront = document.querySelector(".box__Front")
    const divBackEnd = document.querySelector(".box__Backend")

    divFront.appendChild(list(frontEndJobs))
    divBackEnd.appendChild(list(backEndJobs))

}
creatingCards(renderCards)




    //     <ul class="box__jobs--front">
    //     <li>
    //         <div class="box__card">
    //             <div class="box__header">
    //                 <div class="box__header__perfil">G</div>
    //                 <div>

    //                     <h3>Desenvolvedor Frontend</h3>
    //                     <span>Curitiba - Paraná</span>

    //                 </div>

    //             </div>
    //                 <p>Lorem Ipsum is simply dummy text of the printing and
    //                      typesetting industry. 
    //                     Lorem Ipsum has been the industry's 
    //                     standard dummy text ever since the 1500s</p>                
    //                 <div class="box__footer">
    //                     <span>Full Time</span>
    //                     <span>Remote</span>
    //               </div>
    //         </div>
    //     </li>
    // </ul>