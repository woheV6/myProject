# myProject
这是一个人练习项目
```
关联git
git init
git add .
git commoit -am '.'
git remote add origin git@github.com:woheV6/myProject.git
git push -u origin master
git pull --rebase origin master
git push 
```
```
配置github的ssh密钥:
输入 cd ~/.ssh
ssh-keygen -t rsa -C "youremail@youremail.com"
然后会在 .ssh 目录生产两个文件：id_rsa和id_rsa.pub
复制ssh key到github：
On the GitHub site Click “Settings” > Click “SSH and GPG Keys” > Click “New SSH key”
```

##js注意事项
- 总是使用hasOwnProperty来取属性的时候,避免原型对象扩展带来的困扰;
## 相关好文
- js秘密花园: http://bonsaiden.github.io/JavaScript-Garden/zh/
- Node初学者入门，一本全面的NodeJS教程 http://ourjs.com/detail/529ca5950cb6498814000005
- node入门 http://www.nodebeginner.org/index-zh-cn.html
- nodejs事件轮询 http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop
- 理解nodejs http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb
- 从零开始nodejs系列文章 http://blog.fens.me/series-nodejs
- angularjs nodejs 	https://github.com/zensh/jsgen
- 七天学会NodeJS 	https://github.com/nqdeng/7-days-nodejs
- 过年7天乐，学nodejs 也快乐 http://www.cnblogs.com/qqloving/p/3541099.html
- 【NodeJS 学习笔记04】新闻发布系统 http://www.cnblogs.com/yexiaochai/p/3536547.html
- 一个nodejs博客 	http://60sky.com
- nodejs定时任务 	http://my.oschina.net/u/568264/blog/193773
- node express 入门教程 	http://www.w3cfuns.com/article-5598538-1-1.html
- Node.js 包教不包会 https://github.com/alsotang/node-lessons