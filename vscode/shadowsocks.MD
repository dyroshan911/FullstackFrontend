## 自建小飞机
- 注册aws， ec2 实例选择ubuntu
- https://juejin.im/post/5d81a8e3f265da03d55e8d48 AWS云EC2搭建SS服务器（AWS一年免费）
- https://blog.huihut.com/2016/12/03/BandwagonShadowsocksServer/ hadowsocks安装及配置多用户(服务端)
- https://bbs.feng.com/forum.php?mod=viewthread&tid=11626785&page=1

```javascript
sudo su
pip install shadowsocks
{
    "server":"0.0.0.0",
    "server_port":12,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"dai8071",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open":false
}
//优化ss性能

ssserver -c /etc/shadowsocks/ss.json -d start
telnet ip 12
```
## 优化ss性能
```bash
vim /etc/sysctl.d/local.conf
```
```bash

# max open files
fs.file-max = 1024000
# max read buffer
net.core.rmem_max = 67108864
# max write buffer
net.core.wmem_max = 67108864
# default read buffer
net.core.rmem_default = 65536
# default write buffer
net.core.wmem_default = 65536
# max processor input queue
net.core.netdev_max_backlog = 4096
# max backlog
net.core.somaxconn = 4096

# resist SYN flood attacks
net.ipv4.tcp_syncookies = 1
# reuse timewait sockets when safe
net.ipv4.tcp_tw_reuse = 1
# turn off fast timewait sockets recycling
net.ipv4.tcp_tw_recycle = 0
# short FIN timeout
net.ipv4.tcp_fin_timeout = 30
# short keepalive time
net.ipv4.tcp_keepalive_time = 1200
# outbound port range
net.ipv4.ip_local_port_range = 10000 65000
# max SYN backlog
net.ipv4.tcp_max_syn_backlog = 4096
# max timewait sockets held by system simultaneously
net.ipv4.tcp_max_tw_buckets = 5000
# TCP receive buffer
net.ipv4.tcp_rmem = 4096 87380 67108864
# TCP write buffer
net.ipv4.tcp_wmem = 4096 65536 67108864
# turn on path MTU discovery
net.ipv4.tcp_mtu_probing = 1

# for high-latency network
net.ipv4.tcp_congestion_control = hybla
# forward ivp4
net.ipv4.ip_forward = 1
```
-------

```bash

Congratulations, ShadowsocksR server install completed!
Your Server IP        :  3.136.140.142
Your Server Port      :  443
Your Password         :  dai8071
Your Protocol         :  origin
Your obfs             :  http_simple_compatible
Your Encryption Method:  chacha20-ietf

Your QR Code: (For ShadowsocksR Windows, Android clients only)
 ssr://My4xMzYuMTQwLjE0Mjo0NDM6b3JpZ2luOmNoYWNoYTIwLWlldGY6aHR0cF9zaW1wbGVfY29tcGF0aWJsZTpaR0ZwT0RBM01RLz9vYmZzcGFyYW09
Your QR Code has been saved as a PNG file path:
 /home/ec2-user/shadowsocks_r_qr.png

Welcome to visit: https://teddysun.com/486.html
Enjoy it!

[root@ip-172-31-32-89 ec2-user]# Your QR Code: (For ShadowsocksR Windows, Android clients only)
bash: syntax error near unexpected token `('
[root@ip-172-31-32-89 ec2-user]#  ssr://My4xMzYuMTQwLjE0Mjo0NDM6b3JpZ2luOmNoYWNoYTIwLWlldGY6aHR0cF9zaW1wbGVfY29tcGF0aWJsZTpaR0ZwT0RBM01RLz9vYmZzcGFyYW09

Welcome to visit: https://teddysun.com/486.html
Enjoy it!

```
