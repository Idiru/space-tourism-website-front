import { Component } from "@angular/core";
import { RouterModule } from "@angular/router"; // Import du RouterModule
import { CommonModule } from "@angular/common"; // Pour utiliser les directives Angular
import { PlanetsComponent } from "./components/planets/planets.component";
import { DestinationsComponent } from "./pages/destinations/destinations.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, CommonModule, PlanetsComponent, DestinationsComponent], // IMPORTANT: Ajouter RouterModule ici
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
