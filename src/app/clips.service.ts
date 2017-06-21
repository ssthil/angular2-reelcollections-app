import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClipsService {

  url:string;
  //https://jsonplaceholder.typicode.com/posts

  constructor(private http: Http) { 
    this.url ="http://demo7909896.mockable.io/";
  }

  readAll(): Observable<any[]> {
    return this.http.get(this.url)
      .map(response => response.json());
  }

  //02/06/2017
  private videoclips = {
  "Clip1": {
    "Name": "Bud Light",
    "Description": "A factory is working on the new Bud Light Platinum",
    "Standard": "PAL",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 30: 12"
  },
  "Clip2": {
    "Name": "M&M's",
    "Description": "At a party, a brown-shelled M&M is mistaken for being naked. As a result, the red M&M tears off its skin and dances to \"Sexy and I Know It\" by LMFAO",
    "Standard": "NTSC",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 15: 27"
  },
  "Clip3": {
    "Name": "Audi",
    "Description": "A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards",
    "Standard": "PAL",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 01: 30: 00"
  },
  "Clip4": {
    "Name": "Chrysler",
    "Description": "Clint Eastwood recounts how the automotive industry survived the Great Recession",
    "Standard": "PAL",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 10: 14"
  },
  "Clip5": {
    "Name": "Fiat",
    "Description": "A man walks through a street to discover a beautiful woman (Catrinel Menghia) standing on a parking space, who proceeds to approach and seduce him, when successfully doing so he then discovered he was about to kiss a Fiat 500 Abarth",
    "Standard": "NTSC",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 18: 11"
  },
  "Clip6": {
    "Name": "Pepsi",
    "Description": "People in the Middles Ages try to entertain their king (Elton John) for a Pepsi. While the first person fails, a mysterious person (Season 1 X Factor winner Melanie Amaro) wins the Pepsi by singing Aretha Franklin's 'Respect'. After she wins, she overthrows the king and gives Pepsi to all the town",
    "Standard": "NTSC",
    "Definition": "SD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 20: 00"
  },
  "Clip7": {
    "Name": "Best Buy",
    "Description": "An ad featuring the creators of the cameraphone, Siri, and the first text message. The creators of Words with Friends also appear parodying the incident involving Alec Baldwin playing the game on an airplane",
    "Standard": "PAL",
    "Definition": "HD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 10: 05"
  },
  "Clip8": {
    "Name": "Captain America: The First Avenger",
    "Description": "Video Promo",
    "Standard": "PAL",
    "Definition": "HD",
    "Start": "00: 00: 00: 00",
    "End": "00: 01: 30: 00"
  },
  "Clip9": {
    "Name": "Volkswagen 'Black Beetle'",
    "Description": "A computer-generated black beetle runs fast, as it is referencing the new Volkswagen model",
    "Standard": "NTSC",
    "Definition": "HD",
    "Start": "00: 00: 00: 00",
    "End": "00: 00: 30: 00"
  }
};

reelList = {
    selectedPALSDClips:[],
    selectedPALHDClips:[],
    selectedNTSCSDClips:[],
    selectedNTSCHDClips: []
  };

  totalFFPAL;
  totalFFNTSC;
  clipsEndTimeArrPAL;
  clipsEndTimeArrNTSC;
  clipsSplitEndTimeArrPAL;
  clipsSplitEndTimeArrNTSC;

  totalFFarrayPAL;
  totalFFarrayNTSC;

  clipsEndTimeArrPALSD;

  //16-06-2017
  clipsEndTimeArray;
  totalTimeTest;
  hh:any[]; mm:any[]; ss:any[];  totalHH:number; totalMM:number; totalSS:number; 

  getAllClips(): any {
    return this.videoclips;   
  }

  //add clips
  //
  addClipsPALSD(standard, definition, name, description): any { 
    let newvalue = {
      Standard:standard,
      Definition: definition,
      Name: name || "Test Name",
      Description: description || "Testing description",
      Start: "00: 00: 00: 00",
      End: "00: 00: 30: 00"
    }

    if(newvalue.Standard === "PAL" && newvalue.Definition === "SD") {
        this.reelList.selectedPALSDClips.push(newvalue); 
    } else {
        alert("Cannot add HD or NTSC clip into this reel")
    }
  }

  addClipsPALHD(standard, definition, name, description): any { 
    let newvalue = {
      Standard:standard,
      Definition: definition,
      Name: name || "Test Name",
      Description: description || "Testing description",
      Start: "00: 00: 00: 00",
      End: "00: 00: 30: 00"
    }

    if(newvalue.Standard === "PAL" && newvalue.Definition === "HD") {
        this.reelList.selectedPALHDClips.push(newvalue);   
    } else {
        alert("Cannot add SD or NTSC clip into this Reel")
    }
  }

  addClipsNTSCSD(standard, definition, name, description): any { 
    let newvalue = {
      Standard:standard,
      Definition: definition,
      Name: name || "Test Name",
      Description: description || "Testing description",
      Start: "00: 00: 00: 00",
      End: "00: 00: 30: 00"
    }

    if(newvalue.Standard === "NTSC" && newvalue.Definition === "SD") {
        this.reelList.selectedNTSCSDClips.push(newvalue);
    } else {
        alert("Cannot add HD or PAL clip into this Reel")
    }
  }

  addClipsNTSCHD(standard, definition, name, description): any { 
    let newvalue = {
      Standard:standard,
      Definition: definition,
      Name: name || "Test Name",
      Description: description || "Testing description",
      Start: "00: 00: 00: 00",
      End: "00: 00: 30: 00"
    }

    if(newvalue.Standard === "NTSC" && newvalue.Definition === "HD") {
        this.reelList.selectedNTSCHDClips.push(newvalue);
    } else {
        alert("Cannot add SD or PAL clip into this Reel")
    }
  }

  //create reel
  createStandardClips():any {  
    for(let val in this.videoclips) { 
        let obj = this.videoclips[val];
        if(obj.Standard === "PAL") {
            (obj.Definition === "SD") ? this.reelList.selectedPALSDClips.push(obj) : this.reelList.selectedPALHDClips.push(obj);        
        } else {
            (obj.Definition === "SD") ? this.reelList.selectedNTSCSDClips.push(obj) : this.reelList.selectedNTSCHDClips.push(obj); 
        }
    }
    return this.reelList;
  }

  

  // FF count PAL SD
   calculateframeRatingPAL(clipStandard:string, clipDefinition:string): any {   
      var obj;
    
      for(let val in this.videoclips) {  
          obj = this.videoclips[val]; 
      
        if(obj.Definition === clipStandard) { 
          if(obj.Standard === clipDefinition) { 
            let ffQuotientForSeconds, ffRemainder, framesCount: number, ff=[]; 
              for(let i=0; i<this.clipsEndTimeArrPAL.length; i++) {
                this.clipsSplitEndTimeArrPAL = this.clipsEndTimeArrPAL[i].split(":");
                ff.push(this.clipsSplitEndTimeArrPAL[3]);
              }
              this.totalFFarrayPAL = ff.reduce((a,b) => a+ parseFloat(b), 0);    
       
              framesCount = 25;
              ffQuotientForSeconds = Math.floor(this.totalFFarrayPAL / framesCount) < 10 ? "0"+Math.floor(this.totalFFarrayPAL / framesCount) : Math.floor(this.totalFFarrayPAL / framesCount);
              ffRemainder = (this.totalFFarrayPAL % framesCount) < 10 ? "0"+Math.floor(this.totalFFarrayPAL % framesCount) : Math.floor(this.totalFFarrayPAL % framesCount);
            
              this.totalFFPAL = "00:00:"+ffQuotientForSeconds+":"+ffRemainder;
          }   
        }
      }
      return this.totalFFPAL;

   }
   
   // FF count NTSC SD
   calculateframeRatingNTSC(clipStandard:string, clipDefinition:string): any {  
 
    var obj;
    
      for(let val in this.videoclips) {  
          obj = this.videoclips[val]; 
      
        if(obj.Definition === clipStandard) { 
          if(obj.Standard === clipDefinition) { 
              let ffQuotientForSeconds, ffRemainder, framesCount: number, ff=[]; 
              for(let i=0; i<this.clipsEndTimeArrNTSC.length; i++) {
                this.clipsSplitEndTimeArrNTSC = this.clipsEndTimeArrNTSC[i].split(":");
                ff.push(this.clipsSplitEndTimeArrNTSC[3]);
              }
              this.totalFFarrayNTSC = ff.reduce((a,b) => a+ parseFloat(b), 0);      
              // return this.totalFFarrayNTSC; 
              framesCount = 30;
              ffQuotientForSeconds = Math.floor(this.totalFFarrayNTSC/framesCount) < 10 ? "0"+Math.floor(this.totalFFarrayNTSC / framesCount) : Math.floor(this.totalFFarrayNTSC / framesCount);
              ffRemainder = (this.totalFFarrayNTSC % framesCount) < 10 ? "0"+Math.floor(this.totalFFarrayNTSC % framesCount) : Math.floor(this.totalFFarrayNTSC % framesCount);
            
              this.totalFFNTSC = "00:00:"+ffQuotientForSeconds+":"+ffRemainder; 
          } 
        }
      }

      return this.totalFFNTSC;

   }

  //calculate frame count
   calculateTotalFFPAL(): any { 

      this.clipsEndTimeArrPAL=[];
      this.clipsEndTimeArrNTSC=[];
      var obj;

      for(let val in this.videoclips) {  
          obj = this.videoclips[val]; 

          if(obj.Definition === "SD") { 
            if(obj.Standard === "PAL") {
                this.clipsEndTimeArrPAL.push(obj.End);  
            } else {
                this.clipsEndTimeArrNTSC.push(obj.End); 
            }  
          }  
      }
      
   }

   // time test
   calculateTimeTest() {   
      var obj, minsQuotient, minsRemainder;
      this.clipsEndTimeArray = [];
        this.hh = [];
        this.mm = [];
        this.ss =[];
    
      for(let val in this.videoclips) {   
          obj = this.videoclips[val]; 
        
        if(obj.Standard === "PAL" && obj.Definition === "SD") {  
              this.clipsEndTimeArray.push(obj.End);
        }
         
      }
      //16-06-2017
      for(let i=0; i<this.clipsEndTimeArray.length; i++) {
          let clipsSplitEndTimeArr = this.clipsEndTimeArray[i].split(":");
          this.hh.push(clipsSplitEndTimeArr[0]);
          this.mm.push(clipsSplitEndTimeArr[1]);
          this.ss.push(clipsSplitEndTimeArr[2]); 
        }

      for(let i=0; i<this.ss.length; i++) { 
          this.totalHH +=parseFloat(this.hh[i]);
          this.totalMM +=parseFloat(this.mm[i]);
          this.totalSS +=parseFloat(this.ss[i]);  
        }
      
        //var hours = Math.floor(this.totalHH / 3600)* 60 < 10 ? ("00" + Math.floor(this.totalHH / 3600) * 60).slice(-2) : Math.floor(this.totalHH / 3600)* 60;
        //console.log("Hours: "+ hours);
       // console.log(this.mm);
        //console.log(this.totalMM);
        //var minutes = ("00" + Math.floor(((this.totalMM*60) % 3600) / 60) * 60).slice(-2);
        //console.log("Mins: "+minutes);
       // console.log(this.ss);
       // console.log(this.totalSS);
        //var seconds = ("00" + (this.totalSS % 3600) ).slice(-2);
        //console.log("Secs: "+ seconds)
        //var totalMinutes = Number(hours)+Number(minutes)+Number(seconds);
       // console.log(this.ff);
        //console.log(this.totalFF);
       // return (totalMinutes-(totalMinutes%=60))/60 + (9 < totalMinutes?':':':0')+ totalMinutes;

       var minutesArray = this.mm;
       var secondsArray = this.ss;

        var totalMins = minutesArray.reduce(function(prev, curr){ 
            return (Number(prev) || 0) + (Number(curr) || 0);  
        });

        var totalSecs = secondsArray.reduce(function(prev, curr){ 
            return (Number(prev) || 0) + (Number(curr) || 0);  
        });
      

      var minutes1 = totalSecs;
      minsQuotient = Math.floor( minutes1/ 60) < 10 ? "0"+Math.floor(minutes1 / 60) : Math.floor(minutes1 / 60);
      minsRemainder = (minutes1 % 60) < 10 ? "0"+ Math.floor(minutes1 % 60) : Math.floor(minutes1 % 60);
          
      this.totalTimeTest = "00:"+minsQuotient+":"+minsRemainder+":00";

      

      //console.log(this.clipsEndTimeArray);
      console.log(this.hh);
      console.log(this.mm);
      console.log(this.ss);
      console.log(this.totalTimeTest)
      

   }
  
}
