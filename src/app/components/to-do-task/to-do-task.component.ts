import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service'
import {TodoItem} from '../../Item.model'

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {
  name: string = "giorgi";
  items: TodoItem[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.items;
  }

  onNewTask(inputElement: HTMLInputElement) {
    if (inputElement.value) {
      this.itemService.addTask(inputElement.value);
      inputElement.value = '';
    }
  }

  onDeleteTask(index:number) {
    this.itemService.deleteTask(index)
  }

}
