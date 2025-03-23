import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GlobalLoadingService } from '@core/services/global-loading/global-loading.service';

@Component({
  selector: 'app-loading',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  private readonly globalLoadingService = inject(GlobalLoadingService);

  showLoading = false;

  ngOnInit(): void {
    this.globalLoadingService.getLoadingState$().subscribe((loadingState) => {
      this.showLoading = loadingState
    });
  }
}
