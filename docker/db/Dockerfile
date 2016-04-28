FROM centos:centos7
MAINTAINER Brain Machine Tecnologia LTDA

VOLUME /data/db /data/log

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install mongodb-server mongodb pwgen; yum clean all

ENV AUTH yes
ENV DATABASE admin
ENV DB_USER admin

ADD run.sh /run.sh
RUN chmod +x /run.sh

EXPOSE 27017

CMD /run.sh
