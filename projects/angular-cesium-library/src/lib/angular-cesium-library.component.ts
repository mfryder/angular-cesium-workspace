import { Component, OnInit } from '@angular/core';
import { Cesium } from 'cesium';

@Component({
  selector: 'lib-angular-cesium-library',
  templateUrl: './angular-cesium-library.component.html',
  styles: []
})
export class AngularCesiumLibraryComponent implements OnInit {
  public viewer:Cesium.Viewer;
  constructor() { }

  ngOnInit(): void {
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain()
    });
  }


}
