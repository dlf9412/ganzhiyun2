1.先安装nginx和node环境、mongodb
    安装nginx：
        yum install nginx
        查看nginx相关路径:whereis nginx
        
        启动服务：
            systemctl start nginx
        启动异常:参考https://blog.csdn.net/u012832088/article/details/80729002
        
        修改nginx配置文件--/etc/nginx/nginx.conf
        重启nginx---找到对应的.server文件:/usr/sbin/nginx -s reload

    node安装:
        选择一个压缩包存储的文件夹------/usr/local/sbin/    此处存储安装包以及node所有配置信息

        #下载 连接可以从nodejs.org download页面右键复制到
        wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz

        #解压
        tar -xvf node-v10.16.3-linux-x64.tar.xz

        检查是否安装成功
        cd /usr/local/sbin/node-v10.16.3-linux-x64/bin/     
        ./node -v

        添加node环境变量
        参考:https://www.cnblogs.com/ae6623/p/5912462.html

        #ln -s /usr/local/sbin/node-v10.16.3-linux-x64/bin/node /usr/local/bin/node
        #ln -s /usr/local/sbin/node-v10.16.3-linux-x64/bin/npm /usr/local/bin/npm

    mongodb安装--先进入存储的文件夹中 /usr/local/mongodb
        下载:wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-4.2.1.tgz
        解压:tar -zxvf mongodb-linux-x86_64-rhel62-4.2.1.tgz

        添加配置信息以及存储的文件夹
        参考：https://blog.csdn.net/weixin_34090562/article/details/88772423

        启动mongodb--任意位置都可以启动
        nohup /usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/mongod --dbpath=/usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/data/db --logpath=/usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/data/logs/mongodb.log  --logappend >/dev/null 2>&1 &

            #/usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/mongod--对应的mongod的地址
            #/usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/data/db--数据存储的地址
            #/usr/local/mongodb/mongodb-linux-x86_64-rhel62-4.2.1/bin/data/logs/mongodb.log---日志
            #nohup 进程挂起

            查看所有进程
            netstat -anp|more
            杀死某个进程
            kill -9 进程ID
        
        查看数据库的信息
        进入数据库存储位置--/usr/local/mongodb
        ----./mongo，就会启动数据库的shell
        相关的数据库操作参考：https://www.runoob.com/mongodb/mongodb-tutorial.html

2.将对应的构建包放到想要展示的文件夹下--/home
  //server 为后台服务文件夹
  启动 后台服务
  sudo nohup node  /home/serive/index.js >/dev/null 2>&1 &
  或者进入到/home/serive/     -----   nohup node ./index.js &
  启动后查看是否运行
  jobs--running表示在运行，exit表示异常退出
  如果异常退出，参考:https://blog.csdn.net/vivianXuejun/article/details/78809655

  退出远程连接:当使用nohup挂起进程以后，需要使用命令行 exit  去退出远程连接，不能强行关闭x按钮，会导致异常退出，而进程关闭


  配置nginx--/etc/nginx/nginx.conf
  配置后重新启动
  /usr/sbin/nginx -s reload

3.如果配置完成以后访问配置的ip和端口发现无法访问，检查服务中的安全组配置时候配置了添加的端口号包括后台端口

  
