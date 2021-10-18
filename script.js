document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger-btn').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.phone').classList.toggle('active');
  })