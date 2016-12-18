var ref;
var _id=0;
// create an array with nodes
var nodes = [];

// create an array with edges
var edges = [];
function initialisze(){
  ref=null;
}

function Node(data){
_id++;
this.data=data;
this.prev=null;
this.next=null;
this.id=_id;
}

function NodeXOR(data){
this.data=data;
this.addr=null;
}

function addtoHead(data){
  var node = new Node(data);
  update();
  nodes.push({id:node.id,label:data,color: 'lime'});
  var temp=node;
  node=ref;
  ref=temp;
  node.next=ref;
  ref.prev=node;
  edges.push({from:node.id,to:ref.id,arrows:'to, from'});

}
function update(){
  for(var i in nodes){
    nodes[i]["color"]='#ffcc00';
    console.log(JSON.stringify(i));
  }
}
function addtoTail(data){
  var node = new Node(data);
  update();
  nodes.push({id:node.id,label:data,color: 'lime'});
  var prevNode=ref;
  while(prevNode.prev!=null){
    prevNode=prevNode.prev;
  }
  node.next=prevNode;
  prevNode.prev=node;
  edges.push({from:node.id,to:prevNode.id,arrows:'to, from'});
}

function CreateList(data){
  ref=new Node(data);
}

function runAddtoHead(){
var input = document.getElementById("front").value;
if(ref==null){
  CreateList(input);
  nodes.push({id:_id,label:input,color: 'lime'});
}else{
  addtoHead(input);
}
create('LR');
}

function runAddtoTail(){
var input = document.getElementById("end").value;
if(ref==null){
  CreateList(input);
  nodes.push({id:_id,label:input,color: 'lime'});
}else{
  addtoTail(input);
}
create('LR');
}

function create(dir){
  // create an array with nodes
  var nodesArray = new vis.DataSet(nodes);

  // create an array with edges
  var edgesArray = new vis.DataSet(edges);
  // create a network

  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodesArray,
    edges: edgesArray
  };
  var options = {
  layout: {
    improvedLayout:true,
    hierarchical: {
      direction: dir,        // UD, DU, LR, RL
      sortMethod: 'directed'   // hubsize, directed
    }
  }
}
var network = new vis.Network(container, data, options);
}
