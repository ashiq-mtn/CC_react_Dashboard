import React, { useEffect } from "react";

const Maps = () => {
  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        // Ensure the script source path is correct
        script.src = "src/assets/OlaMapsWebSDKNew/olamaps-web-sdk.umd.js"; // Change to correct URL if needed
        script.async = true;
        script.onload = () => resolve(window.OlaMaps);
        script.onerror = () => reject(new Error("Failed to load OlaMaps SDK"));
        document.body.appendChild(script);
      });
    };

    loadScript()
      .then((OlaMaps) => {
        const olaMaps = new OlaMaps({
          apiKey: "Yw1jxOC8MSvQEwiiuzfdTlQxriZWquV38Upv6xdM", // Your API key
        });

        let olaMap = olaMaps.init({
          style:
            "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json", // Style URL
          container: "map", // Container ID
          center: [76.8220416, 9.528], // Coordinates of map center
          zoom: 17, // Initial zoom level
        });

        // Add a marker to the map
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: "bottom",
            color: "red",
            draggable: false,
          })
          .setLngLat([76.8220416, 9.52876]) // Marker position
          .addTo(olaMap);
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: "bottom",
            color: "red",
            draggable: false,
          })
          .setLngLat([76.821451, 9.528223]) // Marker position
          .addTo(olaMap);
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: "bottom",
            color: "red",
            draggable: false,
          })
          .setLngLat([76.822380, 9.527512]) // Marker position
          .addTo(olaMap);
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: "bottom",
            color: "red",
            draggable: false,
          })
          .setLngLat([76.822876, 9.528128]) // Marker position
          .addTo(olaMap);
        olaMaps
          .addMarker({
            offset: [0, 6],
            anchor: "bottom",
            color: "red",
            draggable: false,
          })
          .setLngLat([76.821240, 9.527200]) // Marker position
          .addTo(olaMap);

        // Cleanup function to remove map instance when component unmounts
        return () => {
          if (olaMap) {
            olaMap.remove();
          }
        };
      })
      .catch((err) => console.error("Error loading OlaMaps SDK: ", err));

    // Cleanup the script from the document if needed
    return () => {
      const scriptElement = document.querySelector(
        `script[src*="olamaps-web-sdk.umd.js"]`
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col bg-white rounded-sm">
      <div className="py-6 px-5 text-xl text-black">Bin Location</div>
      <hr className="h-px bg-gray-100 border-0 dark:bg-gray-200" />
      <div
        id="map"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
        // You can adjust the class here to set a default height based on screen size
      />
    </div>
  );
};

export default Maps;
