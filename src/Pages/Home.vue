<template>
    <v-dialog v-model="dialog" persistent max-width="600px" class="custom-dialog">
        <v-card>
            <v-card-title class="justify-space-between">
                <span class="text-h5 text-center">Создание штрихкода</span>
                <v-btn text small icon tile @click="exit">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="barcodeValue"
                        label="Введите значение штрихкода"
                        required
                        :rules="[v => !!v || 'Это поле обязательно']"
                    ></v-text-field>

                    <div class="text-center mt-4">
                        <canvas ref="barcodeCanvas"></canvas> <!-- Используем canvas для отображения штрихкода -->
                    </div>

                    <div class="text-center mt-4">
                        <v-btn @click.prevent="generateBarcode" color="primary">Сгенерировать штрихкод</v-btn>
                        <v-btn @click.prevent="printBarcode" color="primary">Печать</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import JsBarcode from 'jsbarcode'; // Импортируем JsBarcode

export default {
    name: "BarcodeDialog",
    data() {
        return {
            dialog: true,
            valid: false,
            barcodeValue: '4006381333931', // Пример валидного EAN-13
        };
    },
    methods: {
        show() {
            this.dialog = true;
        },
        exit() {
            this.dialog = false;
        },
        generateBarcode() {
            JsBarcode(this.$refs.barcodeCanvas, this.barcodeValue, {
                format: "EAN13",
                width: 1.5,
                height: 40,
                displayValue: true,
            });
        },
        printBarcode() {
            if (this.$refs.form.validate()) {
                const printWindow = window.open('', '_blank');
                const canvas = this.$refs.barcodeCanvas;

                printWindow.document.write(`
                    <html>
                    <head>
                        <title>Штрихкод</title>
                    </head>
                    <body onload="window.print(); window.close();">
                        <h1>Штрихкод EAN-13</h1>
                        <img src="${canvas.toDataURL()}" alt="Штрихкод"/>
                    </body>
                    </html>
                `);
                printWindow.document.close();
            }
        }
    },
    mounted() {
        this.generateBarcode(); // Генерируем штрихкод при монтировании компонента
    }
};
</script>

<style scoped>
.custom-dialog {
    width: 600px !important; /* Установка ширины диалога */
}
</style>