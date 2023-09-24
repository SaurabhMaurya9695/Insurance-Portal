import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Notification } from 'src/app/models/notification';
import { AuthService } from 'src/app/services/auth.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  member: Member;
  notifications: Notification[];
  params: Params;

  constructor(
    private authService: AuthService,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute
  ) {}

  
  Members = [
    {
      coverage_amount : '',
      premium_amount : '',
      coverage_start_date : '',
      coverage_end_date : '',
      policy_status : '',
      insurance_type : '',

    }
  ];

  ngOnInit(): void {
    // this.authService.getUsername().then((username: string) => {
    //   this.memberService.getMember(username).subscribe((member: Member) => {
    //     this.member = member;
    //   });
    // });

    
    if(this.authService.getToken() != null && this.authService.isLoggedIn() ){
      console.log("inside Dashboard")
      this.memberService.getMember().subscribe({
        next:(data: any)=>{
          console.log(data);
          this.Members = data;
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
    else{
      console.log("outside dashboard");
    }

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => (this.params = params)
    );
  }

  dismissNotification(id: string): void {
    let notifications = this.member.notifications.filter(
      (notification) => notification.id !== id
    );

    this.member.notifications = notifications;
    this.memberService.updateMember(this.member).subscribe();
  }
}
