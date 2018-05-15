$("#submit").on('click', event => {
  event.preventDefault();

  var newPerson = {
    name: $('#name').val().trim(),
    scores: [
      parseInt($('#questionOne').val()),
      parseInt($('#questionTwo').val()),
      parseInt($('#questionThree').val()),
      parseInt($('#questionFour').val()),
      parseInt($('#questionFive').val()),
      parseInt($('#questionSix').val()),
      parseInt($('#questionSeven').val()),
      parseInt($('#questionEight').val()),
      parseInt($('#questionNine').val()),
      parseInt($('#questionTen').val())
    ]
  };

  console.log(newPerson)

})



function findAFriend() {
  var currentURL = window.location.origin;

  $.ajax({url: currentURL + '/api/friendName', method: 'GET'})
  .then(friendName => {
    friendName.forEach(person => {
      var compare = person.scores
      console.log(compare)
    });
  })
}
