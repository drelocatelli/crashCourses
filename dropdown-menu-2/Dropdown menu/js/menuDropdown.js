let dropdown = document.querySelectorAll('li[data-target]');
dropdown.forEach(function(item){
      let a = item.querySelector('a');
      a.href = "javascript:void(0);";
      a.innerHTML = `${a.innerHTML} <i class="fas fa-caret-right"></i>`;

      item.onclick = function(e){
            showMenuDrop(e);
      }

      item.onmouseleave = function(e){
            let elementOff = e.srcElement.querySelector('ul');
            elementOff.style.display = "none";
      }

      function showMenuDrop(e){
            let elementClicked = e.srcElement.nextElementSibling;
            if (elementClicked.style.display === "block") {
                  elementClicked.style.display = "none";
            } else {
                  elementClicked.style.display = "block";
            }    
      }
      
});