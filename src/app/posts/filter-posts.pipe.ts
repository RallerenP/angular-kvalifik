import { Pipe, PipeTransform } from '@angular/core';
import { Post } from "../models/post.model";

@Pipe({
  name: 'filterPosts'
})
export class FilterPostsPipe implements PipeTransform {

  transform(value: (Post & { _id: string })[] | null, args: string): (Post & { _id: string })[] {
    if (value != null)
      return value.filter((post: Post) => post.title.match(args))
    else
      return []
  }

}
