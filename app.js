// ====Functions for section 6====
function callUs()
{
    Swal.fire({
        title: "Phone Number is",
        text : "+92 3394007616" ,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}

function whatsappUs()
{
Swal.fire({
  title: "Whatsapp Number is",
  text : "+92 3172152131" ,
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
}

function messageUs()
{
    window.location.href = 'https://www.facebook.com/'
}
