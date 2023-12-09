document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    document.querySelectorAll('section img').forEach(img => {
        img.onclick = () => {
            document.querySelector('.pop-img').style.display = 'block';
            document.querySelector('.pop-img img').src = img.getAttribute('src');
        }
    });

    document.querySelector('.pop-img span').onclick = () => {
        document.querySelector('.pop-img').style.display = 'none';
    };
    
  
});;
document.querySelector('.body').addEventListener('click', (event) => {
    const popImg = document.querySelector('.pop-img');
    // Check if the click is not inside the '.pop-img' element
    if (popImg && !popImg.contains(event.target)) {
        popImg.style.display = 'none';
    }
});
