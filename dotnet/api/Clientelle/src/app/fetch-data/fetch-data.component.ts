import { Component, Inject, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements AfterContentChecked {
  public forecasts: WeatherForecast[];
  public forecastsView: WeatherForecast[];
  public filterBySummary: string;
  public filterByVendor: string;
  public filterByVendorType: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
      this.forecastsView = result;
    }, error => console.error(error));
  }

  ngAfterContentChecked() {
    console.log("we are in fetch data after content checked");
    console.log(this.forecasts);
    console.log(this.filterBySummary);
    console.log(this.filterByVendor);
    console.log(this.filterByVendorType);
  }

  filterBySummaryFunction() {
    this.forecastsView = this.forecastsView.filter(x => x.summary == this.filterBySummary);
  }

  filterByVendorFunction() {
    this.forecastsView = this.forecastsView.filter(x => x.vendor == this.filterByVendor);
  }

  resetFilters() {
    this.forecastsView = this.forecasts;
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
  vendor: string;
  vendorType: string;
}
