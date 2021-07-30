import {Observable, observable} from "rxjs";
import {Component,OnInit} from "@angular/core";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
      const generator = (text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
        for (let i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length))
        let palindrome = text.split('').reverse().join("")
        if(palindrome == text){
          return console.log("%c"+text,"color:red")
        }
        if(/^[0-9]+$/.test(text)){
          return console.log("%c"+text,"color:blue")
        }
        if(text.includes("0")){
          return ''
        }
        return text
      }

      setInterval(function (){
        console.log(generator())
      },3000)
  }


}


