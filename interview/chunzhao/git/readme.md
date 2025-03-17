假设你在开发一个新功能， 不太方便添加到仓库当中，但是一个main 要紧急bug修复

- featurel
 a.txt
 b.txt
 git add .
 git commit -m "feature"
 git push origin 
 
- main
 停下 -> fixed bug

- git stash
 暂时保存代码，但是不提交到仓库
 - git stash list 查看保存的代码
- git checkout main
 ......
- git stash pop 恢复代码

- git checkout featurel(切换featurel分支作为目标分支)
- git branch -b featurel(创建featurel分支)

