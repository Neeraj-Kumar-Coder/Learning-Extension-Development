# What is the difference between `chrome.storage.local` and `chrome.storage.sync`?

## `chrome.storage.local`
- **Storage Location:** Data is stored locally on the user's device.
- **Storage Limits:** Typically allows for a larger amount of data (up to 5MB per extension).
- **Data Accessibility:** The data is only accessible from the device where it was stored. It does not sync across devices.
- **Use Case:** Ideal for storing data that doesn't need to be shared across devices or browsers, such as cache data, temporary data, or device-specific settings.

## `chrome.storage.sync`
- **Storage Location:** Data is stored in the cloud and synced across all devices where the user is logged in with their Chrome profile.
- **Storage Limits:** Smaller storage quota compared to `local` (typically up to 100KB per extension, with a maximum of 8KB per item).
- **Data Accessibility:** The data is synchronized across all devices where the user is logged into their Chrome profile. This means changes made on one device will be reflected on others.
- **Use Case:** Ideal for storing data that should be consistent across multiple devices, such as user settings, preferences, or any data that benefits from being accessible everywhere the user logs in.

## Summary
- Use `chrome.storage.local` for larger, device-specific data that doesn't need to be synchronized across devices.
- Use `chrome.storage.sync` for smaller, profile-bound data that benefits from synchronization across devices.