export const viewSampel = () => {
    
    var para = document.createElement("p");
    var node = document.createTextNode("Hellow World!");
    document.body.append(para)
    para.appendChild(node);
    
}