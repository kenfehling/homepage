FROM kenfehling/node-selenium-chrome:latest

#USER headless
# Following line fixes
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

#COPY server.tar /opt
#RUN mkdir /opt/server
#RUN tar -xf /opt/server.tar -C /opt/server

EXPOSE 4444

CMD ["java", "-jar", "/opt/selenium/selenium-server-standalone.jar"]

#CMD ["bash"]