import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  previousButton = 'tab-0';

  switchButtonStyles( clickedButton: string ) {
    
    if (clickedButton != this.previousButton) {
      var element = document.getElementById(clickedButton);
      element!.classList.replace("styled-tab-button-type-2", "styled-tab-button-type-1")

      var element = document.getElementById(this.previousButton);
      element!.classList.replace("styled-tab-button-type-1", "styled-tab-button-type-2")
      this.previousButton = clickedButton;

      var positionIndex = clickedButton.slice(-1);
      var element = document.getElementById('highlight-bar');
      element!.style.transform = "translateY(calc("+positionIndex+"* var(--tab-height)))";
    }
  }
}
