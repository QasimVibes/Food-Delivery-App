import {readFile} from 'react-native-fs';

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

const convertToBase64 = async (uri: string) => {
  try {
    const base64 = await readFile(uri, 'base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    throw new Error('Failed to convert image to base64');
  }
};

export const uploadToCloudinary = async (imageUri: string) => {
  try {
    const base64Image = await convertToBase64(imageUri);

    const formData = new FormData();
    formData.append('file', base64Image);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse?.error?.message || 'Cloudinary upload failed',
      );
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message || 'Cloudinary upload failed');
  }
};
