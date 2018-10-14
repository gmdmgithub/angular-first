import {Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html'
    //template moved to seperate file
    // template: `<h2 > {{ title }} and numnber: {{ number |number }} 
    //             dec num: {{ decNumber|number:'1.2-2'}} Price: {{ price|currency:'EUR'}}
    //             Reldate: {{ releaseDate|date:'short'}}</h2>
    // <div (click)="divClicked($event)" class="container">
    // <div *ngIf="courses.length >0">
    //     <ul [style.backgroundColor]="isActive ? 'blue':'green'">
    //         <li *ngFor="let course of courses">
    //             {{ course | uppercase }}
    //         </li>
    //     </ul>
    // </div>
    // <div *ngIf="courses.length == 0">
    //     <h2> There is no courses!</h2>
    // </div>
    // <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Show me more</button>
    // <br>
    // <input (keyup)="myKeyUp($event)" />
    // <br>
    // <input #someValue (keyup.enter)="myKeyUpEnter($event, someValue.value)" />
    // <br>
    // <input [value]="email" (keyup.enter)="email=$event.target.value; myEnter()" />
    // <br>
    // <input [(ngModel)]="email2" (keyup.enter)="myEnterNgModel()" />
    // <h2>{{ text |summary:'60'}}</h2>
    // </div> 
    // `
    
})
export class CoursesCompoent{
    title = "Courses compoenent - my own title";
    number = 12345;
    decNumber = 1243.34567;
    price = 12453.456;
    releaseDate = new Date('2018-02-21');
    courses =[];
    isActive= false;
    email = "gm@good.com";
    email2 = "gm@best.com";

    text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ipsum voluptate exercitationem numquam! Provident quos ratione, ab nostrum id eveniet necessitatibus eligendi molestiae sit possimus et vel, ducimus, reiciendis quidem veritatis a veniam nam error dolorem omnis iste nihil itaque. Vel eligendi, illo corporis rem laboriosam minima officiis hic qui. Adipisci, dicta! Ex reprehenderit corporis laborum pariatur harum sapiente accusamus hic expedita inventore. Magni dolorum aperiam tenetur hic voluptas fuga?';

    constructor(service: CoursesService){
        // let service = new CoursesService(); //simple way
        this.courses = service.getCourses();
    }

    onSave($event){
        
        console.log('button clecked!',$event);
        //jeśli to będzie targetem przestanie propagować wyżej
        //$event.stopPropagation();
        
    }
    divClicked($event){
        console.log('div clecked!',$event);
    }

    //old way for enter
    myKeyUp($event){
        //console.log('input key Up!',$event);
        ///enter was pressed
        if($event.keyCode === 13){
            console.log('Enter was pressed!',$event);
        }
    }

    //better new way
    myKeyUpEnter($event, someValue){
        console.log('input Enter!',$event.target.value);
        //better way to get value
        console.log('input Enter! some value',someValue);
    }

    myEnter(){
        console.log('email',this.email);
        
    }
    myEnterNgModel(){
        console.log('email',this.email2);
    };
    onAdd(course){
        this.courses.push(course);
    }
    removeCource(course){
        const index = this.courses.indexOf(course);
        console.log(index);
        
        this.courses.splice(index,1);
    }
    removeChange(course){
        const index = this.courses.indexOf(course);
        this.courses[index] = this.courses[index] + ' updated';
    }   

}