import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {
  private readonly matSnackBar = inject(MatSnackBar);

  success(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-success'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  info(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-info'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  error(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-fail'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  warning(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-warning'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
