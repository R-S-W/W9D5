
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.children.length ==1){
        htmlElement.removeChild(htmlElement.childNodes[0]);
    }
    const newP = document.createElement('p');
    const newString = document.createTextNode(string);
    newP.appendChild(newString);
    
    htmlElement.append(newP);
};

htmlGenerator('Party Time.', partyHeader);
// htmlGenerator('aaaaaaa', partyHeader)

