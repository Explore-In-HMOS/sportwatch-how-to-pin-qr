export default {
    data: {
        qr_value: 'https://developer.huawei.com',
        qr_col: '#000000',
        qr_bcol: '#ffffff',
        qr_size: 200,
    },

    onCreate() {
        console.info('Application onCreate');
    },

    onDestroy() {
        console.info('Application onDestroy');
    },

    // QR interactions
    onQrClick() {
        this.qr_value = this.qr_value.includes('Hello')
            ? 'QR: HarmonyOS Rocks!'
            : 'QR: Hello Wearable!';
    },

    onQrLongPress() {
        this.qr_col = (this.qr_col === '#000000') ? '#1e90ff' : '#000000';
        this.qr_bcol = (this.qr_bcol === '#ffffff') ? '#f0f8ff' : '#ffffff';
    },

    // resize buttons
    makeBigger() {
        if (this.qr_size < 300) this.qr_size += 20;
    },
    makeSmaller() {
        if (this.qr_size > 200) this.qr_size -= 20;
    },

    // color toggles
    changeColor() {
        this.qr_col = (this.qr_col === '#1e90ff') ? '#fa8072' : '#1e90ff';
    },
    changeBackgroundColor() {
        this.qr_bcol = (this.qr_bcol === '#ffffff') ? '#ffffe0' : '#ffffff';
    }
}
