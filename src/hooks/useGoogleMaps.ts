import { useJsApiLoader } from "@react-google-maps/api";


const useGoogleMaps = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyD_hLQKlHtGp2EnqC-_6qi9B2mv3N_LH0M',
      });

    return { isLoaded, loadError };

}

export default useGoogleMaps;