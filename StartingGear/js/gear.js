 // Moving the gear
        // The element is selected, add some properties to this GSAP method to rotate the gear infinitely. 
        gsap.from("#gear_outer",{
            transformOrigin:"50% 50%",
            duration: 10,
            rotation: 360,
            repeat: -100,
            ease: ""
            
        });

        // Make a gsap method to have the title text start from above the clipping circle.

        gsap.from("#main-text", {
            duration: 5,
            rotation: 720,
            ease:"expo",
            stagger: 0.5,
            x:-500,
            y:-380,
        });
       

   

        // Here, make a gsap method that sets each line on the bridge to start from underneath the clipping circle and transition to where it must go.
        // Note, you'll likely need to add a class to those lines in order to select them with GSAP effectively.
        gsap.from(".stagger", {
            duration: .5,
            stagger: .5,
            delay: 1,
            y:300,
            ease: "expo",
        });

        // Bonus: identify the outer ring of the logo (inside the gear shape) by placing an ID on that svg path.
        // Make a gsap method to make it periodically "pop" bin and out of place.
        gsap.from("#inner_ring", {
            duration: 1.05,
            transformOrigin: "50% 50%",
            delay: 1,
            scale: 1.08,
            repeat: -1,
            ease:"easeOutStrong",
            repeatDelay: 2,
            yoyo: true,

        });
       
    