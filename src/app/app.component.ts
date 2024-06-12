import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'texteditor';
  text: string = '';
  textList: { text: string, isBold: boolean, isItalic: boolean }[] = [];
  isBold: boolean = false;
  isItalic: boolean = false;
  addTextToList() {
    if (this.text.trim() !== '') {
      this.textList.push(
        {
          text: this.text,
          isBold: this.isBold,
          isItalic: this.isItalic
        }
      );
      this.text = ''; 
      this.isBold = false; 
      this.isItalic = false;
    }
  }
  resetInput() {
    this.text = ''; 
    this.isBold = false; 
    this.isItalic = false; 
  }
  toggleBold() {
    this.isBold = !this.isBold; 
  }

  toggleItalic() {
    this.isItalic = !this.isItalic; 
  }

}
