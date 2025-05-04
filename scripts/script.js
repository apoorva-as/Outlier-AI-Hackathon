function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("page1/movie image/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    console.log("Image path:", `page1/movie image/${bg}`);
  
  
    contents.forEach(content => {
        content.classList.remove ('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // $(document).ready(function(){
  //     var $scramble = $(".etflix-text");
  //     $scramble.scramble(1500, 15,"alphabet", true);
  // });
  
  // var t1 = gsap.timeline();
  // t1.to(".etflix-text",{
  //     opacity: 0,
  //     delay: 2.5,
  // })
  // .to(".intro-container",{
  //     opacity: 0,
  //     duration: 1,
  //     ease:"Expo.easeInOut"
  // }).to(".intro",{
  //     y: "-100%",
  //     duration:1,
  // })
  
  
  
  window.addEventListener("load", () => {
    
      setTimeout(() => {
        // Scroll to main section
        document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    
        // After scroll starts, hide the intro
        setTimeout(() => {
          const intro = document.getElementById("intro");
          intro.classList.add("hidden");
    
          // Actually remove it from flow after fade
          setTimeout(() => {
            intro.style.display = "none";
          }, 1000); // Wait till fade-out transition finishes
        }, 1000); // Start hiding 1s after scroll
      }, 3000); // Intro visible for 3 seconds
    });
  
  
  
  
    document.querySelectorAll('.faq').forEach(faq => {
        faq.addEventListener('click', () => {
          faq.classList.toggle('open');
          const toggle = faq.querySelector('.toggle');
          toggle.textContent = faq.classList.contains('open') ? '−' : '+';
        });
      });
    
    