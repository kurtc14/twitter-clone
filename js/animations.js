$(document).ready(function(){

$('#tweet-controls').hide();
$('.tweet-actions').hide();
$('.stats').hide();

$('.content').on('click', function (e) {
  $('.stats').hide();
  $('.stats', this).show();


});


$('.tweet-compose').on('click', function() {
    $(this).css('height', '5em');
    $('#tweet-controls').show();
});

$('.tweet-compose').keyup(function () {
  var max = 140;
  var len = $(this).val().length;
  var char = max - len;
  $('#char-count').text(char);
  if (len >= max - 10) {
    $('#char-count').css('color', 'red');
  }
  if (len < max - 10) {
    $('#char-count').css('color', '#999');
  }

  if (len >= max) {
    $('#tweet-submit').hide();
    $('#char-count').text(char + " you are over the limit!");

  }

  if (len < max) {
    $('#tweet-submit').show();
  }

}
);



$('#tweet-submit').on('click', function() {

var $newtweet = $('.tweet').first().clone();

$newtweet.find('.avatar').attr('src', 'img/alagoon.jpg');
$newtweet.find('.fullname').text('Kurt Cannon');
$newtweet.find('.username').text('@kurtc14');
var textFromCompose = $('.tweet-compose').val();
$newtweet.find('.tweet-text').text(textFromCompose);
$newtweet.find('.stats').attr('class', 'stats');

($newtweet).prependTo('#stream');
  $('.tweet-actions').hide();
  $('.stats').hide();
  $('.stats', this).show();


});


$(".tweet").on({

    mouseenter: function () {
      $('.tweet-actions', this).show();
    },
    mouseleave: function () {
      $('.tweet-actions', this).hide();
    }
});









});
