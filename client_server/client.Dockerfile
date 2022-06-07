FROM ubuntu:20.04

#Update Ubuntu
RUN apt-get update

#Install dependencies and set timezone
RUN apt-get install -y curl wget gnupg sudo systemctl
RUN apt-get install -yq tzdata && \
    ln -fs /usr/share/zoneinfo/UTC /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

#Install NodeJS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
RUN sudo apt-get install -y nodejs