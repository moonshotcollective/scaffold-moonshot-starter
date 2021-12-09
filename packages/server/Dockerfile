## base
FROM node:14 AS base
ENV NODE_ENV=production
WORKDIR /var/www/api
EXPOSE 5000
COPY package.json ./package.json
RUN yarn config list
# Makes sure we're doing a clean install of our dependencies and if dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
RUN yarn cache clean && yarn install --frozen-lockfile --ignore-scripts
# We might use this if our app doesn't emit the correct exit signals
# ENV TINI_VERSION v0.18.0
# ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/local/bin/tini
# RUN chmod +x /usr/local/bin/tini
# ENTRYPOINT ["/usr/local/bin/tini", "--"]
## dev
FROM base AS dev
ENV NODE_ENV=development
COPY . .
RUN yarn install --ignore-scripts --production=false
CMD [ "yarn", "start:dev" ]

## build
FROM dev as build
RUN yarn build
## pre-production
FROM build as pre-prod
RUN rm -rf ./__tests__ && rm -rf ./test && rm -rf ./node_modules && rm -rf ./src && rm -rf ./documentation && rm -rf ./coverage

## test
FROM dev AS test
ENV NODE_ENV=test
RUN yarn lint:src
CMD [ "yarn", "test:e2e" ]

## audit
FROM test AS audit
RUN yarn audit

FROM base AS prod
COPY --from=pre-prod /var/www/api /var/www/api
# HEALTHCHECK CMD curl http://127.0.0.1/ || exit 1
CMD ["node", "./dist/main.js"]
## review
# this will run by default if you don't include a target
# it has prod-only dependencies
# In BuildKit, this is skipped for stages coming before
FROM prod AS review
ENV NODE_ENV=review

FROM prod AS staging
ENV NODE_ENV=staging

USER node