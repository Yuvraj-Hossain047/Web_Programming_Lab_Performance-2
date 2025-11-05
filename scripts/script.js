function searchPhone(){
    const inputData = document.getElementById('search-in').value.toLowerCase();
    loadPhone(inputData);
}
async function loadPhone(inputData){
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputData}`);
        const data = await res.json();
        // console.log(data);
        displayPhone(data.data);
}           
const displayPhone = (data) => {
  const phoneList = document.getElementById('phone-list');
  phoneList.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('phone-card');
    card.innerHTML = `
      <div class="phone-img">
        <img src="${item.image}" alt="">
      </div>
      <div class="phone-detail">
        <h3>${item.brand} ${item.phone_name}</h3>
        <p>${item.slug}</p>
        <h5>$999</h5>
        <div class="btn"><a href="#">Show Details</a></div>
      </div>
    `;
    phoneList.appendChild(card);
  });
  document.getElementById('load-animation').classList.add('hidden');
};
document.getElementById('search-click').addEventListener('click', function(event){
    event.preventDefault();
    searchPhone();
    document.getElementById('load-animation').classList.remove('hidden');
    document.getElementById('p-demo').classList.add('hidden');
});

/* <div class="phone-card">
                <div class="phone-img">
                    <img src="./images/iphone-img.png" alt="">
                </div>
                <div class="phone-detail">
                    <h3>Iphone 13 Pro Max</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    <h5>$999</h5>
                    <div class="btn"><a href="#">Show Details</a></div>
                </div>
            </div> */