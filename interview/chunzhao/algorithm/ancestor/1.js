// 定义二叉树节点类
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 将数组转换为二叉树
function arrayToTree(arr) {
    if (arr.length === 0) return null;
    const nodes = arr.map(val => val!== null? new TreeNode(val) : null);
    let i = 0, j = 1;
    while (j < arr.length) {
        if (nodes[i]!== null) {
            nodes[i].left = nodes[j];
            j++;
            if (j < arr.length) {
                nodes[i].right = nodes[j];
                j++;
            }
        }
        i++;
    }
    return nodes[0];
}

// 寻找最近公共祖先的函数
function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q)
        return root;
    // 树 想想递归
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 左右都有值 说明当前节点就是最近公共祖先
    if (left!== null && right!== null)
        return root;

    return left === null? right : left;
}

// 测试数据
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = arrayToTree(arr);
// 找到 p 和 q 对应的节点
let p = null, q = null;
function findNodes(node) {
    if (node === null) return;
    if (node.val === 5) p = node;
    if (node.val === 1) q = node;
    findNodes(node.left);
    findNodes(node.right);
}
findNodes(root);

// 调用函数并输出结果
const result = lowestCommonAncestor(root, p, q);
console.log(result? result.val : null);