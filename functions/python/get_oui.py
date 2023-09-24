def get_oui(mac, data):
    formatted_mac = mac.replace("-", "").replace(":", "").upper()[:6]
    oui_info = data["ouis"].get(formatted_mac)
    
    if not oui_info:
        return None
    
    return {
        "mac": formatted_mac,
        "country": data["countries"].get(oui_info["cc"]),
        "organization": data["organizations"].get(oui_info["org"])
    }