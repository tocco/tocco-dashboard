FROM node

# Set a working directory
WORKDIR /app

COPY ./build/package.json .
COPY ./build/yarn.lock .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY ./build .
RUN chgrp -R 0 . && chmod -R ug+rwX .

# Copy entrypoint script
COPY .docker/entrypoint.py /entrypoint
RUN chmod +x /entrypoint

# Run the container under "node" user by default
USER node

CMD [ "/entrypoint" ]
