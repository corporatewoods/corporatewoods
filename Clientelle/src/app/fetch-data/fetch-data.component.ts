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
    http.get<WeatherForecast[]>('https://corporatewoods.gitlab.io/assets/weather.json').subscribe(result => {
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
    if (this.filterBySummary && this.filterBySummary !== '') {
      this.filterBySummaryFunction();
    } 
    if (this.filterByVendor && this.filterByVendor !== '') {
      this.filterByVendorFunction();
    } 
    if (this.filterByVendorType && this.filterByVendorType !== '') {
      this.filterByVendorTypeFunction();
    } 
    if (!this.filterBySummary && !this.filterByVendor && !this.filterByVendorType) {
      this.resetFilters();
    }
    if (this.filterBySummary === '' && this.filterByVendor === '' && this.filterByVendorType === '') {
      this.resetFilters();
    }
  }
  filterByVendorTypeFunction() {
    this.forecastsView = this.forecastsView.filter(x => x.vendorType == this.filterByVendor);
    console.log(this.filterByVendor);
    console.log(this.forecastsView.length);
  }

  filterBySummaryFunction() {
    this.forecastsView = this.forecastsView.filter(x => x.summary == this.filterBySummary);
    console.log(this.filterBySummary);
    console.log(this.forecastsView.length);
  }

  filterByVendorFunction() {
    this.forecastsView = this.forecastsView.filter(x => x.vendor == this.filterByVendor);
    console.log(this.filterByVendorType);
    console.log(this.forecastsView.length);
  }

  resetFilters() {
    this.forecastsView = this.forecasts;
    console.log("resetting filters...");
    console.log(this.forecastsView.length);
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
