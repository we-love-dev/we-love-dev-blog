FROM centos:centos7
MAINTAINER Brain Machine Tecnologia LTDA.

ENV NODE_ENV production

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm git
RUN yum clean all

RUN npm install npm -g
RUN npm install -g n
RUN n lts
RUN npm install pm2@latest -g

ADD run.sh /run.sh
RUN chmod +x /run.sh

RUN git clone https://github.com/we-love-dev/we-love-dev-blog /data

WORKDIR /data

RUN git submodule update --init --recursive

WORKDIR /data/src

ENV PORT 80
EXPOSE $PORT

CMD /run.sh
