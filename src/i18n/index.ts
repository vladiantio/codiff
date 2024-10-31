import en from "./en";
import es from "./es";

export function translate(key: string): string {
  if (navigator.language.startsWith("es")) {
    return es[key] || "Translation not found";
  } else {
    return en[key] || "Translation not found";
  }
}