# diff

ABCDE  EABCD(新)

- 处理新VDOM 第一个节点 E
  在old 找到

- A
i = 1
j = 0
j < lastIndex
虚拟DOM el 指向真实DOM
E.el ->nextSibling
BCDEA

- B
j = 1
j < lastIndex
B.el ->nextSibling
CDEAB
一次类推

移动次数太多