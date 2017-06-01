import { Component } from '@angular/core';
import { ClipsService } from './clips.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  clips = {};
  endTimeMinTotal = [];
  endTimeSecTotal = [];
  totalMinTime: number= 0;
  totalSecTime: number= 0;
  totalTime:number = 0;

  //test
  clipsDefinition:any[] = [];
  clipsStandard:any[] = [];
  clipsEndTimeArr:any[];

  //time
  hh:any[]; mm:any[]; ss:any[]; ff:any[]; totalHH:number; totalMM:number; totalSS:number; totalFF:number;
  
  constructor(private _clipsService: ClipsService) {}

  ngOnInit() {
    
    this.getVideoClips();
    this.getClipsDefinition();
    this.getClipsStandard();
    
    this.getSameStandardClips("PAL", "SD");
    this.getSameStandardClips("NTSC", "SD");
    
  }

  //video clips 
  getVideoClips() {
    this._clipsService.readAll()
      .subscribe((res) => {
        this.clips = res; 
        //console.log(this.clips); 
      });
      
  }

  //find video clips Definition 
  getClipsDefinition(){
    this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;

        for (var val in this.clips) {
            var obj = this.clips[val];
            this.clipsDefinition.push(obj.Definition);
        }
        console.log(this.clipsDefinition);
        //length
        //console.log(this.clipsDefinition.length);
      })
  }

  //find video clips Standard 
  getClipsStandard(){
    this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;

        for(var val in this.clips) {
          var obj = this.clips[val];
          this.clipsStandard.push(obj.Standard);
        }
        console.log(this.clipsStandard);
        //length
       // console.log(this.clipsStandard.length);
      })
  }

  //total duration displayed is 00:02:11:01 when I add all the PAL SD video clips
  //total duration displayed is 00:00:54:08 when I add all the NTSC SD video clips
  getSameStandardClips(clipStandard:string, clipDefinition:string) { 
    
     this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;
        this.clipsEndTimeArr=[];
        this.hh = [];
        this.mm = [];
        this.ss =[];
        this.ff =[];

        this.totalHH = 0;
        this.totalMM = 0;
        this.totalSS = 0;
        this.totalFF = 0;

        for (var val in this.clips) { 
            var obj = this.clips[val];
            
           if(obj.Standard === clipStandard && obj.Definition === clipDefinition) {  
              this.clipsEndTimeArr.push(obj.End);
           } 
           
        }
        for(var i=0; i<this.clipsEndTimeArr.length; i++) {
          var clipsSplitEndTimeArr = this.clipsEndTimeArr[i].split(":");
          this.hh.push(clipsSplitEndTimeArr[0]);
          this.mm.push(clipsSplitEndTimeArr[1]);
          this.ss.push(clipsSplitEndTimeArr[2]);
          this.ff.push(clipsSplitEndTimeArr[3]);
        }
        for(var i=0; i<this.ss.length; i++) { 
          this.totalHH +=parseFloat(this.hh[i]);
          this.totalMM +=parseFloat(this.mm[i]);
          this.totalSS +=parseFloat(this.ss[i]);
          this.totalFF +=parseFloat(this.ff[i]);
        }
        console.log(this.clipsEndTimeArr); 
        //console.log(this.hh);
        console.log(this.totalHH);
       // console.log(this.mm);
        console.log(this.totalMM);
       // console.log(this.ss);
        console.log(this.totalSS);
       // console.log(this.ff);
        console.log(this.totalFF);

      });
  }
  
}
