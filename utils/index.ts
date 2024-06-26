
export const imageSrc = (imageFileName:string) => new URL(`/assets/images/${imageFileName}`, import.meta.url).href