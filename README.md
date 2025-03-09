# NewsInnoscripts - Dockerized React Vite App

NewsInnoscripts is a **news aggregator app** that pulls data from **New York Times, NewsAPI.org, and GNews.io**. Users can **search by keyword**, and **filter by date, source, and category**.

---

## **📌 Prerequisites**
- [Node.js](https://nodejs.org/) (Latest LTS)
- [Yarn 4](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## **🛠️ Setup & Run**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/obioraigboanusi/news-aggregator-react-ts.git

cd news-aggregator-react-ts
```

### **2️⃣ Install Dependencies**
```sh
yarn install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file:
```env
VITE_NEWS_API_KEY=value
VITE_NEWS_API_URL=value

VITE_GNEWS_API_KEY=value
VITE_GNEWS_API_URL=value

VITE_NYTIMES_API_KEY=value
VITE_NYTIMES_API_URL=value
```

---

## **🐳 Docker Instructions**
### **1️⃣ Build & Run with Docker**
```sh
docker build -t newsinnoscripts .
docker run --env-file .env -p 4173:4173 newsinnoscripts
```

### **2️⃣ Using Docker Compose (Recommended)**
#### **a. Start the Application**
```sh
docker-compose up --build
```

#### **b. Stop the Application**
```sh
docker-compose down
```

---

## **📦 Running Locally (Without Docker)**
For development:
```sh
yarn dev
```
For production build:
```sh
yarn build && yarn preview
```

---

**Regards**

## **Obiora**