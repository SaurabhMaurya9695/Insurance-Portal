import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FinacialService } from 'src/app/services/finacial.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-finacial',
  templateUrl: './finacial.component.html',
  styleUrls: ['./finacial.component.css']
})
export class FinacialComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private finacialService : FinacialService


  ) {}

  
   Finacial = [
    {
      service_name:'',
      service_description : '',
      service_type : '',
      service_status : ''
    }
  ]


  ngOnInit(){
    const token = this.authService.getToken();
    if(token != null){
      this.finacialService.getFinacial().subscribe({
        next:(data : any)=>{
          console.log(data);
          this.Finacial = data;
        },
        error:(err : any)=>{
          console.log(err);
        }
      })
    }else{
      console.log("token is null")
    }
  }

  formData = {
    user_id : '',
    service_id : '',
    service_name : ''
  }
  public apply(id:any , name : any){
    Swal.fire({
      title: 'Do you want to Apply the changes?',
      showCancelButton: true,
      confirmButtonText: 'Apply',
    }).then((result) => {
      if (result.isConfirmed) {
        const user = this.authService.getUser();
        this.formData.user_id = user.user_id;
        this.formData.service_id = id ;
        this.formData.service_name = name;
        this.finacialService.applyForm(this.formData).subscribe({
          next:(data :any)=>{
            console.log(data);
            Swal.fire(`Applied Succesfully! and Your Status is ${data.application_status}`, '', 'success');
          },
          error:(err :any)=>{
            Swal.fire('Some error occured', '', 'info')
          }
        })
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
