import {Component, ViewChild, ElementRef} from "@angular/core";
import {ImageService} from "../../service/image-service";
import {Router} from "@angular/router";
import {Picture} from "../../entity/picture";
@Component({
  selector: 'F5Upload',
  templateUrl: 'feature5-upload.component.html',
  styleUrls: ['feature5-upload.component.css']
})

export class f5Upload{
  picture : any={};
  constructor(private imageService : ImageService, private router: Router){}
  ngOnInit(){
    this.picture = new Picture();
  }

  @ViewChild('ImageInput') inputEl:ElementRef;
  addImage(){
    let result: Picture;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.imageService.addImage(this.picture, inputEl.files.item(0))
      .subscribe(resultPicture=>{
        result = resultPicture
        if(result != null){
          this.router.navigate(['/f5list']);
        }else{
          alert("Error in uploading image")
        }
      });
  }
  onFileChange(event:any,product:any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    product.image = filename;
  }
}
