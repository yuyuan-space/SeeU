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

function changeMotion(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('motion-video-1'),
    document.getElementById('motion-video-2'),
    document.getElementById('motion-video-3'),
    document.getElementById('motion-video-4'),
    document.getElementById('motion-video-5'),
    document.getElementById('motion-video-6')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.motion-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.motion-selector .button[onclick*="${name}"]`);
  if (clickedButton) {
    clickedButton.classList.add('is-active');
  }
}

function changePara(name, videoSrcArray) {
  const videoPlayers = [
    document.getElementById('para-video-1'),
    document.getElementById('para-video-2'),
    document.getElementById('para-video-3')
  ];

  videoPlayers.forEach((player, index) => {
    if (player && videoSrcArray[index]) {
      player.src = videoSrcArray[index];
    }
  });

  document.querySelectorAll('.para-selector .button').forEach(button => {
    button.classList.remove('is-active');
  });

  const clickedButton = document.querySelector(`.para-selector .button[onclick*="${name}"]`);
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
  changeMotion('Deformation', [
    './static/videos/motions/Deformation/our.mp4',
    './static/videos/motions/Deformation/Sora.mp4',
    './static/videos/motions/Deformation/PhysT2V.mp4',
    './static/videos/motions/Deformation/CogVideoX.mp4',
    './static/videos/motions/Deformation/Wan.mp4',
    './static/videos/motions/Deformation/Veo3.mp4'
  ]);
});

document.addEventListener('DOMContentLoaded', (event) => {
  changePara('Para #2', [
    './static/videos/paras/set_b_prompt2.mp4',
    './static/videos/paras/set_b_prompt5.mp4',
    './static/videos/paras/set_b_prompt6.mp4'
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