import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void => *', [
    /// define from the void state (initial) to de final state
    animate(2000)
  ]),
  transition('* => void', [
    // as many transition as we wish - second from initial to void (remove)
    animate(500)
  ])
]);

export let translate20 = trigger('translate20', [
  //  state("void", style({ transform: 'translateX(20px)' })),
  transition(':enter', [
    animate(1500),
    style({ transform: 'translateX(20px)' })
  ]),
  transition(':leave', [
    animate('2s ease-in'),
    style({ transform: 'translateX(-100%)' })
  ])
]);

export let bouncer = trigger('bouncer', [
    transition(':leave', [
           animate(
             '0.5s ease-in',
             keyframes([
               style({
                 offset: 0.2,
                 opacity: 1,
                 transform: 'translateX(20px)'
               }),
               style({
                 offset: 1,
                 opacity: 0,
                 transform: 'translateX(-2000px)'
               })
             ])
           )
         ])
       ]);
