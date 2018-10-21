import {Synopsis} from './synopsis';
import {User} from './User';

export class Article {
  public articleId: number;
  public articleName: string;
  public title: string;
  public description: string;
  public user: User;
  public readByUserList: User[];
  public likes: number;
  public published: Date;
}
