
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


export const dogLinkCreator = function(){
  
  let dogArray = [];
  Object.keys(dogs).forEach((dog)=>{
    
    const newA = document.createElement('a');
    
    newA.innerHTML =dog;
    newA.setAttribute('href', dogs[dog]);
    const newLi = document.createElement('li');
    newLi.setAttribute('class', 'dog-link');
    newLi.append(newA);
    dogArray.push(newLi);
  });
  return dogArray;
}

export function attachDogLinks(){
  let dogLinks = dogLinkCreator();
  const dddl= document.getElementsByClassName('drop-down-dog-list')[0];
  dddl.classList.add('hidden');
  dogLinks.forEach((listElement)=>{
  dddl.append(listElement);
  });
}


export function handleEnter(){
  const dddn = document.getElementsByClassName('drop-down-dog-nav')[0];
  
  dddn.addEventListener('mouseenter', e => {
    const dddl = document.getElementsByClassName('drop-down-dog-list')[0];

    dddl.classList.remove('hidden');
    console.log("we're in!");
  });
}

export function handleLeave(){
  const dddn = document.getElementsByClassName('drop-down-dog-nav')[0];
  dddn.addEventListener('mouseleave', e => {
    const dddl = document.getElementsByClassName('drop-down-dog-list')[0];

    dddl.classList.add( 'hidden');
    console.log("we're out!");
  });
}


attachDogLinks();
handleLeave();
handleEnter();

// module.exports = dogLinkCreator;