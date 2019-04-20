const fs = require('fs'),
  path = require('path'),
  cli = require('commander'),
  Confirm = require('prompt-confirm');

cli
  .arguments('<path>')
  .option('--destructive', 'Non-destructive')
  .action(function(path) {
    cmdPath = path;
  });

cli.parse(process.argv);

const exts = ['.jpg_large', '.png_large', '.jpg-large', '.png-large'];
let files = [];

function main(cmdPath, destructive) {
  fs.readdirSync(cmdPath).forEach(file => {
    if (endsWithAny(exts, file)) {
      files.push(file);
    }
  });
  if (files.length == 0) {
    console.log('No files found!');
    process.exit();
  }
  if (!destructive || typeof destructive === 'undefined') {
    console.log(files);
    new Confirm('Do you really want to rename these files?').ask(function(answer) {
      if (answer === true) {
        rename(cmdPath);
      } else if (answer === false) {
        console.log('Aborted!');
        process.exit();
      }
    });
  } else {
    rename(cmdPath);
  }
}

main(cmdPath, cli.destructive);

function endsWithAny(suffixes, string) {
  return suffixes.some(function(suffix) {
    return string.endsWith(suffix);
  });
}

function rename(cmdPath) {
  console.log('Starting...');
  files.forEach(file => {
    fs.rename(path.join(cmdPath, file), path.join(cmdPath, file.slice(0, -6)), function(error) {
      console.log(`Renaming ${file}...`);
      if (error) {
        console.error(error);
      }
    });
  });
}
