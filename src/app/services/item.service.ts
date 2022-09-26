import { Injectable } from '@angular/core'
import type { TodoItem } from '../Item.model'

@Injectable({providedIn: 'root'})
export class ItemService {
  items: TodoItem[] = [
    {desciprtion: "დავალაგოთ", done: false},
    {desciprtion: "დავრეკოთ", done: false},
    {desciprtion: "საჭმელი გავაკეთოთ", done: false},
    {desciprtion: "გავრეცხოთ", done: false},
    {desciprtion: "ვაკოცოთ", done: false},
    {desciprtion: "ჩავეხუტოთ", done: false},
  ]

  addTask(newTaskDesc: string) {
    this.items.unshift({ desciprtion: newTaskDesc, done: false });
  }

  deleteTask(index: number) {
    this.items.splice(index, 1);
  }
  }
