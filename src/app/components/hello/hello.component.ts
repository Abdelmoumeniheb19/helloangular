import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/helloservices/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit{
  helloMessage: string | undefined="";

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.getHelloMessage();
    console.log("this the helloMessage : "+this.helloMessage);
  }

  getHelloMessage(): void {
    this.helloService.getHelloMessage()
      .subscribe(response => {
        console.log(response);
        this.helloMessage = response.message;
      });
  }
}
