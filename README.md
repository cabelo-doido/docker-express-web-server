# docker-express-web-server
Docker with express web server for general web application.

### Usage

#### Container Build

Please make sure your web application file was paste to `public` directory before build.

```shell
docker build . -t [container image]
```

#### Container Run

```shell
docker run -d -p 80:3000 --name [container name] -v [web app location]:/app/public [container image]
```

#### File Locations

* `/app/public` - Web application location
