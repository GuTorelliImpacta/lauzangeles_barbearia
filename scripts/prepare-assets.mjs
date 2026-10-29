// Gera as versões otimizadas a partir de assets/originais (não publicado).
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const IN = 'assets/originais/';
const OUT = 'src/assets/';
await mkdir(OUT, { recursive: true });

// Logo: recorte circular com fundo transparente
const logoBox = { left: 12, top: 6, width: 790, height: 790 };
const mask = Buffer.from(
  `<svg width="790" height="790"><circle cx="395" cy="395" r="393" fill="#fff"/></svg>`,
);
const logo = await sharp(IN + 'logo-lauzangeles.jpg')
  .extract(logoBox)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();
await sharp(logo).resize(720).webp({ quality: 88 }).toFile(OUT + 'logo.webp');
await sharp(logo).resize(180).png().toFile('public/apple-touch-icon.png');
await sharp(logo).resize(64).png().toFile('public/favicon.png');
await sharp(logo).resize(512).png().toFile('public/icon-512.png');

// Fotos do espaço
await sharp(IN + 'interior-neon-mustang.jpg').resize({ width: 1200 }).jpeg({ quality: 86, mozjpeg: true }).toFile(OUT + 'neon-mustang.jpg');
await sharp(IN + 'interior-espelhos-bandeira.jpg').jpeg({ quality: 88, mozjpeg: true }).toFile(OUT + 'espelhos-bandeira.jpg');

// Detalhe do atendimento: recorte sem rostos (mãos, máquina, capa)
await sharp(IN + 'atendimento-barbeiro-cliente.jpg')
  .extract({ left: 540, top: 500, width: 613, height: 560 })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(OUT + 'detalhe-atendimento.jpg');

// Imagem de compartilhamento 1200x630
const chev = (y, c) => `<polyline points="0,${y + 120} 600,${y - 40} 1200,${y + 120}" fill="none" stroke="${c}" stroke-width="22"/>`;
const og = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#171216"/>${chev(70, '#CA322F')}${chev(130, '#E6F4FF')}${chev(190, '#E6F4FF')}</svg>`);
const logoOg = await sharp(logo).resize(400).toBuffer();
await sharp(og).composite([{ input: logoOg, left: 400, top: 190 }]).jpeg({ quality: 88 }).toFile('public/og.jpg');
console.log('ok');
