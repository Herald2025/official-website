import type { App } from 'vue';
import { pinia } from './stores/pinia';

export default (app: App) => {
  app.use(pinia);
};
