FROM nginx

WORKDIR /opt/app

ADD nginx.conf /etc/nginx/nginx.conf
