 document.getElementById('addContact').onclick=function(){

    var contactSec=document.getElementById('contactInfo');
    var newContact=document.createElement('div');
    var newSecHeader=document.createElement('h3');
    var deleteBtn=document.createElement('button');
    deleteBtn.innerHTML="X"
    deleteBtn.style.position="relative";
    deleteBtn.style.bottom='3px';
    deleteBtn.style.backgroundColor="white";
    deleteBtn.style.color="#F12F00";
    deleteBtn.style.fontSize='8px';
    deleteBtn.style.borderRadius="5px"
    deleteBtn.style.borderStyle="solid";
    deleteBtn.style.borderColor="#F12F00";
    deleteBtn.style.display="inline";
    deleteBtn.setAttribute('title','click to delete');


    
    deleteBtn.onclick=function(){
       
        var parentElem=this.parentElement;
        parentElem.remove();
        //var inputSec=parentElem.parentElement;
        //parentElem.inputSec.removeChild(parentElem);
    }
    newSecHeader.innerHTML="New Contact Info";
    newSecHeader.style.position="relative";
    newSecHeader.style.color="#1EC08C";
    

    
    newContact.id="newSection";
    newContact.className="input";
   // newContact.style.marginTop="10px"
    var secName=document.createElement('input');
    var secInfo=document.createElement('input');
    secName.setAttribute("type", "text");
    secName.setAttribute("placeholder","linkedin");
    secInfo.setAttribute("type","text");
    secInfo.setAttribute("placeholder","www.linkedin.com/in/johndoe");

    var title=document.createElement('h3');
    title.style.display="block";
    title.innerHTML="Title"
    var info=document.createElement('h3');
    info.innerHTML="Info"
    newContact.appendChild(newSecHeader);
    newContact.appendChild(deleteBtn);
    newContact.appendChild(title);
    newContact.appendChild(secName);
    newContact.appendChild(info);
    newContact.appendChild(secInfo);

    contactSec.appendChild(newContact);


}