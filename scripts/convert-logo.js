#!/usr/bin/env node

/**
 * SVG to PNG Converter Script
 *
 * Dieses Script konvertiert die Logo-SVG-Dateien in PNG-Format.
 *
 * Verwendung:
 * node scripts/convert-logo.js
 */

const fs = require('fs');
const path = require('path');

console.log('SVG zu PNG Konverter');
console.log('====================\n');

// Check if sharp is installed
try {
  const sharp = require('sharp');

  const conversions = [
    {
      input: path.join(__dirname, '../public/logo.svg'),
      output: path.join(__dirname, '../public/logo.png'),
      size: 512
    },
    {
      input: path.join(__dirname, '../public/logo-highres.svg'),
      output: path.join(__dirname, '../public/logo-highres.png'),
      size: 1024
    },
    {
      input: path.join(__dirname, '../public/logo-white-bg.svg'),
      output: path.join(__dirname, '../public/logo-white-bg.png'),
      size: 1024
    }
  ];

  const convert = async () => {
    for (const config of conversions) {
      try {
        const svgBuffer = fs.readFileSync(config.input);
        await sharp(svgBuffer)
          .resize(config.size, config.size)
          .png()
          .toFile(config.output);

        console.log(`✓ Erfolgreich konvertiert: ${path.basename(config.output)}`);
      } catch (error) {
        console.error(`✗ Fehler bei ${path.basename(config.input)}:`, error.message);
      }
    }
    console.log('\nKonvertierung abgeschlossen!');
  };

  convert();

} catch (error) {
  console.log('Sharp Paket ist nicht installiert.');
  console.log('\nUm die SVG-Dateien in PNG zu konvertieren, haben Sie folgende Optionen:\n');
  console.log('Option 1: Sharp installieren und Script ausführen');
  console.log('  npm install sharp');
  console.log('  node scripts/convert-logo.js\n');
  console.log('Option 2: Online-Konverter verwenden');
  console.log('  - Öffnen Sie: https://cloudconvert.com/svg-to-png');
  console.log('  - Laden Sie die SVG-Dateien aus dem /public Ordner hoch\n');
  console.log('Option 3: Inkscape verwenden (kostenlos)');
  console.log('  - Download: https://inkscape.org/');
  console.log('  - Öffnen Sie die SVG-Datei');
  console.log('  - Datei > Exportieren > PNG-Bild exportieren\n');
  console.log('Option 4: Browser-Methode');
  console.log('  - Öffnen Sie http://localhost:3002/logo.svg im Browser');
  console.log('  - Rechtsklick > Bild speichern unter > PNG wählen\n');
  console.log('\nDie SVG-Dateien wurden bereits erstellt in:');
  console.log('  - /public/logo.svg (100x100px)');
  console.log('  - /public/logo-highres.svg (512x512px)');
  console.log('  - /public/logo-white-bg.svg (512x512px mit weißem Hintergrund)');
}
