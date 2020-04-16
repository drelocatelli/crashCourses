function menuDesktop(){
      let dropdown = document.querySelectorAll('.desktop-nav li[data-target]');
      dropdown.forEach(function (item) {
            let a = item.querySelector('a');
            a.href = "javascript:void(0);";
            a.innerHTML = `${a.innerHTML} <i class="fas fa-caret-down"></i>`;


            window.onresize = function(e){

                  if(e.target.innerWidth >= 1270){
                        document.querySelector('.mobile-nav').style.display = "none";
                  }else{
                        document.querySelector('.mobile-nav').style.display = "block";
                  }

            }

            item.onclick = function (e) {
                  showMenuDrop(e);
            }

            item.onmouseleave = function (e) {
                  let elementOff = e.srcElement.querySelector('ul');
                  elementOff.style.display = "none";
            }

            function showMenuDrop(e) {
                  let elementClicked = e.srcElement.nextElementSibling;

                  if (elementClicked.style.display === "block") {
                    elementClicked.style.display = "none";
                  } else {
                    elementClicked.style.display = "block";
                  }
            }

      });

}

menuDesktop();



function menuMobile(){


      function mobileMenu() {
            let desktopNav = document.querySelector('.desktop-nav');
            let mobileNav = document.querySelector('.mobile-nav');
            let mobileNavUl = document.querySelector('.mobile-nav ul');

            mobileNav.innerHTML = desktopNav.innerHTML;
            mobileNav.style.display = "none";

            let hamburger = document.createElement('button');
            hamburger.classList.add('hamburger-menu');
            function returnIconType(type) {
                  if (type == "bars") { return hamburger.innerHTML = `<i class="fal fa-bars"></i>`; }
                  if (type == "close") { return hamburger.innerHTML = `<i class="fal fa-times fa-lg"></i>`; }
            }
            returnIconType("bars");


            hamburger.onclick = function () {
                  if (mobileNav.style.display == "block") {
                        returnIconType("bars")
                        mobileNav.style.display = "none";
                  } else {
                        returnIconType("close")
                        mobileNav.style.display = "block";
                  }

            }

       
            document.querySelector('header').appendChild(hamburger);

            
      }


      mobileMenu()


      let dropdown = document.querySelectorAll(".mobile-nav li[data-target]");
      let nodropdown = document.querySelectorAll(".mobile-nav li");
      let dropdownUl = document.querySelector('.mobile-nav ul');

      // window.onscroll = function () {
      //       if (window.onscroll) {
      //             dropdownUl.style.display = "none";
      //       }
      // } 

      nodropdown.forEach(function(item){
            if(!(item.dataset.target)){
                  item.onclick = function(e){
                        let link = e.target.lastElementChild.href;
                        window.location.href = link;
                  }
            }
      });

   

      dropdown.forEach(function(item){
            let a = item.querySelector('a');
            a.href = "javascript:void(0);";
            // a.innerHTML = `${a.innerHTML} <i class="fas fa-caret-down"></i>`;
            
            item.onclick = function(e){
                  if(e.toElement == "li"){
                        console.log('li')
                  }
                  showMenuDrop(item.querySelector("a"));
            }


            function showMenuDrop(e){
                  let elementClicked = e.parentElement.lastElementChild;

                  if (elementClicked.style.display === "block") {
                    elementClicked.style.display = "none";
                  } else {
                    elementClicked.style.display = "block";
                  }
            }
      });
}

menuMobile();



