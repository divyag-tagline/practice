import { Component, OnInit } from '@angular/core';

interface Window {
  initMap: () => void;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//  initMap(): void {
//     const directionsService = new google.maps.DirectionsService();
//     const directionsRenderer = new google.maps.DirectionsRenderer();
//     const map = new google.maps.Map(
//       document.getElementById("map") as HTMLElement,
//       {
//         zoom: 7,
//         center: { lat: 41.85, lng: -87.65 },
//       }
//     );
  
//     directionsRenderer.setMap(map);
  
//     const onChangeHandler =  () => {
//       calculateAndDisplayRoute(directionsService, directionsRenderer);
//     };
  
//     (document.getElementById("start") as HTMLElement).addEventListener(
//       "change",
//       onChangeHandler
//     );
//     (document.getElementById("end") as HTMLElement).addEventListener(
//       "change",
//       onChangeHandler
//     );
//   }
// calculateAndDisplayRoute  (
//     directionsService: google.maps.DirectionsService,
//     directionsRenderer: google.maps.DirectionsRenderer
//   ) {
//     directionsService
//       .route({
//         origin: {
//           query: (document.getElementById("start") as HTMLInputElement).value,
//         },
//         destination: {
//           query: (document.getElementById("end") as HTMLInputElement).value,
//         },
//         travelMode: google.maps.TravelMode.DRIVING,
//       })
//       .then((response) => {
//         directionsRenderer.setDirections(response);
//       })
//       .catch((e) => window.alert("Directions request failed due to " + status));
//   }

 
//   window.initMap = this.initMap;
}
