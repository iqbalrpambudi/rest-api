const clean = films.map((x) => {
  let a = {...x,actors : x.actors.replace("[", '').replace("]","").replace(/["']/g, "").split(',')}
  let b = a.actors.filter((e)=>{
    return e !== ' nan'
  })
  let c = b.map((e)=> e.replace(/^\s+/g, ''))
  let d = {...a,actors : c}
  return d
}
)

require('fs').writeFile(

  './my.json',

  JSON.stringify(clean),

  function (err) {
      if (err) {
          console.error('Crap happens');
      }
  }
);
