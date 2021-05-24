import { Component, OnInit } from '@angular/core';
import {Collection} from "../models/collection.model";
import {CollectionService} from "../shared/collection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[] = this.collectionService.generateCollections()

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {}

  onEdit(id: number) {
    this.collectionService.editMode = true
    this.collectionService.editItemIndex = id
    this.router.navigate(['/collections/edit', id])
  }

}
