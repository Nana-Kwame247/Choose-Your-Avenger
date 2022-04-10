


    // function showImage(){
        
      

    //     document.querySelector('#color-cyan').style.backgroundImage = 'url(css/images/giphy.gif)'

        
    // }
  

    document.querySelector('#blackpanther').addEventListener('click', showHeroBlackPanther);
    document.querySelector('#blackwidow').addEventListener('click', showHeroBlackWidow);
    document.querySelector('#captainamerica').addEventListener('click', showHeroCaptainAmerica);
    document.querySelector('#captainmarvel').addEventListener('click', showHeroCaptainMarvel);
    document.querySelector('#hulk').addEventListener('click', showHeroHulk);
    document.querySelector('#ironman').addEventListener('click', showHeroIronMan);
    document.querySelector('#drstrange').addEventListener('click', showHeroDrStrange);
    document.querySelector('#thor').addEventListener('click', showHeroThor);
    document.querySelector('#antman').addEventListener('click', showHeroAntMan);

    function showHeroBlackPanther(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/blackpanther.webp)'
        document.querySelector('.heroName').innerText = `Black Panther`
    }

    function showHeroBlackWidow(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/blackwidow.webp)'
        document.querySelector('.heroName').innerText = `Black Widow`
    }
    function showHeroCaptainAmerica(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/captainamerica.webp)'
        document.querySelector('.heroName').innerText = `Captain America`
    }
    function showHeroCaptainMarvel(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/captainmarvel.webp)'
        document.querySelector('.heroName').innerText = `Captain Marvel`
    }
    function showHeroHulk(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/hulk.webp)'
        document.querySelector('.heroName').innerText = `Hulk`
    }
    function showHeroIronMan(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/ironman.webp)'
        document.querySelector('.heroName').innerText = `Iron Man`
    }
    function showHeroDrStrange(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/strange.webp)'
        document.querySelector('.heroName').innerText = `Dr Strange`
    }
    function showHeroThor(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/thor.webp)'
        document.querySelector('.heroName').innerText = `Thor`
    }
    function showHeroAntMan(){
        document.querySelector('.bigscreen').style.backgroundImage = 'url(css/images/antman.webp)'
        document.querySelector('.heroName').innerText = `Ant Man`
    }