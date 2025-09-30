# chai-corner

**This is the repository for Chai's cozy corner.**

This site is made in JS using [Eleventy](https://11ty.dev/). After building, the static site can be served using a web server. The provided [Dockerfile](https://github.com/danae/chai-corner/blob/master/Dockerfile) builds an image that builds the static Eleventy site and serves it using nginx.

An image from this Dockerfile will be built and published to the GitHub Container Registry on every push or pull request using a [GitHub action](https://github.com/danae/chai-corner/blob/master/.github/workflows/docker-publish.yml).

## Installation

You can pull the current version of the image with the following command:

```bash
docker pull ghcr.io/danae/chai-corner:master
```

Other versions of the package can be found [here](https://github.com/danae/chai-corner/pkgs/container/chai-corner).

## Local development

Install Node.js and npm, then run the following command to install the packages and open an Eleventy development web server with live reload at port 8080:

```bash
npm install
npm run dev
```