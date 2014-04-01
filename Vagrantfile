# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest: 80, host: 8081
  config.vm.network :private_network, ip: "192.168.77.77" 

  config.vm.provider :virtualbox do |vb|
    vb.name = "node devbox"
    vb.customize ["modifyvm", :id, "--memory", "2048"]
    vb.customize ["modifyvm", :id, "--ostype", "Ubuntu_64"]
  end

  config.vm.provision "shell", inline: <<-shell
    apt-get install python-software-properties  -y --force-yes
    apt-get install screen vim -y --force-yes

    add-apt-repository ppa:chris-lea/node.js
    apt-get update
    apt-get install python g++ make nodejs -y --force-yes

    apt-get install npm -y --force-yes
    
    # node /vagrant/opt/hello/server.js
  shell
end
