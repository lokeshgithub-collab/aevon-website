const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", form.querySelector('input[placeholder="Name"]').value);
  formData.append("email", form.querySelector('input[placeholder="E-mail"]').value);
  formData.append("message", form.querySelector("textarea").value);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxx7hwL4mppirvyJVJ_RHPX8eKBXfw021dgt645O8qc3r4OjlGnnzVFVpp_bKdPBLy8Ug/exec",
      {
        method: "POST",
        body: formData
      }
    );

    const result = await res.json();

    if (result.status === "success") {
      alert("Message sent successfully ✅");
      form.reset();
    } else {
      alert("Something went wrong ❌");
    }

  } catch (err) {
    alert("Something went wrong ❌");
    console.error(err);
  }
});
