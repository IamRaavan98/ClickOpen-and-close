const container = document.querySelector('.container')

let count = 0
function handleCLick(e){
    count++
    if(count>1){
        return
    }
    const div = document.createElement('div')
    div.classList.add("modelContainer")

    let add =  `<div class="top">
      <span class="model">Model Component</span>
      <span onclick="handleCrossCLick()" class="removeModelContainer">&#10060;</span>
    </div>
    <hr/>
    <div class="low">
        <h2 class="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro accusantium libero unde nesciunt? Magnam aliquid necessitatibus ipsa fugiat incidunt. Ad cupiditate quasi perspiciatis voluptate. Illum harum voluptate explicabo animi?
            Ipsam dolorum soluta, cupiditate veniam qui, recusandae adipisci, voluptate dolorem consequuntur alias modi repudiandae amet rem? Amet illum modi voluptates sed excepturi ab debitis, distinctio inventore ea, tempore accusamus architecto.
        </h2>
    </div>`

    div.innerHTML = add
    container.appendChild(div)

}

function handleCrossCLick(){
    count = 0
    container.removeChild(container.lastChild)
}