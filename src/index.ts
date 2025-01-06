import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import { v4 as uuidv4 } from 'uuid';
const postcssConfig = require('./postcss.config.js');

// Path to the output CSS file
const outputCSSPath = path.join(__dirname, '../dist/styles.css');

// Process CSS using PostCSS plugins
const processCSS = async (rawCSS: string): Promise<string> => {
  const result = await postcss(postcssConfig.plugins).process(rawCSS, {
    from: undefined, // No source file
  });
  return result.css;
};

// Core function for generating CSS class names and writing the CSS to the file
export async function css(
  strings: TemplateStringsArray,
  ...values: any[]
): Promise<string> {
  // Combine the template literals with values
  const rawCSS = strings.reduce(
    (acc, curr, i) => acc + curr + (values[i] || ''),
    ''
  );

  // Generate a unique class name based on a hash of the CSS content
  const className = `outcss-${uuidv4().slice(0, 8)}`;

  // Process the CSS using PostCSS
  const processedCSS = await processCSS(rawCSS);

  // Write the processed CSS to the output file (appends if file already exists)
  fs.appendFileSync(outputCSSPath, `.${className} { ${processedCSS} }\n`);

  return className;
}
