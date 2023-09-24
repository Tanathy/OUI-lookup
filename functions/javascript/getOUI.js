function getOUI(mac, data) {
    const formattedMac = mac.replace(/[-:]/g, '').substring(0, 6).toUpperCase();
    const ouiInfo = data.ouis[formattedMac];
  
    if (!ouiInfo) return null;
  
    return {
      "mac": formattedMac,
      "country": data.countries[ouiInfo.cc],
      "organization": data.organizations[ouiInfo.org]
    };
  }