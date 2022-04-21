FROM docker.io/tomcat
ENV TZ=Asia/Shanghai
RUN /bin/cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY dist/ /usr/local/tomcat/webapps/ROOT
CMD ["catalina.sh", "run"]
EXPOSE 8080
