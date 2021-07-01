

export const navBar = () => {

    let html = `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="./images/pb.png" id="logo" alt="Jar of Peanut Butter>
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__message">
                <img src="./images/fountain-pen.svg" alt="Pen">
                    <div class="notification__count">
                    0
                    </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>

        </nav>
    
    
    `

    return html 
}