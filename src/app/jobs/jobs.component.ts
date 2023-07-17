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
      // Making clicked button highlight
      var element = document.getElementById(clickedButton);
      element!.classList.replace("styled-tab-button-type-2", "styled-tab-button-type-1");
      element!.ariaSelected = "true";

      // Making previous button un-highlight
      var element = document.getElementById(this.previousButton);
      element!.classList.replace("styled-tab-button-type-1", "styled-tab-button-type-2");
      element!.ariaSelected = "false";

      // Make green bar animate to clicked button
      var positionIndex = clickedButton.slice(-1);
      var element = document.getElementById('highlight-bar');
      element!.style.transform = "translateY(calc("+positionIndex+"* var(--tab-height)))";

      // Use clicked button index to set job-panel elements to hidden/showing
      var positionIndexPrev = this.previousButton.slice(-1);
      var element = document.getElementById('panel-'+positionIndex);
      var elementPrev = document.getElementById('panel-'+positionIndexPrev);
      element!.hidden = false;
      elementPrev!.hidden = true;

      this.previousButton = clickedButton;
    }
  }
}
