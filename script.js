//pages

document.querySelectorAll('.logo').forEach((logo)=>{

      logo.addEventListener('click', ()=> {

            document.querySelector('.front-page').style.display = 'block'

            document.querySelector('.login-page').style.display = 'none'

            document.querySelector('.signup-page').style.display = 'none'

      });

});

document.querySelectorAll('.login').forEach((loginBtn)=>{

      loginBtn.addEventListener('click', ()=> {

            document.querySelector('.front-page').style.display = 'none'

            document.querySelector('.login-page').style.display = 'block'

            document.querySelector('.signup-page').style.display = 'none'

      });

});

document.querySelectorAll('.signup').forEach((signupBtn)=>{

      signupBtn.addEventListener('click', ()=> {

            document.querySelector('.front-page').style.display = 'none'

            document.querySelector('.login-page').style.display = 'none'

            document.querySelector('.signup-page').style.display = 'flex'

      });

});

//end of the pages

//Navigation 

//if else statement added later 

//then dorpdownItem rotate added


const dropDownItems = document.querySelectorAll('.dropdown-hover')


      if(window.innerWidth < 1000) {

      
            const menuIcon = document.querySelector('.menu');

            const navbar = document.querySelector('.navbar')

            menuIcon.addEventListener('click', ()=>{

                  navbar.classList.toggle('change')

                  if(!navbar.classList.contains('change')) {

                        document.querySelectorAll('.nav-dropdown').forEach((dropdown)=> {

                              dropdown.style.left = '-20rem'

                        })

                  }

            });

            document.querySelectorAll('.show-dropdown').forEach((link)=>{

                  link.addEventListener('click', ()=> {

                        link.nextElementSibling.style.left = '0'

                  });

            });

            document.querySelectorAll('.dropdown-heading-link').forEach((headinglink)=> {

                  headinglink.addEventListener('.click', ()=> {

                        headinglink.parentElement.parentElement.style.left = '-20rem'

                  });

            });


      }     else {

                  dropDownItems.forEach((dropDownItem)=>{

                        dropDownItem.addEventListener('mouseover', ()=>{
            
                              dropDownItem.lastElementChild.style.cssText = ' opacity:1; visibility:visible '
            
                              document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right , #066399, #2f8fdf, #066399)'
                              
                              dropDownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
            
                        });
             
                        dropDownItem.addEventListener('mouseout', ()=>{
            
                              dropDownItem.lastElementChild.style.cssText = ' opacity:0; visibility:hidden '
            
                              document.querySelector('.navbar-wrapper').style.background = 'none'

                              dropDownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
            
                        });
            
                  });

            }


window.addEventListener('resize', ()=> {

      window.location.reload()

});


// End of the Navigation  

