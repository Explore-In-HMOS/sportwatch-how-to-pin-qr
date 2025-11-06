> **Note:** To access all shared projects, get information about environment setup, and view other guides, please visit [Explore-In-HMOS-Wearable Index](https://github.com/Explore-In-HMOS-Wearable/hmos-index).

## PinQR
A lightweight PIN-to-QR generator app made for HarmonyOS wearables.

You type a **4-digit PIN** → app instantly renders a scannable QR code.  
Designed for ultra-fast short codes (pairing tokens / door pins / POS quick-auth).

---

### Preview Screenshots

<div>
    <img src="screenshots/output_1.PNG" width="25%"/>
    <img src="screenshots/output_2.PNG" width="25%"/>
</div>

---

### Use Cases
- Input short numeric codes directly on the watch
- Auto-generate QR without keyboard or phone
- Shows masked PIN & digit feedback
- Optimized for circular watch displays
- Minimal touch-based workflow

---

### Core Mechanics

| State | Meaning |
|-------|---------|
| Input | User pressing digits (0~9) |
| PIN < 4 | QR hidden |
| PIN = 4 | QR instantly visible |
| Reset | clear & hide QR |

---

### Tech Stack (Corrected)

**Languages & UI**
- **HML** 
- **CSS**
- **JavaScript**

**SDK / Tools**
- **HarmonyOS Lite Wearable (JS)**
- **DevEco Studio**

**Components / APIs**
- Built-in `<qrcode>` component

---

### Project Directory

entry/src/main/pages
└─ Index.hml
└─ Index.css
└─ Index.js # keypad logic + QR value binding

### Device Support
- Huawei Lite Wearable
- HarmonyOS-compatible devices supporting JS UI pages

---

### License
- PinQR is distributed under the terms of the MIT License.  
- See the [LICENSE](LICENSE) file for more information.