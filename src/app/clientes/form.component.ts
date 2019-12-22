import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor(private clienteservice: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public create(): void {
    this.clienteservice.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']);
        Swal.fire('Nuevo cliente creado', `Cliente ${this.cliente.nombre} creado!`, 'success');
      }
      );
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.clienteservice.getCliente(id).subscribe( (cliente) => this.cliente = cliente);
        }
      }
    );
  }


}
