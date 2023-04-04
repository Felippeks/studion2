$(document).ready(() => {
    const slickOptions ={
        autoplay: true,
        dots: false,
        prevArrow:
        '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: 
        '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
               
    };
    $('.slider').slick(slickOptions);

    $('.footer__form-button').on('click', () =>{
       const email = $('#email').val();
       email.send({
        Host : "smtp.gmail.com",
        Username : "email conta",
        Password : "senha",
        To : 'email conta',
        From : email,
        Subject : "Por favor me adicione na newsletter",
        Body : `Olá, eu gostaria de ser adicionado na newsletter do site.
        Meu email é $(email)
        
        Obrigado!`
    }).then(
      message => alert(message)
    );
    })
  });