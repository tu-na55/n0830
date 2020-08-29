FROM node:14.7.0-alpine3.12
# SHELL ["/bin/bash", "-c"]
####################
# ENV
ENV NODE_ENV=development
# ENV NODE_ENV=production
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0
####################
# alpine: use apk
RUN apk update && apk upgrade \
 && apk add --no-cache linux-headers
#  && apk add --no-cache mariadb-dev build-base
####################
# portal
# RUN apt-get update && apt-get install -y locales locales-all
# RUN locale-gen ja_JP.UTF-8
####################
RUN mkdir /app
WORKDIR /app
####################
COPY ./package.json /app/
#  && ./yarn.lock /app/
# RUN yarn install

# RUN yarn add core-js@latest
# RUN yarn add nuxt create-nuxt-app
# RUN yarn add @nuxtjs/axios
####################



# COPY . /usr/src/app/
# COPY . /app/

# シェルスクリプトを実行
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
# ENTRYPOINT ["/app/entrypoint_env.sh"]

####################
# ADD . /code/
# 02
COPY . /app/

####################
# portal
EXPOSE 3000
# EXPOSE 3031


# ENTRYPOINT [ "entrypoint.sh" ]
# CMD [ "webapp" ]
####################
# portal
# CMD ["bash", "-xe", "entrypoint.sh"]
####################
# シェルスクリプトをコピー
# COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
# COPY ./entrypoint_env.sh /app/entrypoint_env.sh
CMD ["npm" "run" "dev"]
# 本番環境用
# CMD ["yarn" "run" "start"]
