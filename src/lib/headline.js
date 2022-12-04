

const headline = (content) => {
    const e = document.getElementById('page')
    e.innerHTML = `
    
    <div class="headline" onclick="console.log('blsh')">
    ${content}
    </div>
    
    ` + e.innerHTML
}

