class DeviceDetector {

    userDeviceInfo: string;

    constructor(userAgent?: string) {
        this.userDeviceInfo = userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : "");
    }

    public isMobileOrTablet(): boolean {
        const mobileTabletRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|tablet|Tab/i;
        return mobileTabletRegex.test(this.userDeviceInfo);
    }

}

export default DeviceDetector;