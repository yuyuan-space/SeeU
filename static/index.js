window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);

    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();
})

function changetimescene(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('time-video-1'),
    document.getElementById('time-video-2'),
    document.getElementById('time-video-3')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.time-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.time-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

function changespacescene(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('space-video-1'),
    document.getElementById('space-video-2'),
    document.getElementById('space-video-3'),
    document.getElementById('space-video-4'),
    document.getElementById('space-video-5'),
    document.getElementById('space-video-6')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.space-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.space-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

function changePhysics(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('physics-video-1'),
    document.getElementById('physics-video-2'),
    document.getElementById('physics-video-3'),
    document.getElementById('physics-video-4'),
    document.getElementById('physics-video-5')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.physics-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.physics-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  changetimescene('butterfly', [
    './static/videos/unseen_time/butterfly_input.mp4',
    './static/videos/unseen_time/butterfly_continuous_dynamics.mp4',
    './static/videos/unseen_time/butterfly_SeeU_5past_71between_5future.mp4',
  ]);
});

document.addEventListener('DOMContentLoaded', (event) => {
  changespacescene('bus', [
    './static/videos/unseen_space/bus_input.mp4',
    './static/videos/unseen_space/bus_input.mp4',
    './static/videos/unseen_space/bus_input.mp4',
    './static/videos/unseen_space/bus_input.mp4',
    './static/videos/unseen_time/butterfly_continuous_dynamics.mp4',
    './static/videos/unseen_time/butterfly_SeeU_5past_71between_5future.mp4',
  ]);
});

document.addEventListener('DOMContentLoaded', (event) => {
  changePhysics('Circular Motion', [
    './static/videos/more_results/circular_motion_1.mp4',
    './static/videos/more_results/circular_motion_2.mp4',
    './static/videos/more_results/circular_motion_3.mp4',
    './static/videos/more_results/circular_motion_4.mp4',
    './static/videos/more_results/circular_motion_5.mp4'
  ]);
});