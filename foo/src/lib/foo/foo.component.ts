import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-eslint-repro-foo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent {}
