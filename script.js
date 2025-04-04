 const cursor = document.querySelector('.cursor');
 document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.clientX + 'px';
     cursor.style.top = e.clientY + 'px';
 });
 document.querySelectorAll('a, button, .post, #main').forEach(el => {
     el.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
     el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
 });

 const posts = document.querySelectorAll('.post');
 var like = document.querySelector('#like-part');
 posts.forEach(post => {
     let lastClick = 0;
     post.addEventListener('click', (e) => {
         if( lastClick == 0 || lastClick == 1) { 
             const heart = post.querySelector('.heart');
             heart.style.left = e.offsetX + 'px';
             heart.style.top = e.offsetY + 'px';
             like.style.color = '#ff2626';
             heart.classList.add('heart-animation');
             setTimeout(() => heart.classList.remove('heart-animation'), 1000);
             lastClick = 1;
         }
         
     });
 });

 let lastScroll = 0;
 window.addEventListener('scroll', () => {
     const currentScroll = window.pageYOffset;
     const nav = document.querySelector('nav');
     
     if (currentScroll > lastScroll && currentScroll > 100) {
         nav.classList.add('nav-hidden');
     } else {
         nav.classList.remove('nav-hidden');
     }
     lastScroll = currentScroll;
 });

 var space = document.querySelector('#space')

 space.addEventListener('mouseenter',function(){
     
     cursor.style.mixBlendMode =  'difference';
 })
 space.addEventListener('mouseleave',function(){
     
     cursor.style.mixBlendMode =  '';
 })