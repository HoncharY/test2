import { Observable } from 'rxjs';
import {Component} from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const generator = (text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      return text
    }

    const observable = new Observable(subscriber => {
        setInterval(() => {
          subscriber.next(generator())

        }, 3000)
      });
      observable.subscribe({

        next(record){
          const empty_plural = String(record)
          const num = Number(String(record))
          const palindrome = String(record).split("").reverse().join("")
          const numEL = parseInt(palindrome.replace(/[^\d]/g,''))
          if(empty_plural.includes("0")){
            console.log("")
          }
          else if(num==numEL){
            console.log("%c"+record,"color:blue")
          }
          else if(palindrome==record){
            console.log("%c"+record,"color:red")
          }
          else if(/^[0-9]+$/.test(String(num))){
            console.log("%c"+record,"color:blue")
          }
          else{
            console.log(record)
          }

        },

      });





  }
}

