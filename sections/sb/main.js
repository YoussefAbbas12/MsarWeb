async function getServices() {
    const request = await fetch('./serveces.json');
    const services = await request.json();

    for(let i = 0 ; i < 8 ;i++){
        document.querySelector('.service-box').innerHTML += `
        <a class="service img-box" href="${services[i].url}">
            <div class="img-container img-container-web-development">
                <h3>${services[i].name}</h3>
                <img class="img-box-image" src="${services[i].image}" />
                <div class="img-box-content">
                    ${services[i].description}
                </div>
            </div>
        </a>

        `;
    }
    
}

getServices();