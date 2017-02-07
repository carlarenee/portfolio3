$(() => {

console.log("Hi and thanks for visiting my portfolio site. I am always excited to learn of new development projects and employment/collaborative opportunities. Please reach out: cstockalper@gmail.com");

// Fade in animation for title
const animateTitle = () => {

  $(".title").animate({ opacity: '1' }, 2000);
  $(".title").css({ zIndex: '5'});
}

// Slow fade in for subtitle
const animateSubTitle = () => {
  $('.w').animate({ opacity: '1' }, 500);
  $('.e1').delay(400).animate({ opacity: '1' }, 300);
  $('.b').delay(600).animate({ opacity: '1' }, 300);
  $('.d').delay(800).animate({ opacity: '1' }, 300);
  $('.space').delay(1000).animate({ opacity: '1' }, 300);
  $('.e2').delay(1200).animate({ opacity: '1' }, 300);
  $('.v').delay(1400).animate({ opacity: '1' }, 300);
  $('.e3').delay(1600).animate({ opacity: '1' }, 300);
  $('.l').delay(1800).animate({ opacity: '1' }, 300);
  $('.o').delay(2000).animate({ opacity: '1' }, 300);
  $('.p').delay(2200).animate({ opacity: '1' }, 300);
  $('.e4').delay(2400).animate({ opacity: '1' }, 300);
  $('.r').delay(2600).animate({ opacity: '1' }, 300);
}

// Make heyo modal for project go from 0 height and width to full page
const goModalHeyo = () => {
  $('#heyoModal').css({ display: 'block' });
  $('.heyoImage').css({ height: '55vh', width: '60vw' });
  $('.scene-overlay-3').css({height: '0', width: '0'});
}

// Make fish modal for project go from 0 height and width to full page
const goModalMonster = () => {
  $('#monsterFishModal').css({ display: 'block' });
  $('.monsterImage').css({ height: '55vh', width: '60vw' });
  $('.scene-overlay-3').css({ height: '0', width: '0'});
}

const goModalMars = () => {
  $('#mfmModal').css({ display: 'block' });
  $('.marsImage').css({ height: '55vh', width: '60vw' });
  $('.scene-overlay-3').css({ height: '0', width: '0'});
}

// Close heyo modal on button click
const closeModalHeyo = () => {
  $('#heyoModal').css({ display: 'none' });
  $('.heyoImage').css({ height: '0', width: '0' });
  $('.scene-overlay-3').css({ height: '70vh', width: '70vw' });
}

// Close monster modal on button click
const closeModalMonster = () => {
  $('#monsterFishModal').css({ display: 'none' });
  $('.monsterImage').css({ height: '0', width: '0' });
  $('.scene-overlay-3').css({ height: '70vh', width: '70vw' });
}

const closeModalMars = () => {
  $('#mfmModal').css({ display: 'none' });
  $('.marsImage').css({ height: '0', width: '0' });
  $('.scene-overlay-3').css({ height: '70vh', width: '70vw' });
}

// onload animations
animateTitle();
animateSubTitle();

// event listners
$('.modalbtnheyo').click(function(){ goModalHeyo(); });
$('.modalbtnmonster').click(function(){ goModalMonster(); });
$('.modalbtnmars').click(function(){ goModalMars(); });
$('.x').click(function(){ closeModalHeyo(); })
$('.x2').click(function(){ closeModalMonster(); })
$('.x3').click(function(){ closeModalMars(); })
});


