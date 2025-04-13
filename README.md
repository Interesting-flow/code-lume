# Next.js 项目部署说明

## 一、概述

本指南将详细介绍如何将本地构建好的 Next.js 项目部署到远程服务器上

## 二、本地开发指南

### （一）环境要求

- Node.js 18.x 或更高版本
- pnpm 包管理器
- 下载安装 nodejs 18.x 或更高版本，推荐使用 nvm 管理 nodejs 版本。
  下载安装 pnpm 包管理器。
  安装 nvm：

  ```bash

  下载安装 pnpm 包管理器。
  安装 nvm：

  ```bash
  curl -o- URL_ADDRESS  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```

### （二）安装依赖

首先安装环境
安装 nodejs 18.x：

```bash
nvm install 18
```

安装 pnpm：

```bash
npm install -g pnpm
```

验证安装：

```bash
node -v
pnpm -v
```

接下来是安装项目依赖：

```bash
corepack enable
pnpm install
```

### （三）启动开发服务器

```bash
pnpm dev
```

开发服务器启动后，访问 <http://localhost:3000> 即可进行本地开发。

### （四）生产构建

```bash
pnpm build
pnpm start
```

```

### （五）主题切换

项目支持亮色/暗色主题切换，可通过以下方式操作：

1. 在导航栏右侧点击主题切换按钮
2. 修改 `src/stores/theme.ts` 中的默认主题配置
，实现通过访问服务器 IP 地址打开网站。部署过程涵盖服务器准备、项目文件上传、依赖安装、项目启动以及相关配置等关键步骤。

## 三、准备工作

远程服务器选择与配置
从阿里云、腾讯云、AWS 等提供商处租用适合的云服务器，推荐使用 Linux 发行版，如 Ubuntu 或 CentOS。
确保服务器的 SSH 服务开启，以 Ubuntu 为例，若未开启，使用以下命令启动：
```bash
sudo systemctl start ssh
sudo systemctl enable ssh
```

出于安全考虑，创建一个专门用于部署项目的非 root 用户，命令如下：
sudo adduser deployuser
sudo usermod -aG sudo deployuser

## 四、部署步骤

### （一）上传项目文件

在本地项目根目录下，将构建好的项目文件压缩成单个文件，执行命令：

```bash
zip -r project.zip public package.json pnpm-lock.yaml .next
```

借助 scp 命令把压缩文件上传到服务器。假设服务器 IP 为 [YOUR_SERVER_IP]，用户名为 deployuser，使用以下命令：

```bash
scp project.zip deployuser@[YOUR_SERVER_IP]:/home/deployuser
```

使用 SSH 登录服务器：

```bash
ssh deployuser@[YOUR_SERVER_IP]
```

解压上传的文件：

```bash
unzip project.zip -d my-next-project
```

### （二）安装项目依赖

安装 Node.js 和 npm，在服务器上执行以下命令：

```bash
curl -fsSL <https://deb.nodesource.com/setup_18.x> | sudo -E bash -
sudo apt-get install -y nodejs
```

进入项目目录并安装项目所需依赖：

```bash
cd my-next-project
pnpm install --production
```

### （三）配置并启动项目

若项目依赖环境变量，在服务器上创建 .env.production 文件，并按需添加环境变量，例如：

```bash
nano.env.production
```

使用 pnpm dev 命令启动 Next.js 项目：

```bash
pnpm dev
```

为保障项目在服务器重启后能自动运行，使用 PM2 管理项目进程：
安装 PM2：

```bash
sudo pnpm install -g pm2
```

使用 PM2 启动项目：

```bash
pm2 start pnpm --name "my-next-project" -- start
```

保存 PM2 进程列表：

```bash
pm2 save
```

### （四）配置服务器防火墙

使用 Ubuntu 的 UFW 为例，开放 Next.js 项目默认使用的 3000 端口：

```bash
sudo ufw allow 3000
```

### （五）访问网站

在浏览器中输入服务器的 IP 地址和端口号（如 http://[YOUR_SERVER_IP]:3000），即可访问部署好的 Next.js 项目。
五、进阶配置（可选）：使用 Nginx 进行反向代理
若期望通过服务器 IP 直接访问网站（不指定端口号），可按以下步骤配置 Nginx：
安装 Nginx：

```bash
sudo apt-get install nginx
```

创建一个新的 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/my-next-project
```

在文件中添加以下内容：

```nginx
server {
    listen 80;
    server_name [YOUR_SERVER_IP];

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

创建一个符号链接到 sites-enabled 目录：

```bash
sudo ln -s /etc/nginx/sites-available/my-next-project /etc/nginx/sites-enabled/
```

重启 Nginx 服务使配置生效：

```bash
sudo systemctl restart nginx
```

完成上述所有步骤后，即可通过服务器的 IP 地址顺畅访问 Next.js 项目网站。如有任何疑问或问题，请参考相关技术文档或寻求专业技术支持。
请注意：
部署过程中的 IP 地址、用户名等信息需根据实际情况替换。
不同服务器环境、Next.js 版本可能会有细微差异，需灵活调整。
[你的名字或团队名称]
[具体日期]

以上 readme 文件你可以根据实际情况进行修改，重点突出了关键步骤、注意事项以及可选项，旨在让使用者能快速上手部署项目。
