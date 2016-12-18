var ref;
var _id=0;
// create an array with nodes
var nodes = [];

// create an array with edges
var edges = [];
function initialisze(){
  ref=null;
  _id=0;
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
  edges.push({from:node.id,to:ref.id,arrows:'to'});

}
function update(){
  for(var i in nodes){
    nodes[i]["color"]='#ffcc00';
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
  edges.push({from:node.id,to:prevNode.id,arrows:'to'});
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

function addAfter(data,se){
  var temp=ref;
  while(temp.data!=se && temp.prev!=null){
    temp=temp.prev;
  }
  if(temp.data==se && temp.next==null){
    addtoHead(data);
  }
  else if(temp.data==se){
    var node = new Node(data);
    deleteEdgesFrom(temp.id);
    deleteEdgesTo(temp.next.id);
    //
    node.prev=temp;
    node.next=temp.next;
    temp.next.prev=node;
    temp.next=node;
    nodes.push({id:node.id,label:data,color: 'lime'});
    edges.push({from:node.prev.id,to:node.id,arrows:'to'});
    edges.push({from:node.id,to:node.next.id,arrows:'to'});

  }else{
    alert(se + " Not found .");
  }
}

function addBefore(data,se){
  var temp=ref;
  while(temp.data!=se && temp.prev!=null){
    temp=temp.prev;
  }
  if(temp.data==se && temp.prev==null){
    addtoTail(data);
  }
  else if(temp.data==se){
    var node = new Node(data);
    deleteEdgesFrom(temp.prev.id);
    deleteEdgesTo(temp.id);
    node.next=temp;
    temp.prev.next=node;
    node.prev=temp.prev;
    temp.prev=node;
    nodes.push({id:node.id,label:data,color: 'lime'});
    edges.push({from:node.prev.id,to:node.id,arrows:'to'});
    edges.push({from:node.id,to:node.next.id,arrows:'to'});
  }else{
    alert(se + " Not found .");
  }
}

function runAddBefore(){
var input = document.getElementById("before").value;
var a_f = input.split(",");
addBefore(a_f[0],a_f[1]);
create('LR');
}


function runAddAfter(){
var input = document.getElementById("after").value;
var a_f = input.split(",");
addAfter(a_f[0],a_f[1]);
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

function runDelete(){
  var input = document.getElementById("delete").value;
  if(ref.data==input){
      deleteNode(ref.id);
      deleteEdges(ref.id);
      if(ref.prev!=null){
        ref=ref.prev;
        ref.next=null;
      }
  }
  else{
  var temp=ref;
    while(temp.data!=input){
      temp=temp.prev;
    }
  if(temp.prev==null){
    var t=temp.next;
    t.prev=null;
  }else{
    var t=temp.next;
    var p=temp.prev;
    t.prev=p;
    p.next=t;
    edges.push({from:temp.prev.id,to:temp.next.id,arrows:'to'});
  }
  deleteNode(temp.id);
  deleteEdges(temp.id);

  }
  create('LR');
}

function startUpList(){
  if(ref==null){
    CreateList(10);
    nodes.push({id:_id,label:10,color: 'lime'});
  }else{
    addtoTail(10);
  }
  create('LR');
}

function deleteEdges(id){
  for(var i in edges){
    if(edges[i]["from"]==id || edges[i]["to"]==id){
      edges.splice(i,1);
    }
  }
}

function deleteEdgesFrom(id){
  for(var i in edges){
    if(edges[i]["from"]==id){
      edges.splice(i,1);
    }
  }
}

function deleteEdgesTo(id){
  for(var i in edges){
    if(edges[i]["to"]==id){
      edges.splice(i,1);
    }
  }
}

function updateNodeColor(node){
  update();
  for(var i in nodes){
    if(nodes[i]["id"]==node.id){
      nodes[i]["color"]='lime';
    }
  }
}

function deleteNode(id){
  for(var i in nodes){
    if(nodes[i]["id"]==id){
      nodes.splice(i,1);
    }
  }
}

function runSearch(){
   var input = document.getElementById("search").value;
   var temp=ref;
   while(temp.data!=input && temp.prev!=null){
     temp=temp.prev;
   }
   if(temp.data==input){
   updateNodeColor(temp);
   create('LR');
 }else{
   alert(temp + " Not Found");
 }
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
