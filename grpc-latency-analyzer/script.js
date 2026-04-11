const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('grpc')) out+='- gRPC request/response flow\n';
if(txt.includes('latency')) out+='- Latency considerations\n';
if(txt.includes('proto')||txt.includes('schema')) out+='- Protobuf schema detected\n';
if(txt.includes('serialize')) out+='- Serialization/deserialization cost\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze protocol efficiency, size, and performance\n';

res.innerText=out;
}