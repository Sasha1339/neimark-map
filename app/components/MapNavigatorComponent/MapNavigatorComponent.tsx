import {FC, useContext, useEffect} from "react";
import {MapNavigatorContext} from "../../providers/Navigator/MapNavigatorContext";
import mapData, { default as GeoJson } from './map/map_with_line.json';
import PathFinder from "geojson-path-finder";
import geojson, { default as GeoJsonTest } from "./map/test.json";
import {transformPoints} from "./data";

const pathFinder = new PathFinder(geojson);

type Props = {

}

export const MapNavigatorComponent: FC<Props> = () => {

  const navigatorContext = useContext(MapNavigatorContext);


  useEffect(() => {

    if (navigatorContext?.route[0] && navigatorContext?.route[1]) {

      const from = GeoJsonTest.features.find((e) => e.properties.id === navigatorContext.route[0])
      const to = GeoJsonTest.features.find((e) => e.properties.id === navigatorContext.route[1])

      if (from && to) {
        const path = pathFinder.findPath(from, to);

        console.log(path);

        const coordsSvg = [
          [
            43.98163441172832,
            56.31430335843851
          ],
          [
            43.98149534721557,
            56.31413256956836
          ],
          [
            43.98178521545225,
            56.314053936312746
          ],
          [
            43.98191254075269,
            56.31422472553453
          ],
          [
            43.98163441172832,
            56.31430335843851
          ]
        ];

        const newCoords = path?.path.map((e) => transformPoints([e[0], e[1]]));

        navigatorContext?.setPathCoords(newCoords);

      }

    }

  }, [navigatorContext?.route]);

  return (<></>)

}