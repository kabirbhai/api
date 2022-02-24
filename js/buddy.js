const funBuddies = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
funBuddies()

const displayBuddies = data => {
    console.log(data.results)
    const buddies = data.results;
    // const mainDiv = document.getElementById('container')
    // for (const buddy of buddies) {
    //     console.log(buddy)
    //     const para = document.createElement('p')
    //     para.innerHTML = `
    //     <p>${buddy.email}<p>
    //     `;
    //     mainDiv.appendChild(para)
    // }
}