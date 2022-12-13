
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;

let monster =
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/4000f099-9e55-4048-848d-4e40a9fdf16e/q7EsA2gz9b.json"
        });
        
        animationMonster.addEventListener('click', function() {
            monster.playSegments([110,210],true);
            
        });

        animationMonster.addEventListener('mouseleave', function() {
            monster.playSegments([99,211],true);
        });

        animationMonster.addEventListener('mouseenter', function() {
            monster.playSegments([256,302 ],true);
        });


        let toggle = 
            bodymovin.loadAnimation({
                  container: animationToggle,
                  renderer: 'svg',
                  loop: false,
                  autoplay: false,
                  path: "https://lottie.host/ea226ccc-2e7a-4841-802e-e970c6ed493c/6ThN3YrZde.json"
                });
                
              
                animationToggle.addEventListener('click', function(){
                    if (toggle_c == 0) {
                        toggle.playSegments([21,60], true);
                        let toggle_c = toggle_c + 1;
                    } else {
                        
                        toggle.playSegments([21,60], true);

                    }
                    
                });
               