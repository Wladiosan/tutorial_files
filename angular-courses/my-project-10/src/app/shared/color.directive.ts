import {Directive, HostBinding, OnInit} from '@angular/core'


@Directive({
  selector: '[appColor]'
})

export class ColorDirective implements OnInit {
  // @ts-ignore
  @HostBinding('style.color') color: string

  ngOnInit(): void {
    this.color = '#aaaaaa'
  }

}
