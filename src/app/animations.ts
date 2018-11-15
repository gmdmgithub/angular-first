import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
  useAnimation
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition("void => *", [
    /// define from the void state (initial) to de final state
    animate(2000)
  ]),
  transition("* => void", [
    // as many transition as we wish - second from initial to void (remove)
    animate(500)
  ])
]);

export let translate20 = trigger("translate20", [
  //  state("void", style({ transform: 'translateX(20px)' })),
  transition(":enter", [
    animate(1500),
    style({ transform: "translateX(20px)" })
  ]),
  transition(":leave", [
    animate("2s ease-in"),
    style({ transform: "translateX(-100%)" })
  ])
]);

export let bouncer = trigger("bouncer", [
  transition(":leave", [
    animate(
      "0.5s ease-in",
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: "translateX(20px)"
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: "translateX(-2000px)"
        })
      ])
    )
  ])
]);

export let fade2 = trigger("fade2", [

    transition(":enter", [ //could be void => *
        /// define from the void state (initial) to de final state
        style({ opacity: 0 }), //starts from 0 to origin
        animate(2000)
    ]),
    transition("* => void", [ //"leave" - could be leave
        // as many transition as we wish - second from initial to void (remove)
        animate(500, style({ opacity: 0 }))//during animation change
    ])
]);

let fadeAnimation = animation([
    
    style({ 
        opacity: 0,
        height: '200px',
        backgroundColor: 'yellow' 
    }), 
    animate(2000)
])

//the same as fade2 but with function
export let fadeWithFunction = trigger("fade3", [
  transition(":enter", useAnimation(fadeAnimation)),
  transition("* => void", [
    //"leave" - could be leave
    // as many transition as we wish - second from initial to void (remove)
      animate(500, style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green' 
        })) //during animation change
  ])
]);

export let toggle = 
    trigger('toggleHeight', [
        state('hide', style({
            height: '0px',
            opacity: '0',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            // display: 'none'
        })),
        state('show', style({
            height: '100px',
            opacity: '1',
            // display: 'block'
        })),
        transition('hide => show', animate('200ms ease-in')),
        transition('show => hide', animate('200ms ease-out'))
    ])