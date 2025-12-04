import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { path: 'src/assets/header1.webp', quality: 80 },
  { path: 'src/assets/lurdinha2.webp', quality: 30 },
  { path: 'src/assets/metricas.webp', quality: 80 },
  { path: 'src/assets/bgjpg.webp', quality: 80 }
];

async function optimizeImages() {
  for (const imageConfig of images) {
    try {
      const inputBuffer = fs.readFileSync(imageConfig.path);
      const originalSize = inputBuffer.length;
      
      // Otimizar com qualidade específica e remover metadados desnecessários
      const optimizedBuffer = await sharp(inputBuffer)
        .webp({ 
          quality: imageConfig.quality,
          effort: 6,
          smartSubsample: true
        })
        .toBuffer();
      
      const optimizedSize = optimizedBuffer.length;
      const savings = originalSize - optimizedSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
      
      fs.writeFileSync(imageConfig.path, optimizedBuffer);
      
      console.log(`${path.basename(imageConfig.path)}:`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(1)} KB`);
      console.log(`  Otimizado: ${(optimizedSize / 1024).toFixed(1)} KB`);
      console.log(`  Economia: ${(savings / 1024).toFixed(1)} KB (${savingsPercent}%)\n`);
      
    } catch (error) {
      console.error(`Erro ao otimizar ${imageConfig.path}:`, error.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('Otimização de imagens concluída!');
}).catch(console.error);
