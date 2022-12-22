import QRCode from 'qrcode';
import path from 'path';

const createQrCode = async (id: number) => {
  console.log(process.cwd());
  const myPath = path.join(process.cwd(), 'public/images/qrCodes');
  // const fileName = `${id}.png`;
  console.log(`${myPath}/${id}.png`);

  const qrBase64 = await QRCode.toFile(
    `public/images/qrcodes/${id}.png`,
    `localhost:3001/pet/${id}`,
  );

  return qrBase64;
};

export default createQrCode;
