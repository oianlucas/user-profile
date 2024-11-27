// utils/hashUtils.js

export function encodeUserData(userData) {
    const jsonString = JSON.stringify(userData);  // Convert object to string
    const encoded = btoa(jsonString);  // Base64 encode
    return encoded;
  }
  
  export function decodeUserData(encoded) {
    const decoded = atob(encoded);  // Base64 decode
    return JSON.parse(decoded);  // Parse JSON string back to object
  }
  