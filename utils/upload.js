import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`
})

export default function upload(url) {
  const result = cloudinary.v2.uploader.upload(url, function (error, result) {
    if (error) {
      return error;
    }
    //se tudo der certo:
    return result;
  })
  return result;
}
