window.checkValidity = (fieldSelectors) => 
    fieldSelectors.every(x => document.getElementById(x).checkValidity());

window.navigateTo = (path) => {
    window.htmx.ajax("GET", `/hx${path}`,  
        {target:'#data-main-app-content', swap:'innerHTML transition:true'} 
    ).then(() => window.history.pushState({}, "", path));    
};

window.navigateToNoHist = (path) => {
    window.htmx.ajax("GET", `/hx${path}`,  
        {target:'#data-main-app-content', swap:'innerHTML transition:true'} 
    );
};


window.setDarkMode = (darkMode) => {
    document.getElementById('htmlContainer').classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode);
}


window.addEventListener('load', function(event) {
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(darkMode);    
});