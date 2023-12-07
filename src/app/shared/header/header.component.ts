import { Component } from "@angular/core";
import {
  faBars,
  faHome,
  faLayerGroup,
  faLinesLeaning,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  faBars = faBars;
  // faHome = faHome;
  // faLayerGroup = faLayerGroup;
  // faQuestion = faQuestion;
  // faLinesLeaning = faLinesLeaning;
  menus = [
    {
      name: "Home",
      link: "/",
      icon: faHome,
    },

    {
      name: "Categories",
      link: "/categories",
      icon: faLayerGroup,
    },

    {
      name: "Quiz",
      link: "/quiz",
      icon: faQuestion,
    },
    {
      name: "Tips",
      link: "/tips",
      icon: faLinesLeaning,
    },
  ];
}
