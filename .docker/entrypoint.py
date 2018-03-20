#!/usr/bin/python
import json
import os

ENV_PREFIX='DBOARD_CREDS_'


def write_credentials():
    creds = {name: creds for name, creds in credentials_from_env()}
    with open('credentials.json', 'w') as f:
        json.dump(creds, f, indent=True)


def credentials_from_env():
    for key, value in os.environ.items():
        if key.startswith(ENV_PREFIX):
            name = key[len(ENV_PREFIX):]
            user, passwd = value.split(':', 1)
            yield name, { 'username': user, 'password': passwd }


def main():
    write_credentials()
    os.execvp('node', ['node', 'server.js'])


if __name__ == '__main__':
    main()
