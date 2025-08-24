const { jsPDF } = window.jspdf;

document.getElementById("biodata-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const fullName = form.fullName.value;
  const dob = form.dob.value;
  const gender = form.gender.value;
  const height = form.height.value;
  const weight = form.weight.value;
  const education = form.education.value;
  const occupation = form.occupation.value;
  const caste = form.caste.value;
  const address = form.address.value;
  const fatherName = form.fatherName.value;
  const motherName = form.motherName.value;
  const contact = form.contactNumber.value;
  const email = form.email.value;
  const hobbies = form.hobbies.value;

  const pdf = new jsPDF();
  pdf.setFontSize(16);
  pdf.text("Made With The PR Studio", 20, 20);

  pdf.setFontSize(12);
  let y = 40;

  const addLine = (label, value) => {
    if (value) {
      pdf.text(`${label}: ${value}`, 20, y);
      y += 10;
    }
  };

  addLine("Full Name", fullName);
  addLine("Date of Birth", dob);
  addLine("Gender", gender);
  addLine("Height", height);
  addLine("Weight", weight);
  addLine("Education", education);
  addLine("Occupation", occupation);
  addLine("Caste", caste);
  addLine("Address", address);
  addLine("Father’s Name", fatherName);
  addLine("Mother’s Name", motherName);
  addLine("Contact", contact);
  addLine("Email", email);
  addLine("Hobbies", hobbies);

  pdf.setFontSize(10);
  pdf.text("Made With The PR Studio", 150, 280);

  pdf.save("Biodata.pdf");
});
