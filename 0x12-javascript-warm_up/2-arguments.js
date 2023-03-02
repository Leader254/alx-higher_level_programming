able File  8 lines (7 sloc)  170 Bytes

#!/usr/bin/node
const argc = process.argv.length;

if (argc > 2) {
  console.log('Argument' + (argc > 3 ? 's' : '') + ' found');
} else {
  console.log('No argument');
}

