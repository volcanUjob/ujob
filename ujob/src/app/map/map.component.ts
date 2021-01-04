import { Component, OnInit } from '@angular/core';

import { MapsService } from "./maps.service";

@Component({
  selector: "app-map",
  templateUrl: "/src/app/map/map.component.html",
  styleUrls: ["/src/app/map/map.component.scss"],
})
export class MapComponent {
  lat = 36.9922751;
  lng = 10.1255164;
  country = "";
  calling_code = "";
  city = "";
  ip = 0;
  location: Object | undefined;

  constructor(private map: MapsService) {}

  // tslint:disable-next-line: use-life-cycle-interface
  // ngOnInit() {
  //   this.map.getLocation().subscribe((data) => {
  //     console.log(data);
  //     this.lat = data.latitude;
  //     this.lng = data.longitude;
  //     this.country = data.country_name;
  //     this.calling_code = data.country_calling_code;
  //     this.city = data.city;
  //     this.ip = data.ip;
  //   });
  // }
}
