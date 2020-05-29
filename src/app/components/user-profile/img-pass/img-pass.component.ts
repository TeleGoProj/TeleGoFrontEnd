import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/app/services/profile.service';
import { PhoneUser } from 'src/app/model/PhoneUser';

@Component({
  selector: 'app-img-pass',
  templateUrl: './img-pass.component.html',
  styleUrls: ['./img-pass.component.css']
})
export class ImgPassComponent implements OnInit {

  selectedFile: File;
  profileImage: any;

  @Input()
  user: PhoneUser;

  constructor(private http: HttpClient, private profileService: ProfileService) { }

  ngOnInit() {
    if(this.user.image)
    this.profileImage = 'data:image/jpeg;base64,' + this.user.image;
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const uploadedImageData = new FormData();
    uploadedImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.profileService.uploadedImage = uploadedImageData;
    
    var reader = new FileReader();      
    reader.readAsDataURL(this.selectedFile); 
    reader.onload = (_event) => { 
      this.profileImage = reader.result; 
    }
  }
}
