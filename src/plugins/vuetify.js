import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Импорт стилей Vuetify

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import DateFnsAdapter from "@date-io/date-fns";
import { ru } from "date-fns/locale";

const vuetify = createVuetify({
// Настройки Vuetify
components,
directives,
date: {
  adapter: DateFnsAdapter,
  locale: {
    ru: ru,
    en: ru,
  },
},
icons: {
iconfont: 'mdi', // Использование Material Design Icons
},
});

export default vuetify;