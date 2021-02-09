scrollUI = () => {                              // Oversees navbar and footer behavior

    navBehavior = nav =>{  //Oversees navbar behavior

        showMain = () => {                                //Shows button and logo
            let logo = document.getElementById("logo");
            let button = logo.nextElementSibling;
            logo.style.maxHeight = "500px"
            logo.style.margin = 50 + "px";
            button.style.maxHeight = "500px"
            button.style.margin = 200 + "px";
        }
    
        hideMain = () => {                                //Hides button and logo
            let logo = document.getElementById("logo");
            let button = logo.nextElementSibling;
            logo.style.maxHeight = 0;
            logo.style.margin = -80 + "px";
            button.style.maxHeight = 0;
            button.style.margin = -80 + "px";
        
        }

        hideNav = () => {
            nav.style.marginTop="-200px"
        }
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //Hides navbar when user scroll is all the way up
            nav.style.marginTop = "-20px";
            nav.style.marginLeft = 0;
            nav.style.width = "100%";
            hideMain();
        } else {                                           //Shows navbar when user scrolls is all the way down
            nav.style.margin = "100px";
            nav.style.width = "80%";
            showMain();
        }
    }

    footerBehavior = foot => {  //Oversees footer behavior
        
        if (document.documentElement.scrollTop < 3500) { //scrollTop's value can be changed here depending on the content between navbar/footer
            foot.style.marginTop="340px";
        } else {
            foot.style.marginTop="20px";
            hideNav();
        }
    }

    let navbar = document.querySelector(".navbar");
    let footer = document.querySelector(".footer");
    navBehavior(navbar);
    footerBehavior(footer);
    
}

window.onscroll = () => {scrollUI()};
