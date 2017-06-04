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

  //private selectedPALSDClips: string[];
 // private selectedPALHDClips: string[];

  //private selectedNTSCSDClips: string[];
 // private selectedNTSCHDClips: string[];

  reelList = {
    selectedPALSDClips:[],
    selectedPALHDClips:[],
    selectedNTSCSDClips:[],
    selectedNTSCHDClips: []
  };

  totalFF;
  clipsEndTimeArr;
  clipsSplitEndTimeArr;

  getAllClips(): any {
    return this.videoclips;   
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

  //calculate frame count
   calculateframeRating(): any { 

      var ffQuotientForSeconds, ffRemainder, framesCount: number, ff=[]; 
      this.clipsEndTimeArr=[];

      for(let val in this.videoclips) {
          let obj = this.videoclips[val]; 

          if(obj.Standard === "PAL") { 

              this.clipsEndTimeArr.push(obj.End); 

             // framesCount = 25;
             // ffQuotientForSeconds = Math.floor(framesCount / framesCount) < 10 ? "0"+Math.floor(framesCount / framesCount) : Math.floor(framesCount / framesCount);
             // ffRemainder = (framesCount % framesCount) < 10 ? "0"+Math.floor(framesCount % framesCount) : Math.floor(framesCount % framesCount);
          }// else {
             // framesCount = 30;
             // ffQuotientForSeconds = Math.floor(framesCount/30) < 10 ? "0"+Math.floor(framesCount / 30) : Math.floor(framesCount / 30);
             // ffRemainder = (framesCount % 30) < 10 ? "0"+Math.floor(framesCount % 30) : Math.floor(framesCount % 30);
         // }

         // return this.totalFF = ffQuotientForSeconds+":"+ffRemainder;
         
      }

      for(let i=0; i<this.clipsEndTimeArr.length; i++) {
          this.clipsSplitEndTimeArr = this.clipsEndTimeArr[i].split(":");
          ff.push(this.clipsSplitEndTimeArr[3]);
      }

      var totalFFarray = ff.reduce((a,b) => a+ parseFloat(b), 0);      
      return totalFFarray;
   }

}
