import { Injectable } from '@angular/core';
import {Collection} from "../models/collection.model";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  collections: Collection[] = this.generateCollections()
  editMode: boolean = false
  editItemIndex: number = -1

  constructor() { }

  generateCollections(): Collection[] {
    return [
      new Collection(
        'A new collection',
        'Very descriptive description',
        new Date(),
        [
          [],
          []
        ],
        false,
        Math.random() > 0.5 ? 'published' : 'draft'
      ),
      new Collection(
        'A new collection 2',
        'Very descriptive description',
        new Date(),
        [
          [],
          []
        ],
        false,
        Math.random() > 0.5 ? 'published' : 'draft'
      ),
      new Collection(
        'A new collection 3',
        'Very descriptive description',
        new Date(),
        [
          [],
          []
        ],
        false,
        Math.random() > 0.5 ? 'published' : 'draft'
      ),
    ]
  }
}
