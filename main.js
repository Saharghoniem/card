let names=['card 1','card 2','card 3','card 4','card 5','card 6']
let age=[11,22,33,44,55,66]

let container =document.createElement('div');
document.body.appendChild(container);
container.style.textAlign ='center';
function element(name,ages){

    let card= document.createElement('div');
    let title= document.createElement('h2');
    let age= document.createElement('p');
    let img= document.createElement('img');

    //content
    let head = document.createTextNode(name);
    let ageContent= document.createTextNode(ages);
    
    img.src = 'img/back11.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

//style
card.style.width='300px';
card.style.background='gray';
card.style.color='white';
card.style.padding='10px';
card.style.margin='10px';
card.style.display='inline-block';
img.style.width='100%';

card.appendChild(title);
card.appendChild(age);
card.appendChild(img);
container.appendChild(card);
}
for(let i=0;i <6 ;i++)
  element(names[i],age[i]);




