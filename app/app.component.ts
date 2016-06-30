import { Component }            from '@angular/core'
import { ROUTER_DIRECTIVES }    from '@angular/router'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES], 
    providers: [],
    template: `
        <div>
            <h3>Hello Angular 2 App</h3>
        </div>
    `
})

export class AppComponent {}
