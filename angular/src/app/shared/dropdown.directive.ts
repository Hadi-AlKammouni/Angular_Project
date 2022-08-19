import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    
    @HostBinding('class.open') isOpen = false;
    
    // Close only when re-click on it
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen
    // }

    // Close upon clicking anywhere outside
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

} 