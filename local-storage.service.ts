import { Inject, Injectable  } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from './user';

// key that is used to access the data in local storage
const key = '';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  userDetail = [];
  //constructor() { }

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  
     public storeOnLocalStorage(fname: string): void {
          
          // get array of tasks from local storage
          const currentuserDetail = this.storage.get(key) || [];
          // push new task to array
          currentuserDetail.push({
              fname:fname,
              
              isChecked: false 
          });
          // insert updated array to local storage
          this.storage.set(key, currentuserDetail);
          console.log(this.storage.get(key) || 'LocaL storage is empty');
     }
}
