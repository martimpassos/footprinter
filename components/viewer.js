import { Viewer, Ion, CesiumTerrainProvider, IonResource, Math, Cartesian3 } from 'cesium';
import { useEffect } from 'react';

Ion.defaultAccessToken = process.env.CESIUM_TOKEN;

export default () => {
    useEffect(() => {
        console.log(process.env.CESIUM_TOKEN)
        const viewer = new Viewer("cesiumContainer", {
            terrainProvider: new CesiumTerrainProvider({
                url: IonResource.fromAssetId(1327286),
            }),
        });
        viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(-43.170222, -22.905779, 100),
            orientation: {
                heading: Math.toRadians(-135.0),
                pitch: Math.toRadians(-15.0),
            }
        });
    }, []);
    return <div id="cesiumContainer"></div>;
}; 
