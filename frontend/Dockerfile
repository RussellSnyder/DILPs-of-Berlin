FROM danlynn/ember-cli:2.16.2


EXPOSE 4200 7357 9222

ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package.json .
COPY yarn.lock .

RUN ember init
RUN yarn

# Copy all our app's directories
COPY . .

CMD ["npm install -g ember-cli"]
CMD ["ember new app"]
#CMD ["./ember init"]
#CMD ["./serve"]
