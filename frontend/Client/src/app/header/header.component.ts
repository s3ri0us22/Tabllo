import { Component, OnInit } from "@angular/core";
import {
  faHome,
  faTable,
  faBell,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faTable = faTable;
  faBell = faBell;
  faPlus = faPlus;
  constructor() {}

  ngOnInit() {}
}
