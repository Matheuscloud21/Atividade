const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lightTheme = {
    '--background-color': '#fff',
    '--background-label': '#111',
    '--color': 'rgb(93, 93, 93)',
    '--btn-inicio': '#111',
    '--moon-sun': '#fff',
    '--img-logo': 'invert',
    '--transition': '1s',
    '--box-shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',


}

const darkTheme = {
    '--background-color': '#111',
    '--background-label': '#fff',
    '--color': '#fff',
    '--btn-inicio': '#fff',
    '--moon-sun': '#111',
    '--img-logo': 'invert(1)',
    '--transition': '1s',
    '--box-shadow' : 'rgba(255, 255, 255, 0.8) 0px 50px 100px -20px, rgba(255, 255, 255, 0.4) 0px 20px 60px -30px, rgba(255, 255, 255, 0.4) 0px -2px 6px 0px inset',
    

}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})


function changeTheme(theme) {
    for(let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}