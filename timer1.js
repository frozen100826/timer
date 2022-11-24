const args = process.argv.slice(2); //paht 삭제

var beep = args;


function alertTerminal(){
  process.stderr.on("\x07");
}

for ( var i =0; i < beep.length; i++){
  
  setTimeout(() => {
    process.stdout.write('world cup\n');
  }, beep[i]*1000);
}
