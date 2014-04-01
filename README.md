Nodejs devbox
================

Ubuntu Precise box simply installing Nodejs via apt.

Requirements
------------

* [VirtualBox](https://www.virtualbox.org)
* [Vagrant](http://vagrantup.com)

Installation
------------

```bash
$ git clone https://github.com/aterrien/nodejs-devbox.git
$ cd nodejs-devbox
$ vagrant up
```

Once the VM is booted you can log via SSH

```bash
$ vagrant ssh
```

Start a default server
------------
```bash
$ node /opt/hello/server.js
```

