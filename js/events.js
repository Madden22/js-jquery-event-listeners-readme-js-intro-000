//define functions here

function getIt () {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

/*function frameIt() {
  $('img').on('load', function() {
    return $('img').append(<'class = tasty'/>)
  })
}*/

function pressIt() {
  $('input#typing').on('keydown', function (key) {
    if (key.which === 71) {
      alert('You pressed the g key!!')
    }
  })
}

function submitIt() {
  $('input:last').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

getIt()

frameIt()

pressIt()

submitIt()

});
