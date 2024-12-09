class TreeNode{ 
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

function levelOrderTraveral(root){
    if (!root) return [];
    const result=[];
    //根节点入队
    // 借助队列 先进先出法 FIFO 栈 LIFO
    const queue=[root];
    while(queue.length){
        //出队
        const node = queue.shift();
        result.push(node.val);
        //访问节点
        // console.log(node.val);
        //将左右子节点入队
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return result ;
}
console.log(levelOrderTraveral(root));