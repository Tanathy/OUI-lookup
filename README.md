
# OUI-lookup
OUI stands for "Organizationally Unique Identifier." It's a unique identifier assigned to a manufacturer or organization that produces networking or network-related equipment. OUIs are used primarily in the context of MAC (Media Access Control) addresses, which are unique hardware addresses assigned to network devices like computers, routers, and network cards.

An OUI is the first three bytes (24 bits) of a MAC address, and it helps identify the manufacturer or organization responsible for that device. OUIs are managed and assigned by the IEEE (Institute of Electrical and Electronics Engineers) to ensure that MAC addresses are globally unique.

In simple terms, an OUI is like a company's or organization's "signature" in the world of networking. It's a way to identify who made a particular network device based on the first three bytes of its MAC address.

The function is designed to provide quick and convenient information retrieval based on the first 24 bits (3 bytes) of a MAC (Media Access Control) address. It extracts and analyzes the Organizationally Unique Identifier (OUI) portion of the MAC address, which uniquely identifies the manufacturer or organization behind a network device. The function offers two primary pieces of information:

**Country Code**: It identifies the country code associated with the OUI, helping users determine the country where the manufacturer is registered.

**Organization**: The function fetches the name or information about the organization or manufacturer associated with the OUI. This can be particularly useful for identifying the maker of a network device.

## What does the JSON object contain?

 - Total MAC addresses: 34221. 
 - Total organizations: 19090.
 - Total countries: 97.
 - Last updated: 2023-09-24 16:30:58.

## How to Use:

Input a MAC address or the first 24 bits of a MAC address into the function with the JSON variable.
The function will automatically extract the OUI from the provided input.
It will then perform a lookup to provide you with the following details:

 - First 24 bits of a MAC address
 - Information about the organization or manufacturer behind the OUI.
 - Country code associated with the OUI.

The return format is the following JSON object:

    {
    "mac":  mac,
    "country":  "country code",
    "organization":  "organization name"
    };

**It will return `null` if there is no record found.**

You can check some examples in the **functions** folder. Please note, you should load the **oui_macs.json** JSON object first to be able to use it.
