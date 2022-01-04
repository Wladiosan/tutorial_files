import {
  AfterContentChecked,
  AfterContentInit, ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input('myPost') post: any
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef | undefined

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges')
  }

  ngOnInit(): void {
    // console.log('ngOnInit')
    // console.log(this.infoRef?.nativeElement)
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked')
  }
}
