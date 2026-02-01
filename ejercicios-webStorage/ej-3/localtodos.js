export function initTodos(){
    const locales = [
        {name: 'Prueba', description: 'Viendo si fufa', complete: true},
        {name: 'Entreno', description: 'Ir al GoFit', complete: false}
    ]
    
    localStorage.setItem("todos",JSON.stringify(locales));

}