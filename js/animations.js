// TIMELINES
var videoTimeline = gsap.timeline();
var serviziTimeline = new TimelineMax();
var partnersTimeline = new TimelineMax();
var aziendaTimeline = new TimelineMax();
var contattiTimeline = new TimelineMax();

// SCROLLMAGIC CONTROLLER
const controller = new ScrollMagic.Controller();

// VIDEO
videoTimeline.from(".navbar", { duration: 0.5, y: "-10vh", ease: "power1" });
videoTimeline.from("#testo-overlay", { duration:0.5, opacity:0, y: -150 });
videoTimeline.from("#pulsante-overlay", {duration:0.5,  x: -40, opacity: 0 });

// SERVIZI
const serviziScene = new ScrollMagic.Scene({
  triggerElement: "#servizi",
})
  .setTween(serviziTimeline)
  .addTo(controller);

serviziTimeline.from("#titolo-servizi", {
  duration: 0.5,
  opacity: 0,
  height:0,
});
serviziTimeline.from("#testo-servizi", {
  duration: 0.5,
  opacity: 0,
});
serviziTimeline.from("#illustrazione-servizi", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
});
serviziTimeline.from("#categoria-servizi", { opacity: 0, stagger: 0.1 });

// PARTNERS
const partnersScene = new ScrollMagic.Scene({
  triggerElement: "#partners",
})
  .setTween(partnersTimeline)
  .addTo(controller);

partnersTimeline.from("#titolo-partners", {
  duration: 0.5,
  opacity: 0,
});
partnersTimeline.from("#testo-partners", {
  duration: 0.5,
  opacity: 0,
});
// partnersTimeline.from(".certificazioni", {
//   duration: 0.5,
//   opacity: 0,
//   height: 0,
// });
partnersTimeline.from("#slideshow-partners", { opacity: 0, width: 0 });

// AZIENDA
const aziendaScene = new ScrollMagic.Scene({
  triggerElement: "#azienda",
})
  .setTween(aziendaTimeline)
  .addTo(controller);

aziendaTimeline.from("#titolo-azienda", {
  duration: 0.5,
  height: 0,
  opacity:0
});
aziendaTimeline.from("#testo-azienda", {
  opacity: 0,
  duration: 0.5,
});
aziendaTimeline.from("#illustrazione-azienda", {
    duration: 0.5,
    opacity: 0,
  });

// CONTATTACI
const contattiScene = new ScrollMagic.Scene({
  triggerElement: "#contatti",
})
  .setTween(contattiTimeline)
  .addTo(controller);

contattiTimeline.from("#titolo-contattaci", { opacity: 0, duration: 0.5, delay:0.3 });
contattiTimeline.from("#illustrazione-contattaci", {
    duration: 0.5,
    scale: 0,
    rotation:-180,
  });
contattiTimeline.from(".form-group", { opacity: 0, stagger: 0.3 });
contattiTimeline.from("#pulsante-contattaci", { opacity:0, scale:1.5, duration: 0.5});
