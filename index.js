let userform=document.getElementById("user-form");





const retrieveEntries=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){
        entries=JSON.parse(entries);
    }else
    {
        entries=[];
    }
    return entries;
}


let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td>${entry.name}</td>`;
        const emailCell=`<td>${entry.email}</td>`;
        const passwordCell=`<td>${entry.password}</td>`;
        const dobCell=`<td>${entry.dob}</td>`;
        const acceptTermAndConditionCell=`<td>${entry.acceptTermAndCondition}</td>`;

        const row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermAndConditionCell}</tr>`;
        return row;
    }).join("\n");
    const table= `<table class='border'><tr>
        <th class='<style>padding:20px;</style>' >Name</th>
            <th class='l1'>Email</th>
            <th class='l1'>Password</th>
            <th class='l1'>Dob</th>
            <th class='l1'>Accepted terms?</th>
        </tr>${tableEntries}
        </table>`;
        
    
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
    const Sync=document.getElementById(table);

    
}
const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;

    const acceptTermAndCondition=document.getElementById("acceptTerms").checked;
  
    const entry ={
        name,
        email,
        password,
        dob,
        acceptTermAndCondition
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
    

}
userform.addEventListener("submit",saveUserForm);
displayEntries();

function getAge(today, bday) {
    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
  
    if (month < 0 || (month === 0 && today.getDate() < bday.getDate())) {
      age--;
    }
    return age;
  }
  
  let dateSelector = document.getElementById("dob");
  
  dateSelector.addEventListener("change", () => {
    let [year, month, date] = document.getElementById("dob").value.split("-");
  
    let dob = new Date(year, month, date);
  
    let today = new Date();
  
    age = getAge(today, dob);
  
    if (age < 18 || age > 55) {
      dateSelector.setCustomValidity("Age must be between 18 and 55");
      dateSelector.reportValidity();
    } else {
      dateSelector.setCustomValidity("");
    }
  });
  


  

 