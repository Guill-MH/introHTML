addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const u_items = document.querySelector('.u_items')
            u_items.classList.toggle('show')
        })
    }
})