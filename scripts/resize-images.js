import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../public/img/event');
const outputDir = path.join(__dirname, '../public/event/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageFiles = fs.readdirSync(sourceDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !file.includes('optimized');
});

async function processImages() {
  console.log(`Found ${imageFiles.length} images to process`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    const fileExt = path.extname(file).toLowerCase();
    const fileName = path.basename(file, fileExt);
    const outputPath = path.join(outputDir, `${fileName}.webp`);
    
    try {
      const metadata = await sharp(inputPath).metadata();
      
      const width = Math.min(800, metadata.width);
      const height = Math.round(width * metadata.height / metadata.width);
      
      await sharp(inputPath)
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`Processed ${file} → ${path.basename(outputPath)}`);
      console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
      console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% smaller)`);
      console.log(`  Dimensions: ${metadata.width}x${metadata.height} → ${width}x${height}`);
      console.log('---');
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

processImages().then(() => {
  console.log('Image optimization complete!');
}).catch(err => {
  console.error('Error during image processing:', err);
});
