
window.onload = function () {

  particlesJS("heroparticles",
  {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#078bf2"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#fff",
        },
        polygon: {
          nb_sides: 12
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.38017060304327614,
        random: false,
        anim: {
          enable: false,
          speed: 0.2,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 8.181158184520175,
          size_min: 2.060386061506725,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 400.4776885211732,
        color: "#078bf2",
        opacity: 0.52068241217310456,
        width: 1.122388442605866
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }

  );
};

$(".owl-carousel").owlCarousel({
  loop: true,
  // margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items:1
    }
  },
  responsiveBaseElement: 'body'
})
