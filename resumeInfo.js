 document.getElementById('addContact').onclick=function(){

    var contactSec=document.getElementById('newContactSec');
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
    
    }
    newSecHeader.innerHTML="New Contact Info";
    newSecHeader.style.position="relative";
    newSecHeader.style.color="#1EC08C";
    

    
    newContact.id="newSection";

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
document.getElementById('addExperienceBtn').onclick=function(){
   
    var divExperience=document.createElement('div');
    divExperience.className='inputExperience';
    
    var deleteBtn=document.createElement('button');
    deleteBtn.innerHTML="X"
    deleteBtn.style.position="relative";
    deleteBtn.style.right='10px';
    deleteBtn.style.backgroundColor="white";
    deleteBtn.style.color="#F12F00";
    deleteBtn.style.fontSize='8px';
    deleteBtn.style.borderRadius="5px"
    deleteBtn.style.borderStyle="solid";
    deleteBtn.style.borderColor="#F12F00";
    deleteBtn.style.float="right";
    deleteBtn.setAttribute('title','click to delete');
    
    deleteBtn.onclick=function(){
        var parentElem=this.parentElement;
        parentElem.remove();
    
    }

    var positionContainer=document.createElement('div')
    positionContainer.className='position';
    var positionTitle=document.createElement('h3');
    positionTitle.innerHTML='Position';
    var positionInput=document.createElement('input');
    positionInput.style.class="inputText";
    positionInput.setAttribute('type','text');
    positionInput.setAttribute('placeholder','Senior Developer');
    divExperience.appendChild(deleteBtn);
    positionContainer.appendChild(positionTitle);
    
    positionContainer.appendChild(positionInput);
    divExperience.appendChild(positionContainer);

    var descriptionDiv=document.createElement('div');
    var descriptionHeader=document.createElement('h3');
    var textBox=document.createElement('textarea');
    descriptionHeader.innerHTML="Description/Achievements";
    descriptionHeader.style.display="block";
    textBox.className='description';
    descriptionDiv.appendChild(descriptionHeader);
    descriptionDiv.appendChild(textBox);
    divExperience.appendChild(descriptionDiv);

    var rowDiv=document.createElement('div');
    var row1Div=document.createElement('div');
    var companyName=document.createElement('h3');
    var companyInput=document.createElement('input');

    row1Div.className='row1';
    companyName.innerHTML="Company Name";
    companyInput.className="inputText";
    companyInput.setAttribute('type','text');
    companyInput.setAttribute('placeholder','Facebook');


    row1Div.appendChild(companyName);
    row1Div.appendChild(companyInput);
    rowDiv.appendChild(row1Div);
    
    var row1Div2=document.createElement('div');
    var locationTitle=document.createElement('h3');
    var optionalText=document.createElement('h5');
    var locationInput=document.createElement('input'); 
    
    row1Div2.className='row1';
    locationTitle.innerHTML='Location';
    optionalText.innerHTML='(optional)';
    locationInput.setAttribute('type','text');
    locationInput.className='inputText';
    locationInput.setAttribute('placeholder','San Francisco, CA');

    row1Div2.appendChild(locationTitle);
    row1Div2.appendChild(optionalText);
    row1Div2.appendChild(locationInput);


    rowDiv.appendChild(row1Div2);

    divExperience.appendChild(rowDiv);
    var row2Div=document.createElement('div');
    var row2Div1=document.createElement('div');
    var startDateTitle=document.createElement('h3');
    var startDate=document.createElement('input');
    
    row2Div1.className="row1";
    startDateTitle.innerHTML='Start Date';
    startDate.setAttribute('type','month');
    startDate.className='inputText';


    row2Div1.appendChild(startDateTitle);
    row2Div1.appendChild(startDate);
    row2Div.appendChild(row2Div1);
    var row2Div2=document.createElement('div');
    var endDateTitle=document.createElement('h3');
    var endDate=document.createElement('input');

    row2Div2.className="row1";
    endDateTitle.innerHTML='End Date';
    endDate.setAttribute('type','month');
    endDate.className='inputText';

    row2Div2.appendChild(endDateTitle);
    row2Div2.appendChild(endDate);
    row2Div.appendChild(row2Div2);

    divExperience.appendChild(row2Div);
    var checkBoxDiv=document.createElement('div');
    var checkboxForm=document.createElement('form');
    var checkboxInput=document.createElement('input');
    var checkboxLabel=document.createElement('label');

    checkboxForm.className='curEmployForm';
    checkboxInput.className='curEmployed';
    checkboxInput.setAttribute('type','checkbox');
    checkboxInput.setAttribute('width','10px');
    checkboxLabel.setAttribute('for','curEmployed');
    checkboxLabel.style.color='#2290B9';

    checkboxLabel.innerHTML="Currently Employed Here"
    
    checkboxForm.appendChild(checkboxInput);
    checkboxForm.appendChild(checkboxLabel);
    checkBoxDiv.appendChild(checkboxForm);
    
    divExperience.appendChild(checkBoxDiv);
    
    var inputExperience=document.getElementById('exInputSection');
    inputExperience.appendChild(divExperience);
    //alert(inputExperience.id);

} 