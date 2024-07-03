import { Component } from '@angular/core';
import {TodoListItem} from './todo-list-item.component.ts'

@Component({
    standalone: true,
    imports: [TodoListItem],
    template: `
      <ul>
        <todo-list-item></todo-list-item>
      </ul>
    `,
  })
  export class TodoList {}