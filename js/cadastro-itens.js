
document.addEventListener('DOMContentLoaded', () => {
    const anoPublicacaoInput = document.getElementById('ano-publicacao')
    const precoInput = document.getElementById('preco')
    const emailInput = document.getElementById('email')

    
})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}