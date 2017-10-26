FROM ebuildy/echoprint:latest

MAINTAINER Bogdan Luca <luca.bogdan@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install nodejs \
    && groupadd -g 1000 node \
    && useradd -d /app -g node -u 1000 node \
    && install -g node -o node -d /app \
    && rm -fr /var/lib/apt/lists/* \
    && rm -fr /tmp/*

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["node", "index"]
