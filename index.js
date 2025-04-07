document.querySelectorAll('.nav-option').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-option.active')?.classList.remove('active')
        this.classList.add('active')
    })
})
const optionTabs = [
    'packages-tab',
    'hotel-tab',
    'cruise-tab',
    'car-tab'
]

optionTabs.forEach((tab) => console.log(tab))