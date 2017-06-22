import { Component, Input } from '@angular/core';
import { ClipsService } from './clips.service';
import { ReelTitle } from './reelTitle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  @Input()
  
  // 02-06-2017
  allClips: any;
  groupedVideoClips: any;

  calculateTotalFFPAL: any;
  calculateTotalFFNTSC: any;
  calculateframeRatingPAL: any;
  calculateframeRatingNTSC: any;

  //16-06-2017
  totalTimeTest:any;

  addClips: any;
  
  
  constructor(private _clipsService: ClipsService) {}

  ngOnInit() { 
    this.allClips = this._clipsService.getAllClips();
    this.groupedVideoClips =  this._clipsService.createStandardClips();
    this.calculateTotalFFPAL = this._clipsService.calculateTotalFFPAL();
    //this.calculateTotalFFNTSC = this._clipsService.calculateTotalFFNTSC();

    this.calculateframeRatingPAL = this._clipsService.calculateframeRatingPAL("SD", "PAL");
    this.calculateframeRatingNTSC = this._clipsService.calculateframeRatingNTSC("SD", "NTSC");

    //16-06-2017
    this.totalTimeTest = this._clipsService.calculateTimeTest();

    console.log(this.groupedVideoClips)
    console.log(this.calculateframeRatingPAL);
    console.log(this.calculateframeRatingNTSC); 
    //console.log(Object.keys(this.groupedVideoClips).length);

  }

  reel: ReelTitle ={
    title1:'Reel Name 1',
    title2:'Reel Name 2',
    title3:'Reel Name 3',
    title4:'Reel Name 4'
  }
  

  
  // end
  title = 'Reel List from Collection of Video Clips';
  standards = ["NTSC", "PAL"];
  definitions = ["HD", "SD"];

  newvalue = {
      Standard:"",
      Definition: "",
      Name: "",
      Description: ""
  }

  reelNameLabel1:boolean = true;
  editReelNameLabel1:boolean = false;
  reelNameEditBtn1: boolean = true;
  reelNameSaveBtn1: boolean = false;

  reelNameLabel2:boolean = true;
  editReelNameLabel2:boolean = false;
  reelNameEditBtn2: boolean = true;
  reelNameSaveBtn2: boolean = false;

  reelNameLabel3:boolean = true;
  editReelNameLabel3:boolean = false;
  reelNameEditBtn3: boolean = true;
  reelNameSaveBtn3: boolean = false;

  reelNameLabel4:boolean = true;
  editReelNameLabel4:boolean = false;
  reelNameEditBtn4: boolean = true;
  reelNameSaveBtn4: boolean = false;

  newReelName1:string = this.reel.title1;
  newReelName2:string = this.reel.title2;
  newReelName3:string = this.reel.title3;
  newReelName4:string = this.reel.title4;

  editReelNameTitle(reel){
    if(reel === "reel1") {
      this.reelNameLabel1 = false;
      this.editReelNameLabel1 = true;
      this.reelNameEditBtn1 = false;
      this.reelNameSaveBtn1 = true;
      this.newReelName1 = this.reel.title1;
    } else if (reel === "reel2") {
      this.reelNameLabel2 = false;
      this.editReelNameLabel2 = true;
      this.reelNameEditBtn2 = false;
      this.reelNameSaveBtn2 = true;
      this.newReelName2 = this.reel.title2;
    } else if (reel === "reel3") {
      this.reelNameLabel3 = false;
      this.editReelNameLabel3 = true;
      this.reelNameEditBtn3 = false;
      this.reelNameSaveBtn3 = true;
      this.newReelName3 = this.reel.title3;
    } else  {
      this.reelNameLabel4 = false;
      this.editReelNameLabel4 = true;
      this.reelNameEditBtn4 = false;
      this.reelNameSaveBtn4 = true;
      this.newReelName4 = this.reel.title4;
    }
    
  }


  saveReelNameTitle(reel){
    if(reel === "reel1") {
      this.reelNameLabel1 = true;
      this.editReelNameLabel1 = false;
      this.reelNameEditBtn1 = true;
      this.reelNameSaveBtn1 = false;
      this.newReelName1 = this.newReelName1;
    } else if (reel === "reel2") {
      this.reelNameLabel2 = true;
      this.editReelNameLabel2 = false;
      this.reelNameEditBtn2 = true;
    this.reelNameSaveBtn2 = false;
      this.newReelName2 = this.newReelName2;
    } else if (reel === "reel3") {
      this.reelNameLabel3 = true;
      this.editReelNameLabel3 = false;
      this.reelNameEditBtn3 = true;
      this.reelNameSaveBtn3 = false;
      this.newReelName3 = this.newReelName3;
    } else  {
      this.reelNameLabel4 = true;
      this.editReelNameLabel4 = false;
      this.reelNameEditBtn4 = true;
      this.reelNameSaveBtn4 = false;
      this.newReelName4 = this.newReelName4;
    }
  }


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
  
  addClipsPALSD () {
    this._clipsService.addClipsPALSD(this.newvalue.Standard, this.newvalue.Definition, this.newvalue.Name, this.newvalue.Description);
    
  }

  addClipsPALHD () {
    this._clipsService.addClipsPALHD(this.newvalue.Standard, this.newvalue.Definition, this.newvalue.Name, this.newvalue.Description);
  }

  addClipsNTSCSD () {
    this._clipsService.addClipsNTSCSD(this.newvalue.Standard, this.newvalue.Definition, this.newvalue.Name, this.newvalue.Description);
  }

  addClipsNTSCHD () {
    this._clipsService.addClipsNTSCHD(this.newvalue.Standard, this.newvalue.Definition, this.newvalue.Name, this.newvalue.Description);
  }

  //find video clips Definition 
  /*getClipsDefinition(){ 
    this._clipsService.readAll()
      .subscribe((data) => {
        this.clips = data;
        this.clipsDefinition = [];

        for (var val in this.clips) {
            var obj = this.clips[val];
            this.clipsDefinition.push(obj.Definition);
        }
        console.log(this.clipsDefinition);
      })
  }*/


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

  
}
