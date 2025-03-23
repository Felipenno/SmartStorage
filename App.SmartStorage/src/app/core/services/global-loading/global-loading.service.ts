import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoadingService {
  private readonly loadingStateBehavior = new BehaviorSubject(false);

  showLoading(): void{
    this.loadingStateBehavior.next(true);
  }

  hideLoading(): void{
    this.loadingStateBehavior.next(false);
  }

  getLoadingState$(): Observable<boolean>{
    return this.loadingStateBehavior.asObservable();
  }

}
