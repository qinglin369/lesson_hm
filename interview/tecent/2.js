// 编写二叉树的前序遍历
// function preOder {
//     if(!root) return;
//     console.log(root.val);
//     preOder(root.left);
//     preOder(root.right);
// }
// 递归要函数入栈，容易爆栈，性能差

// 迭代遍历，结果入栈，性能更好
// 递归变迭代,自底向上
function preOder(root) {
    // 栈 右节点先入栈，左节点后入栈
    if(!root) return;
    // 栈模拟递归
    let stack = [];
    stack.push(root);// 根节点入栈
    while(stack.length) {
        let n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}