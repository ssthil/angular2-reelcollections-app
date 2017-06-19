import { Component } from '@angular/core';
import { ClipsService } from './clips.service';
import { ReelTitle } from './reelTitle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  // 02-06-2017
  allClips: any;
  groupedViseoClips: any;

  calculateTotalFFPAL: any;
  calculateTotalFFNTSC: any;
  calculateframeRatingPAL: any;
  calculateframeRatingNTSC: any;

<<<<<<< HEAD
  //16-06-2017
  totalTimeTest:any;
=======
  addClips: any;
  
>>>>>>> 4bcb2e7f4989c6e10b39b8f9175420f8536245d8
  
  constructor(private _clipsService: ClipsService) {}

  ngOnInit() { 
    this.allClips = this._clipsService.getAllClips();
    this.groupedViseoClips =  this._clipsService.createStandardClips();
    this.calculateTotalFFPAL = this._clipsService.calculateTotalFFPAL();
    //this.calculateTotalFFNTSC = this._clipsService.calculateTotalFFNTSC();

    this.calculateframeRatingPAL = this._clipsService.calculateframeRatingPAL("SD", "PAL");
    this.calculateframeRatingNTSC = this._clipsService.calculateframeRatingNTSC("SD", "NTSC");

    //16-06-2017
    this.totalTimeTest = this._clipsService.calculateTimeTest();

    //console.log(this.calculateTotalFFPAL);
    //console.log(this.calculateTotalFFNTSC);
    console.log(this.groupedViseoClips)
    console.log(this.calculateframeRatingPAL);
    console.log(this.calculateframeRatingNTSC); 

<<<<<<< HEAD
    //16-06-2017
    //console.log(this.totalTimeTest); 

    //this.getStandardClipsTime("PAL", "SD");
    //this.getStandardClipsTime("NTSC", "SD");

    this.getMinutes();
=======
    this.getStandardClipsTime("PAL", "SD");
    this.getStandardClipsTime("NTSC", "SD");

    this.addClips =  this._clipsService.addClips();
>>>>>>> 4bcb2e7f4989c6e10b39b8f9175420f8536245d8
  }

  reel: ReelTitle ={
    title1:'Selected clips for NTSC HD',
    title2:'Selected clips for NTSC SD',
    title3:'Selected clips for PAL SD',
    title4:'Selected clips for PAL HD'
  }
  

  
  // end
  title = '';

  clips = {};

  totalMinTime: number= 0;
  totalSecTime: number= 0;
  totalTime:number = 0;

  //test
  clipsDefinition:any[];
  clipsStandard:any[];
  clipsEndTimeArr:any[];

  //HD SD PAL NTSC
  clipsPALDefinitionSD:any[];
  clipsPALDefinitionHD:any[];
  clipsNTSCDefinitionSD:any[];
  clipsNTSCDefinitionHD:any[];

   clipsPALDefinitionSDlength: number;
   clipsPALDefinitionHDlength : number;
   clipsNTSCDefinitionSDlength: number;
   clipsNTSCDefinitionHDlength : number; 

  //reel
  reelHD:any[];
  reelSD:any[];

  //time
  hh:any[]; mm:any[]; ss:any[]; ff:any[]; totalHH:number; totalMM:number; totalSS:number; totalFF:string;
  


  //find video clips Definition 
  getClipsDefinition(){ 
    this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;
        this.clipsDefinition = [];

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
        this.clipsStandard = [];

        for(var val in this.clips) {
          var obj = this.clips[val];
          this.clipsStandard.push(obj.Standard);
        }
        console.log(this.clipsStandard);
        //length
       // console.log(this.clipsStandard.length);
      })
  }

  //add clip
  addNewClip(): any {
    //return this._clipsService.addClips();
    console.log(this._clipsService.addClips())
  } 

  //I navigate to the user interface and create a PAL SD Video Reel
  createStandardClips(clipStandard:string, clipDefinition:string) {
    this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;
        this.clipsPALDefinitionSD = [];
        this.clipsPALDefinitionHD = [];
        this.clipsNTSCDefinitionSD = [];
        this.clipsNTSCDefinitionHD = [];

        for(let val in this.clips) {
          let obj = this.clips[val];

          if(obj.Standard === clipStandard) {
            (obj.Definition === clipDefinition) ? this.clipsPALDefinitionSD.push(obj) : this.clipsPALDefinitionHD.push(obj);        
          }else {
            (obj.Definition === clipDefinition) ? this.clipsNTSCDefinitionSD.push(obj): this.clipsNTSCDefinitionHD.push(obj);
          }

        }
        console.log(this.clipsPALDefinitionSD);
        console.log(this.clipsPALDefinitionHD);
        console.log(this.clipsNTSCDefinitionSD);
        console.log(this.clipsNTSCDefinitionHD);

        this.clipsPALDefinitionSDlength = this.clipsPALDefinitionSD.length;
        this.clipsPALDefinitionHDlength = this.clipsPALDefinitionHD.length;
        this.clipsNTSCDefinitionSDlength = this.clipsNTSCDefinitionSD.length;
        this.clipsNTSCDefinitionHDlength = this.clipsNTSCDefinitionHD.length;
        
        
      })
  }

  //frames count
  framesRatingCount(definition, framesCount) {
      
      var quotient, remainder;
      this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;
        this.totalFF;
    
        if(definition === "PAL") {
          quotient = Math.floor(framesCount/25) < 10 ? "0"+Math.floor(framesCount / 25) : Math.floor(framesCount / 25);
          remainder = (framesCount % 25) < 10 ? "0"+Math.floor(framesCount % 25) : Math.floor(framesCount % 25);
        } else {
          quotient = Math.floor(framesCount/30) < 10 ? "0"+Math.floor(framesCount / 30) : Math.floor(framesCount / 30);
          remainder = (framesCount % 30) < 10 ? "0"+Math.floor(framesCount % 30) : Math.floor(framesCount % 30);
        }
        
        var totalFF = quotient+":"+remainder;
        console.log(totalFF);

      });
  
  }
  //total duration displayed is 00:02:11:01 when I add all the PAL SD video clips
  //total duration displayed is 00:00:54:08 when I add all the NTSC SD video clips
  getStandardClipsTime(clipStandard:string, clipDefinition:string) { 
    
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
        

        for (let val in this.clips) { 
            let obj = this.clips[val];
            
           if(obj.Standard === clipStandard && obj.Definition === clipDefinition) {  
              this.clipsEndTimeArr.push(obj.End);
           } 
           
        }
        for(let i=0; i<this.clipsEndTimeArr.length; i++) {
          let clipsSplitEndTimeArr = this.clipsEndTimeArr[i].split(":");
          this.hh.push(clipsSplitEndTimeArr[0]);
          this.mm.push(clipsSplitEndTimeArr[1]);
          this.ss.push(clipsSplitEndTimeArr[2]);
          
        }
        for(let i=0; i<this.ss.length; i++) { 
          this.totalHH +=parseFloat(this.hh[i]);
          this.totalMM +=parseFloat(this.mm[i]);
          this.totalSS +=parseFloat(this.ss[i]); 
          
        }
        //console.log(this.clipsEndTimeArr); 
        //console.log(this.hh);
        //console.log(this.totalHH);
        //this.totalHH = 1;
        var hours = Math.floor(this.totalHH / 3600)* 60 < 10 ? ("00" + Math.floor(this.totalHH / 3600) * 60).slice(-2) : Math.floor(this.totalHH / 3600)* 60;
        console.log("Hours: "+ hours);
       // console.log(this.mm);
        //console.log(this.totalMM);
        var minutes = ("00" + Math.floor(((this.totalMM*60) % 3600) / 60) * 60).slice(-2);
        console.log("Mins: "+minutes);
       // console.log(this.ss);
       // console.log(this.totalSS);
        var seconds = ("00" + (this.totalSS % 3600) ).slice(-2);
        console.log(seconds)
        var totalMinutes = Number(hours)+Number(minutes)+Number(seconds);
       // console.log(this.ff);
        //console.log(this.totalFF);
        return (totalMinutes-(totalMinutes%=60))/60 + (9 < totalMinutes?':':':0')+ totalMinutes;

      });
  }

  getMinutes() {
      var minutes1 = 70;
      var minsQuotient = Math.floor( minutes1/ 60) < 10 ? "0"+Math.floor(minutes1 / 60) : Math.floor(minutes1 / 60);
      var minsRemainder = (minutes1 % 60) < 10 ? "0"+ Math.floor(minutes1 % 60) : Math.floor(minutes1 % 60);
          
      var totalTime = "00:"+minsQuotient+":"+minsRemainder+":00";

      var minutes2 = 53;
      var minsQuotient1 = Math.floor(minutes2 / 60) < 10 ? "0"+Math.floor(minutes2 / 60) : Math.floor(minutes2 / 60);
      var minsRemainder1= (minutes2 % 60) < 10 ? "0"+ Math.floor(minutes2 % 60) : Math.floor(minutes2 % 60);
          
      var totalTime1 = "00:"+minsQuotient1+":"+minsRemainder1+":00";
        //return totalMinutes
      //console.log(totalTime);
      //console.log(totalTime1);
  }

  
}
