let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #8526E4;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #8526E4;">Me gusta programar y diseñar.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
