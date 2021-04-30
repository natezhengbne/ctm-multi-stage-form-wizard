module.exports = {
  extends: ["react-app", "react-app/jest"],
  globals: {
    fetchMock: true,
  },
  rules: {
    "no-console": [
      process.env.NODE_ENV === "production" ? "error" : "warn",
      { allow: ["info", "warn", "error"] },
    ],
  },
};
