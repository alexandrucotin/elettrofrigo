// TIMELINES
var videoTimeline = gsap.timeline();
var serviziTimeline = new TimelineMax();
var partnersTimeline = new TimelineMax();
var aziendaTimeline = new TimelineMax();
var contattiTimeline = new TimelineMax();

// SCROLLMAGIC CONTROLLER
const controller = new ScrollMagic.Controller();

// VIDEO
videoTimeline.to(".navbar", { duration: 0.5, top: "-10vh", ease: "power1" });
videoTimeline.set(".overlay-total", { y: -150 });
videoTimeline.to(".overlay-total", { duration: 1, x: 40, opacity: 1 });

// SERVIZI
const serviziScene = new ScrollMagic.Scene({
  triggerElement: "#servizi",
})
  .setTween(serviziTimeline)
  .addTo(controller);

serviziTimeline.from(".servizi-titolo", {
  delay: 0.3,
  duration: 1,
  opacity: 0,
  height: 0,
});
serviziTimeline.from(".servizi-paragrafo-descrittivo", {
  duration: 0.5,
  opacity: 0,
});
serviziTimeline.from(".illustrazione-servizi", {
  duration: 0.5,
  scale: 0,
  opacity: 0,
});
serviziTimeline.from(".round-item", { opacity: 0, stagger: 0.1 });

// PARTNERS
const partnersScene = new ScrollMagic.Scene({
  triggerElement: "#partners",
})
  .setTween(partnersTimeline)
  .addTo(controller);

partnersTimeline.from(".partners-titolo", {
  duration: 1,
  delay: 0.3,
  opacity: 0,
});
partnersTimeline.from(".partners-paragrafo-descrittivo", {
  duration: 0.5,
  opacity: 0,
  height: 0,
});
partnersTimeline.from(".certificazioni", {
  duration: 0.5,
  opacity: 0,
  height: 0,
});
partnersTimeline.from(".logo-container", { opacity: 0, stagger: 0.3 });

// AZIENDA
const aziendaScene = new ScrollMagic.Scene({
  triggerElement: "#azienda",
})
  .setTween(aziendaTimeline)
  .addTo(controller);

aziendaTimeline.from(".azienda-titolo", {
  delay: 0.3,
  duration: 1,
  height: 0,
  opacity:0
});
aziendaTimeline.from(".azienda-paragrafo-descrittivo", {
  opacity: 0,
  duration: 1,
});
aziendaTimeline.from(".illustrazione-azienda", {
    duration: 0.5,
    width: 0,
    opacity: 0,
  });

// CONTATTACI
const contattiScene = new ScrollMagic.Scene({
  triggerElement: "#contatti",
})
  .setTween(contattiTimeline)
  .addTo(controller);

contattiTimeline.from(".contattaci-titolo", { opacity: 0, duration: 1, delay:0.3 });
contattiTimeline.from(".illustrazione-contatti", {
    duration: 0.5,
    scale: 0,
    rotation:-180,
  });
contattiTimeline.from(".form-group", { opacity: 0, stagger: 0.3 });
contattiTimeline.from("button", { opacity:0, scale:2, duration: 0.5});
