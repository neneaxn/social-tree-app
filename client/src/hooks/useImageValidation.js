const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

export default function useImageValidation() {

    const validateImageURL = (url) => {
        if (!url) {
            return true;
        }
        
        const hasValidProtocol = url.toLowerCase().startsWith('http://') || url.toLowerCase().startsWith('https://');

        if (!hasValidProtocol) {
            return false;
        }
        const hasValidExtension = validImageExtensions.some(ext => 
            url.toLowerCase().endsWith(ext)
        );

        return hasValidExtension;
    };

    return validateImageURL;
}