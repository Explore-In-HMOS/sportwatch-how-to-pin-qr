export default {
    data: {
        codeRaw: '',
        codeDisplay: '— — — —',
        qrCol: '#000000',
        qrBcol: '#ffffff',
        qrSize: 160
    },

    updateDisplay() {
        const arr = ['—','—','—','—'];
        for (let i = 0; i < this.codeRaw.length && i < 4; i++) {
            arr[i] = this.codeRaw[i];
        }
        this.codeDisplay = arr.join(' ');
    },

    appendDigit(d) {
        if (this.codeRaw.length >= 4) {
            return;
        }
        this.codeRaw = this.codeRaw + d;
        this.updateDisplay();
    },

    press0() { this.appendDigit('0'); },
    press1() { this.appendDigit('1'); },
    press2() { this.appendDigit('2'); },
    press3() { this.appendDigit('3'); },
    press4() { this.appendDigit('4'); },
    press5() { this.appendDigit('5'); },
    press6() { this.appendDigit('6'); },
    press7() { this.appendDigit('7'); },
    press8() { this.appendDigit('8'); },
    press9() { this.appendDigit('9'); },

    remove() {
        if (this.codeRaw.length === 0) {
            return;
        }
        this.codeRaw = this.codeRaw.slice(0, -1);
        this.updateDisplay();
    },

    reset() {
        this.codeRaw = '';
        this.updateDisplay();
    },

    onInit() {
        this.updateDisplay();
    }
}
