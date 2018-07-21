import { Component, OnInit, DoCheck } from '@angular/core';
import { AlphabetService } from '../services/alphabet.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css'],
  providers: [AlphabetService]
})
export class Level1Component implements OnInit, DoCheck {
  public allAlphabets = this.alphabet.getAlphabet();
  public selectedOption: any;
  public randomSoundIndex: any;
  public sounds: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
     'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  public playedSound;
  public playedSoundUrl;

  constructor(private alphabet: AlphabetService) { }

  ngOnInit() {
    setTimeout(this.playSound(), 1000);
  }

  ngDoCheck() {

  }

  onSelection(event: any) {
    this.selectedOption = event.target.innerHTML;
    if (this.selectedOption === this.playedSound) {
      console.log('correct');
      this.playSound();
    }
  }

  playSound() {
    setInterval(this.randomSoundIndex = Math.floor(Math.random() * 3), 1000);
    this.playedSound = this.sounds[this.randomSoundIndex];
    this.playedSoundUrl = '../../assets/sounds/' + this.playedSound + '.mp3';
    console.log('play clicked');
    console.log(this.randomSoundIndex);
    console.log(this.playedSound);
    console.log(this.playedSoundUrl);
  }



}
