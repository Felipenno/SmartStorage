import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRestCommunicationService } from '@core/services/base-rest-communication/base-rest-communication.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityHandlerService extends BaseRestCommunicationService {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
