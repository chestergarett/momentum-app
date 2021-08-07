const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

// calling functions
displayClock()

//to display current date & time
function displayClock(){
  var today = new Date();
  var date = monthNames[(today.getMonth())]+' ' +today.getDate()+', '+today.getFullYear();
  var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

  document.getElementById('header-date').innerHTML = date
  document.getElementById('header-time').innerHTML = time
  function displayClock1(){
    setTimeout('displayClock()', 1000)
  };
  displayClock1()
}

//header components
var newHeaderName = document.getElementById('nameModal')
var headerLogoDiv = document.getElementById('header-logo-div')
var oldHeaderName = document.getElementById('header-name')
var nameModal = document.querySelector('.name-modal')
var nameModalClose = document.getElementById('nameModalClose')
var nameModaldiv = document.getElementById('div-name-modal')
var header = document.getElementById('header');
var sticky = header.offsetTop;


//to display edit name modal
headerLogoDiv.addEventListener('click', function(){
  nameModal.style.display = 'flex';
})

//to display and edit current name
nameModaldiv.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    nameValue = newHeaderName.value
    oldHeaderName.innerText = nameValue
    nameModal.style.display = 'none'
    newHeaderName.value = ''
    }
});

//to exit edit name modal
nameModaldiv.addEventListener('keyup', function(e){
  if(e.key === 'Escape'){
    nameModal.style.display = 'none'
    newHeaderName.value = ''
  }
})

//to close current edit form
nameModalClose.addEventListener('click', function(){
  nameModal.style.display = 'none'
  newHeaderName.value = ''
})
