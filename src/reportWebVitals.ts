import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry); // Utilisation de onCLS au lieu de getCLS
    onFCP(onPerfEntry); // Utilisation de onFCP
    onFID(onPerfEntry); // Utilisation de onFID
    onLCP(onPerfEntry); // Utilisation de onLCP
    onTTFB(onPerfEntry); // Utilisation de onTTFB
  }
};

export default reportWebVitals;
