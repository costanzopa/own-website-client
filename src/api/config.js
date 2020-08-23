export const basePath = (process.env.CONTEXT === "production")
  ? "https://own-website-api-live.herokuapp.com/api"
  : "http://localhost:8080/api";
export const apiVersion = "v1";
