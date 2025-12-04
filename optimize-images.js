import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'src/assets/header1.webp',
  'src/assets/lurdinha2.webp',
  'src/assets/metricas.webp',
  'src/assets/bgjpg.webp'
];

async function optimizeImages() {
  for (const imagePath of images) {
    try {
      const inputBuffer = fs.readFileSync(imagePath);
      const originalSize = inputBuffer.length;
      
      // Otimizar com qualidade 80% e remover metadados desnecessários
      const optimizedBuffer = await sharp(inputBuffer)
        .webp({ 
          quality: 80,
          effort: 6,
          smartSubsample: true
        })
        .toBuffer();
      
      const optimizedSize = optimizedBuffer.length;
      const savings = originalSize - optimizedSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
      
      fs.writeFileSync(imagePath, optimizedBuffer);
      
      console.log(`${path.basename(imagePath)}:`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(1)} KB`);
      console.log(`  Otimizado: ${(optimizedSize / 1024).toFixed(1)} KB`);
      console.log(`  Economia: ${(savings / 1024).toFixed(1)} KB (${savingsPercent}%)\n`);
      
    } catch (error) {
      console.error(`Erro ao otimizar ${imagePath}:`, error.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('Otimização de imagens concluída!');
}).catch(console.error);
