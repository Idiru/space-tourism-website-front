import { Routes } from "@angular/router";
import { DestinationsComponent } from "./pages/destinations/destinations.component";
import { AppComponent } from "./app.component"; // Importer AppComponent

export const routes: Routes = [
  { path: '', component: AppComponent },  // AppComponent est la Homepage
  { path: 'destinations', component: DestinationsComponent }  
];
