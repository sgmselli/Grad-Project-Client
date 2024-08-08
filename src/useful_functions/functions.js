export const replaceSpacesWithUnderscores = (str) => {
    return str.replace(/\s+/g, '_');
}

export const replaceUnderscoresWithSpaces = (str) => {
    return str.replace(/_/g, ' ');
}

export const getNumToLastElementFromUrl = (num) => {
    // Get the current URL
    const url = window.location.href;
    
    // Create a URL object
    const urlObj = new URL(url);
    
    // Split the pathname into an array
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment !== '');
    
    // Get the second to last element
    const secondToLastElement = pathSegments.length >= 2 ? pathSegments[pathSegments.length - num] : null;
    
    return secondToLastElement;
}

export const getSecondToLastElementFromUrl = () => {
    // Get the current URL
    const url = window.location.href;
    
    // Create a URL object
    const urlObj = new URL(url);
    
    // Split the pathname into an array
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment !== '');
    
    // Get the second to last element
    const secondToLastElement = pathSegments.length >= 2 ? pathSegments[pathSegments.length - 2] : null;
    
    return secondToLastElement;
}

export const getFifthToLastElementFromUrl = () => {
    // Get the current URL
    const url = window.location.href;
    
    // Create a URL object
    const urlObj = new URL(url);
    
    // Split the pathname into an array
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment !== '');
    
    // Get the second to last element
    const fifthToLastElement = pathSegments.length >= 5 ? pathSegments[pathSegments.length - 5] : null;
    
    return fifthToLastElement;
}