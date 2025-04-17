console.log("Shared D loaded (once)");

export function useD(name: string) {
  console.log(`@shared/d is being used by ${name}`);
}

export { default as SharedComponent } from "./App.vue";
