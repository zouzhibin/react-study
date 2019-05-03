let state = {number:0,name:"zzb"}

let callbacks = []
callbacks.push([(state)=>({number:state.number+1}),()=>{console.log(state)}])
callbacks.push([(state)=>({number:state.number+2}),()=>{console.log(state)}])
callbacks.push([(state)=>({number:state.number+3}),()=>{console.log(state)}])

let v;
let fns = [];

while((v=callbacks.shift())){
  let [cb,fn] = v;
  // cb(state) 
  // 覆盖
  let partialState = cb(state) 
  for(let key in partialState){
    state[key] = partialState[key]
  }
  fns.push(fn)
}
fns.forEach(fn=>fn())