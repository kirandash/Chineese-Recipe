import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[crDropdown]'
})
export class DropdownDirective {
	// To bind a property on a certain hosting element
	@HostBinding('class.open') get opened() { // class open will be bind to host element if isOpen equals true
		return this.isOpen;
	}
	// Listen to click event
	@HostListener('click') openme() {
		this.isOpen = true;
	}
	@HostListener('mouseleave') closeme() {
		this.isOpen = false;
	}
	private isOpen = false;
}
