Nodejs devbox
================

Basic Ubuntu Trusty Tahr box with nodejs.

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
$ node /vagrant/opt/hello/server.js
```

