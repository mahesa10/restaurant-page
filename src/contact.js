const contactPage = () => {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contact");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Book Now";

  const contactTel = document.createElement("span");
  contactTel.classList.add("telephone");
  contactTel.innerHTML = `<img src="./icons/phone.svg"> (999) 999-9999`;

  const contactAddr = document.createElement("span");
  contactAddr.classList.add("address");
  contactAddr.innerHTML = `<img src="./icons/location.svg"> 99 Nusantara Street, New York`;

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.appendChild(contactTel);
  contactInfo.appendChild(contactAddr);

  const form = document.createElement("form");
  form.setAttribute("autocomplete", "off");
  const formInput = [
    {
      labelText: "Name",
      type: "name"
    },
    {
      labelText: "Email",
      type: "email"
    },
    {
      labelText: "Date",
      type: "date"
    },
    {
      labelText: "Time",
      type: "time"
    }
  ];

  formInput.forEach(input => {
    const formGroup = document.createElement("div");
    formGroup.className = `form-group form-group-${input.type}`

    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", input.type);
    inputLabel.textContent = input.labelText;
    
    const inputField = document.createElement("input");
    inputField.setAttribute("type", input.type);
    inputField.setAttribute("id", input.type);
    
    formGroup.appendChild(inputLabel);
    formGroup.appendChild(inputField);
    
    form.appendChild(formGroup);
  });

  const formButton = document.createElement("button");
  formButton.textContent = "Submit";

  form.appendChild(formButton);

  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(form);
  contactDiv.appendChild(contactInfo);

  return contactDiv;
}

const displayContact = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(contactPage());
}

export default displayContact;