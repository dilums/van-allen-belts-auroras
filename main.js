gsap.registerPlugin(MotionPathPlugin);

const windParticleArray = Array(24)
  .fill(0)
  .map((_, i) => (i % 8) + 1);

const particleArray = Array(16)
  .fill(0)
  .map((_, i) => (i % 4) + 1);

gsap.utils.shuffle(windParticleArray);
gsap.utils.shuffle(particleArray);

const getWindParticlePath = (i) => {
  return `#solar-wind-${windParticleArray[i]}`;
};
const getPhotonePath = (i) => {
  return `#particle-path-${particleArray[i]}`;
};

const getMagneticFieldIndicatorPath = (i) => {
  return `#magnetic-field-${i + 1}`;
};

gsap.to(".magnetic-field-indicator", {
  duration: 10,
  ease: "linear",
  stagger: {
    each: 0.5,
    from: "random",
    repeat: -1
  },
  motionPath: {
    path: getMagneticFieldIndicatorPath,
    align: getMagneticFieldIndicatorPath,
    autoRotate: true,
    alignOrigin: [1, 0.5]
  }
});

var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
tl.set(".wind-particle", { opacity: 0 });
tl.set(".particle", { opacity: 0 });
tl.to("#sun-circ-1", { r: 140, duration: 1 }, "solar-wind-start");
tl.to("#sun-circ-2", { r: 120, duration: 1 }, "solar-wind-start");
tl.to("#sun-circ-3", { r: 90, duration: 1 }, "solar-wind-start");
tl.to(
  "#aurora-stop-1",
  { stopColor: "#17bd33", duration: 1 },
  "solar-wind-start+=2"
);
tl.to(
  "#aurora-stop-2",
  { stopColor: "#8527ff", duration: 1 },
  "solar-wind-start+=2"
);
tl.to(
  "#aurora-stop-1",
  { stopColor: "#111f46", duration: 1 },
  "solar-wind-start+=4.2"
);
tl.to(
  "#aurora-stop-2",
  { stopColor: "#111f46", duration: 1 },
  "solar-wind-start+=4.2"
);
tl.to("#sun-circ-1", { r: 124, duration: 1 }, "solar-wind-start+=3");
tl.to("#sun-circ-2", { r: 94, duration: 1 }, "solar-wind-start+=3");
tl.to("#sun-circ-3", { r: 69, duration: 1 }, "solar-wind-start+=3");
tl.to(
  ".wind-particle",
  {
    duration: 5,
    stagger: 0.1,
    motionPath: {
      path: getWindParticlePath,
      align: getWindParticlePath,
      autoRotate: true,
      alignOrigin: [1, 0.5]
    }
  },
  "solar-wind-start"
);
tl.to(
  ".wind-particle",
  {
    duration: 2.5,
    stagger: 0.1,
    opacity: 1
  },
  "solar-wind-start"
);
tl.to(
  ".wind-particle",
  {
    duration: 1.5,
    stagger: 0.1,
    opacity: 0
  },
  "solar-wind-start+=2.5"
);

tl.to(
  ".particle",
  {
    duration: 0.5,
    stagger: 0.2,
    opacity: 1
  },
  "solar-wind-start+=1.8"
);
tl.to(
  ".particle",
  {
    duration: 1.5,
    stagger: 0.2,
    opacity: 0
  },
  "solar-wind-start+=2.3"
);

tl.to(
  ".particle",
  {
    duration: 3,
    stagger: 0.2,
    motionPath: {
      path: getPhotonePath,
      align: getPhotonePath,
      autoRotate: true,
      alignOrigin: [1, 0.5]
    }
  },
  "solar-wind-start+=2"
);
