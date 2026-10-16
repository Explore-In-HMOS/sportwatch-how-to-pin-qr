export default {
    data: {
        qrValue: 'https://developer.huawei.com',
        qrCol: '#000000',
        qrBcol: '#ffffff',
        qrSize: 200
    },

    onCreate() {
        console.info('Application onCreate');
    },

    onDestroy() {
        console.info('Application onDestroy');
    },

    // QR interactions
    onQrClick() {
        this.qrValue = this.qrValue.includes('Hello')
            ? 'QR: HarmonyOS Rocks!'
            : 'QR: Hello Wearable!';
    },

    onQrLongPress() {
        this.qrCol = (this.qrCol === '#000000') ? '#1e90ff' : '#000000';
        this.qrBcol = (this.qrBcol === '#ffffff') ? '#f0f8ff' : '#ffffff';
    },

    // resize buttons
    makeBigger() {
        if (this.qrSize < 300) {
            this.qrSize += 20;
        }
    },
    makeSmaller() {
        if (this.qrSize > 200) {
            this.qrSize -= 20;
        }
    },

    // color toggles
    changeColor() {
        this.qrCol = (this.qrCol === '#1e90ff') ? '#fa8072' : '#1e90ff';
    },
    changeBackgroundColor() {
        this.qrBcol = (this.qrBcol === '#ffffff') ? '#ffffe0' : '#ffffff';
    }
}
