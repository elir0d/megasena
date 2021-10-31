import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavparamService } from '../navparam.service';




@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  resultado: any;

  constructor(private router: Router, private ativatedRoute: ActivatedRoute, private navParamService: NavparamService) {
    this.resultado = this.navParamService.getNavData();

   }

  ngOnInit() {
  }


  novoSorteio(){
    this.router.navigate(['home']);
  }


}
