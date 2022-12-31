//nodes   well explained

var knowingNode = document.querySelector('#page-banner');
console.log('#page-banner node type is :' ,knowingNode.nodeType);
console.log('#page-banner node type is :' ,knowingNode.nodeName);
console.log('#page-banner has child nodes? :' ,knowingNode.hasChildNodes());

//cloning the element
const clonedBanner = knowingNode.cloneNode(true); //if false it doesnt display the child elements
console.log(clonedBanner);